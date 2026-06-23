# 轻记 v2.1 直接切换改造计划

## Summary
- 目标：将当前基于 `SPECS_v1.0` 的单用户记账小程序/跨端项目，按 `SPECS_v2.1.md` 升级为 `v2` 领域模型，覆盖微信小程序 + H5 双端、账号密码登录、三层预算、信用负债、待摊与双视图分析。
- 改造方式：按用户决策采用“直接切 v2”，不以兼容现有 `/api/v1`、旧页面和旧 SQLite 结构为前提。
- 实施原则：保留现有 Taro 跨端框架与 FastAPI/SQLite 技术栈，但对后端模型、API 前缀、认证方式、前端路由和主要页面进行结构性重构。

## Current State Analysis

### 代码与运行结构
- 前端为 Taro React 项目，路由定义在 [app.config.ts](file:///e:/PersonalFiles/Coding/payBook/src/app.config.ts)，当前 Tab 只有 `首页/统计/预算/我的`，页面仍围绕 `v1` 的“周期性账单 + 待确认 + 导出 CSV + 简单预算/统计”组织。
- 后端由 [main.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/main.py) 注册 `/api/v1` 路由，当前仅包含 `auth/accounts/categories/transactions/budgets/recurring/export/statistics`。
- 现有数据库模型位于 [models.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/models.py)，仅包含 `users/accounts/categories/transactions/budgets/recurring_templates/pending_transactions`。

### 与 SPEC v2.1 的主要差距
- 认证：
  - 当前仅支持微信 `code/openid -> JWT` 登录，见 [auth.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/auth.py)。
  - v2.1 需要小程序微信登录 + H5 账号密码登录双通道。
- 数据模型：
  - 账户模型缺少 `asset/liability`、`subtype`、`credit_limit`、`bill_date`、`due_date`。
  - 分类模型缺少 `nature`、`expense_tier`、`is_stable_income`。
  - 交易模型仍是 `type/date` 语义，缺少 `entry_type/transaction_date/liability_id/is_cash_basis`。
  - 缺少 `liability_records/amortization_templates/accruals/user_settings/monthly_reports`。
  - 当前 `budgets` 仍是通用预算，不是“仅弹性预算项”。
- 业务流：
  - 当前“周期性账单 + 待确认”与 v2.1 的“待摊模板 + 固定支出预留金”不一致。
  - 当前转账只是简单双分录，不区分还款、不联动负债。
  - 当前统计只有基础汇总、分类、余额，未区分消费日/现金流视图，也没有现金流预测、健康度、异常提醒。
- 前端页面：
  - 当前没有 H5 独立登录页、信用账户页面、现金流日历、待摊管理、双视图统计、心愿池历史等页面或交互入口。
- 版本策略：
  - 当前所有前后端服务、类型、页面都写死为 `/api/v1` 及旧字段命名；若直接切 v2，需要同步替换服务层和页面数据契约。

## Proposed Changes

### 一、后端架构与数据层

#### 1. 重建领域模型与 schema
- 文件：
  - [models.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/models.py)
  - [schemas.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/schemas.py)
  - 新增 `backend/app/migrations/` 或 `backend/app/db_init_v2.py`（若不引入 Alembic，则至少提供一次性重建/迁移脚本）
- 改动：
  - `User` 增加 H5 登录所需字段：`username`、`password_hash`、`login_type` 或等价设计。
  - `Account` 改成 v2.1 模型：`type` 仅 `asset/liability`，新增 `subtype/credit_limit/bill_date/due_date`。
  - `Category` 改成 v2.1 模型：`nature/expense_tier/is_stable_income` 替代旧 `type`。
  - `Transaction` 改成 `entry_type/transaction_date/is_cash_basis/liability_id` 语义。
  - 新增 `LiabilityRecord/AmortizationTemplate/Accrual/UserSetting/MonthlyReport`。
  - `Budget` 收敛为“弹性预算项”，字段从 `category_scope` 改成 `category_ids`。
- 为什么：
  - 这是 v2.1 的基础，若不先统一数据层，前端和分析逻辑都会继续建立在错误抽象上。
- 怎么做：
  - 因为用户已选择“直接切 v2”，计划按“重建表结构 + 提供一次性迁移/重置脚本”处理，而不是维持旧表兼容。

#### 2. 引入 v2 API 前缀和模块分层
- 文件：
  - [main.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/main.py)
  - `backend/app/routers/` 下现有路由重构并新增：
    - `auth_v2.py`
    - `user_settings.py`
    - `liabilities.py`
    - `amortization.py`
    - `analytics.py`
    - 以及重写 `accounts.py/categories.py/transactions.py/budgets.py/export.py/statistics.py`
- 改动：
  - API 全部切到 `/api/v2`。
  - 删除或停用 `recurring.py` 及其依赖的待确认逻辑。
  - 将统计拆成基础统计与高级分析，匹配 `SPECS_v2.1.md` 第 5 章。
- 为什么：
  - v2 的资源边界已经变化，继续复用 `/api/v1` 会导致命名和语义持续混乱。

#### 3. 认证双通道
- 文件：
  - [backend/app/routers/auth.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/auth.py)（重写为 v2）
  - 可能新增 `backend/app/security.py`
  - [src/services/auth.ts](file:///e:/PersonalFiles/Coding/payBook/src/services/auth.ts)
  - [src/store/auth.ts](file:///e:/PersonalFiles/Coding/payBook/src/store/auth.ts)
- 改动：
  - 小程序端保留微信 `code -> JWT`。
  - H5 增加账号密码登录、登出、用户信息查询。
  - Token store 增加用户基本信息、登录渠道、是否 H5 已登录状态。
- 为什么：
  - 用户明确要求 H5 第一阶段按账号密码登录规划。

#### 4. 一次性迁移/初始化策略
- 文件：
  - 新增 `backend/app/seed_v2.py`
  - 新增 `backend/README_v2_migration.md`
- 改动：
  - 提供“清空旧库并初始化 v2”脚本，或“从 v1 映射到 v2”的最小迁移脚本。
  - 重新定义系统分类种子：
    - 支出分类必须带 `expense_tier`
    - 收入分类可标记 `is_stable_income`
  - 重新定义默认账户：
    - 资产账户与负债账户分组
    - 增加花呗/信用卡默认负债账户模板
- 为什么：
  - 当前 [seed.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/seed.py) 和默认账户种子不满足 v2.1。

### 二、核心业务能力重构

#### 5. 记账与信用消费原子化
- 文件：
  - [backend/app/routers/transactions.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/transactions.py)
  - 新增 `backend/app/services/transactions.py`
- 改动：
  - 普通收入/支出/转账统一走服务层。
  - 若使用负债账户记支出：
    - 创建消费记录（按消费日、`is_cash_basis=False`）
    - 同时创建 `liability_record`
  - 若是还款转账：
    - 创建现金流转账记录
    - 关联并结清相应负债记录
  - 编辑/删除交易时联动负债与预算。
- 为什么：
  - v2.1 的关键风险点是“消费支出”和“现金流出”解耦但必须保持原子一致。

#### 6. 三层预算全量模型
- 文件：
  - [backend/app/routers/budgets.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/budgets.py)
  - 新增 `backend/app/services/budgeting.py`
  - [src/pages/budgets/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/budgets/index.tsx)
  - [src/pages/budgetEdit/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/budgetEdit/index.tsx)
- 改动：
  - 固定支出预留金：
    - 来自“固定层级分类的月度固定项 + 待摊当月计提”
    - 只读展示，可查看构成
  - 弹性预算：
    - 保留手动创建/编辑/删除
    - 只允许绑定 `flexible` 分类
  - 心愿池（非必要支出池）：
    - 新增用户设置/余额计算接口
    - 支持扣减、透支标记与次月扣减规则
- 为什么：
  - 用户已明确要“固定+弹性+心愿池全量”，不能只做固定预估值。

#### 7. 待摊替代旧周期账单
- 文件：
  - 停用现有 [backend/app/routers/recurring.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/recurring.py)
  - 停用 [backend/app/services/recurring.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/services/recurring.py)
  - 新增 `backend/app/routers/amortization.py`
  - 新增 `backend/app/services/amortization.py`
  - 前端新增：
    - `src/pages/amortizationTemplates/*`
    - `src/pages/amortizationEdit/*`
    - `src/pages/amortizationSchedule/*`
- 改动：
  - 用待摊模板替代“待确认入账”。
  - APScheduler 从“生成 pending”改为“每日检查待摊计提、异常消费、月报生成”。
  - 固定支出预留金按待摊月额自动累计。
- 为什么：
  - SPEC 已明确旧版周期性账单模型不再保留。

#### 8. 双视图统计与分析
- 文件：
  - 现有 [backend/app/routers/statistics.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/statistics.py) 重写或拆成：
    - `statistics.py`
    - `analytics.py`
  - 前端：
    - [src/services/statistics.ts](file:///e:/PersonalFiles/Coding/payBook/src/services/statistics.ts)
    - 新增 `src/services/analytics.ts`
    - [src/pages/statistics/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/statistics/index.tsx)
- 改动：
  - 提供消费日 / 现金流双视图切换。
  - 新增接口：
    - 安全花费上限
    - 健康度 / 储蓄率 / 覆盖月数
    - 异常消费提醒
    - 双视图调节表
    - 未来 30 天现金流预测
  - 统计页改成桌面/H5 友好的多卡片布局，小程序端保持简化版。
- 为什么：
  - v2.1 的首页和统计页都依赖这些分析结果。

### 三、前端结构与页面重组

#### 9. 路由、Tab 与信息架构重构
- 文件：
  - [src/app.config.ts](file:///e:/PersonalFiles/Coding/payBook/src/app.config.ts)
  - 新增/重构页面目录：
    - `src/pages/login/`
    - `src/pages/accounts/`
    - `src/pages/categories/`
    - `src/pages/liabilities/`
    - `src/pages/cashFlow/`
    - `src/pages/amortizationTemplates/`
    - `src/pages/monthlyReport/`
- 改动：
  - 保留 Tab：`首页/统计/预算/我的`，但页面内容按 v2.1 重新组织。
  - “我的”中加入账户、分类、待摊模板、导出、登录方式入口。
  - H5 进入时若未登录先走账号密码登录页。
- 为什么：
  - 当前页面目录围绕旧模型组织，无法承接信用/待摊/分析流程。

#### 10. 首页重做为三层漏斗总览
- 文件：
  - [src/pages/index/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/index/index.tsx)
  - 相关样式和通用组件 `src/components/*`
- 改动：
  - 顶部：总资产、心愿池余额、安全花费上限。
  - 第二行：最近 7 天待还款总额 vs 活期余额。
  - 三层漏斗：固定预留、弹性预算进度、非必要池余额。
  - 最近账单支持标记“信用消费/还款日”。
- 为什么：
  - 首页是 v2.1 的核心体验入口，当前实现明显不足。

#### 11. 记账表单重构
- 文件：
  - [src/pages/addTransaction/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/addTransaction/index.tsx)
  - [src/pages/transfer/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/transfer/index.tsx)
  - 类型与服务：
    - [src/types/api.ts](file:///e:/PersonalFiles/Coding/payBook/src/types/api.ts)
    - [src/services/transactions.ts](file:///e:/PersonalFiles/Coding/payBook/src/services/transactions.ts)
- 改动：
  - 账户切换资产/负债。
  - 选择分类后显示 `expense_tier`，并决定预算必填规则。
  - 负债账户时展示账单日/还款日信息。
  - 还款走专门转账/结清流程。
- 为什么：
  - 这是信用消费、固定/弹性/非必要自动归类的入口。

#### 12. H5 适配策略
- 文件：
  - [config/index.ts](file:///e:/PersonalFiles/Coding/payBook/config/index.ts)
  - [src/app.tsx](file:///e:/PersonalFiles/Coding/payBook/src/app.tsx)
  - 各页面样式文件
- 改动：
  - 明确区分 weapp/h5 的平台能力：
    - H5 暂不实现微信语音插件
    - OCR/ASR 预留接口占位
  - 统计、账单、账户、预算页面增加桌面布局样式。
- 为什么：
  - v2.1 不是仅“能在 H5 打开”，而是 PC Web 作为正式端之一。

### 四、导出、调度与文档

#### 13. 导出接口升级
- 文件：
  - [backend/app/routers/export.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/routers/export.py)
  - [src/pages/exportCsv/index.tsx](file:///e:/PersonalFiles/Coding/payBook/src/pages/exportCsv/index.tsx)
  - [src/services/export.ts](file:///e:/PersonalFiles/Coding/payBook/src/services/export.ts)
- 改动：
  - 导出参数增加 `view=consumption|cash`。
  - 导出列补充账户类型、层级、信用/还款标记等。

#### 14. 调度任务升级
- 文件：
  - [backend/app/main.py](file:///e:/PersonalFiles/Coding/payBook/backend/app/main.py)
  - 新增 `backend/app/jobs.py`
- 改动：
  - APScheduler 任务改为：
    - 待摊计提
    - 异常消费检测
    - 月度简报生成
    - 即将还款提醒预计算
- 为什么：
  - 当前 scheduler 只做 pending 生成，已不适用。

#### 15. 联调与部署文档更新
- 文件：
  - [WEAPP_TESTING_GUIDE.md](file:///e:/PersonalFiles/Coding/payBook/WEAPP_TESTING_GUIDE.md)
  - 新增 `H5_DEPLOY_GUIDE.md`
  - 更新 [backend/README.md](file:///e:/PersonalFiles/Coding/payBook/backend/README.md)
- 改动：
  - 补充 H5 账号密码登录测试流程。
  - 更新 `/api/v2`、新初始化步骤、重建数据库说明。
  - 增加 H5 打包部署与 CORS/HTTPS 配置。

## Assumptions & Decisions
- 已锁定决策：
  - 改造方式：直接切 v2，不兼容旧 `/api/v1` 和旧数据模型。
  - H5 登录：第一阶段按账号密码登录实现。
  - 预算范围：第一阶段完整落地固定支出预留 + 弹性预算 + 心愿池。
- 计划假设：
  - 当前 `backend/data/app.db` 可接受清库或一次性迁移，不要求保留旧测试数据。
  - 仍继续使用 SQLite 作为第一阶段数据库。
  - 语音/OCR 在第一阶段优先保留接口与平台分支，小程序端可继续用现有能力，H5 端允许占位或降级。
  - 第一阶段的 H5 账号密码登录仅服务单用户本人，不引入复杂权限系统。

## Implementation Phases

### Phase 1：后端 v2 基础设施
- 重建 `models.py/schemas.py`。
- 切换 `main.py` 到 `/api/v2`。
- 完成认证双通道和 v2 初始化种子。
- 提供数据库重置/迁移脚本。

### Phase 2：核心账务模型
- 完成账户/分类/交易/负债/待摊 API。
- 完成信用消费、还款、待摊计提的服务层与原子联动。

### Phase 3：预算与分析
- 完成固定预留金、弹性预算、心愿池。
- 完成统计/分析/现金流预测/导出双视图。

### Phase 4：前端页面切换
- 重写服务层与类型。
- 完成登录、首页、预算、统计、账单、转账、账户/分类、待摊页面。
- 增加 H5 适配。

### Phase 5：联调与发布准备
- 更新测试文档与部署文档。
- 完成端到端联调、自测与体验修正。

## Verification Steps
- 后端：
  - 新库初始化成功，`/api/v2/openapi.json` 可访问。
  - 微信登录与 H5 账号密码登录都能签发 JWT。
  - 资产账户支出、负债账户信用消费、还款转账三条主流程通过。
  - 固定预留、弹性预算、心愿池在创建/编辑/删除交易后正确联动。
  - 待摊模板新增后能生成当月计提结果。
  - 消费日 vs 现金流报表数值一致且调节关系正确。
- 前端：
  - 小程序端 4 个 Tab 正常显示。
  - H5 未登录时跳登录页，登录后可进入首页。
  - 首页三层漏斗、还款提醒、最近账单展示正确。
  - 统计页双视图切换、现金流预测、导出 CSV 正常。
  - 我的页可管理账户/分类/待摊模板。
- 文档：
  - 微信开发者工具联调步骤和 H5 本地运行步骤均可复现。
