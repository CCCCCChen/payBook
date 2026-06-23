- v2.1
    
    # 个人记账本“轻记” - 产品需求规格文档 (SPEC v2.1)
    
    **版本**：v2.1（含跨端部署方案）
    
    **日期**：2026-06-22
    
    **作者**：用户 & AI助手
    
    ---
    
    ## 1. 产品概述
    
    **产品名称**：轻记
    
    **产品形态**：微信小程序 + PC Web（H5）双端，通过 Taro/uni-app 跨端框架统一开发
    
    **目标用户**：个人用户（作者本人为主）
    
    **核心价值**：
    
    - 多维度记账，严格区分固定/弹性/非必要支出层级，灵活预算控制
    - 多账户管理，支持信用负债（花呗、信用卡），自动追踪还款日
    - 消费日预算与现金流双视图，解决账单错层问题
    - 语音/拍照快速记账（移动端），PC 端大屏财务分析与报表
    - 云端同步，简洁清新如 iOS 备忘录
    
    ---
    
    ## 2. 用户角色与使用流程
    
    ### 2.1 唯一角色
    
    - **用户本人**（通过微信 OpenID 自动识别，无多用户系统）
    
    ### 2.2 核心使用流程
    
    1. 打开小程序 → 自动登录
    2. 首页展示三层漏斗概览、账户总资产、信用账单待还提醒、预算进度
    3. 点击“+” → 选择记账方式（手动/语音/拍照）
    4. 填写金额、账户（可用信用卡/花呗）、分类（自动带出层级）、关联预算项、日期、备注
    5. 若使用信用支付，自动生成负债记录，消费日计入当月预算
    6. 保存后云端同步，首页数据刷新
    7. 可进入“统计”查看双维度报表，“预算”管理三层预算，“账单”查看信用负债与现金流日历，“我的”管理账户/分类/待摊模板等
    
    ---
    
    ## 3. 功能需求列表
    
    优先级：**P0（必须有）**、**P1（应该有）**、**P2（锦上添花）**
    
    ### 3.1 记账核心 (P0)
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F1 | 收入/支出记录 | 金额、分类、账户、日期、备注；支出可选关联预算项，收入可标记“稳定收入” |
    | F2 | 多层分类体系 | 每个支出分类同时拥有具体类别（餐饮、交通等）与**支出层级**（固定/弹性/非必要），预置默认值，支持自定义 |
    | F3 | 多账户管理 | 支持资产账户（现金、银行卡、支付宝等）和负债账户（花呗、信用卡）；负债账户可设账单日、还款日、信用额度（可选） |
    | F4 | 转账 | 资产账户间、资产与负债间（还款）、负债账户间（不常用）转账；还款转账不计入支出预算 |
    | F5 | 信用消费自动处理 | 使用负债账户记账时，自动生成两条关联记录：①支出记录（按消费日计入预算）；②负债记录（增加负债，带还款日信息） |
    | F6 | 账单列表 | 首页按日期倒序展示，支持按账户、分类、层级、月份筛选 |
    | F7 | 搜索与筛选 | 日期区间、账户、分类、层级、金额范围、备注关键词 |
    | F8 | 编辑/删除账单 | 修改后联动更新预算、负债、待摊等；删除负债账户支出时，同时删除关联负债记录 |
    
    ### 3.2 预算管理 (P0)
    
    ### 3.2.1 三层漏斗预算模型
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F9 | 固定支出预留金 | 系统自动计算当月所有“固定”层级支出预算总和（包括纯月度 + 待摊月均），展示在首页，不可手动增删单条（只能通过修改分类或待摊模板调整） |
    | F10 | 弹性支出多预算项 | 用户可创建多个弹性预算（如“月度咖啡预算”、“每周外卖预算”），绑定弹性分类，设定金额、周期（月/周/自定义时段） |
    | F11 | 非必要支出池 | 一个虚拟资金池，余额 = 上月结余 + 本月固定/弹性结余 + 额外收入 - 已用非必要支出；可作为心愿基金，超限禁止记账（或警告） |
    | F12 | 预算关联记账 | 弹性支出必须选择所属预算项（若设置了该分类预算）；非必要支出自动记入心愿池扣减；固定支出无需选择预算项 |
    | F13 | 预算进度展示 | 首页显示各弹性预算进度条、心愿池余额；超支时进度条变红，数字加粗 |
    | F14 | 预算超支处理 | 弹性超支自动从心愿池扣减，若心愿池不足则标记为透支，下月弹性预算等额扣减；固定超支从心愿池扣减；心愿池不足时禁止非必要支出 |
    
    ### 3.2.2 待摊支出管理 (P1)
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F15 | 创建待摊模板 | 用户为年付/季付/30天周期等固定支出创建分摊计划：总额、支付日、分摊周期（月数或自定义天数）、每期金额 |
    | F16 | 自动计提 | 每月初系统自动将各模板当月应摊金额计入“固定支出预留金”，无需用户重复操作 |
    | F17 | 待摊生命周期管理 | 可查看所有进行中的待摊项目，支持提前终止（退订），系统计算剩余未摊金额并一次性计入当月非必要支出或另作处理 |
    | F18 | 分摊与现金流分离 | 实际支付时全额扣减账户余额，但不影响当月预算；预算仅按月均分摊额体现 |
    
    ### 3.3 信用账单与现金流管理 (P0)
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F19 | 负债账户专属属性 | 每个负债账户可设置：账单日、还款日、当前已出账单金额（可手动校正）、未出账单金额（自动累积） |
    | F20 | 消费日与还款日解耦 | 所有图表和预算默认按**消费日**统计支出；还款日仅触发转账，不重复计入支出 |
    | F21 | 现金流日历 | 独立页面，以时间轴展示未来现金流入（工资等）和流出（房租、还款），基于当前余额模拟每日结余，提前7天还款缺口预警 |
    | F22 | 还款日提醒 | 首页顶部横幅显示“最近7天待还款总额”与当前活期余额对比，不足时红色警示 |
    | F23 | 双维度统计 | 统计页可切换“按消费日”和“按现金流”视图；按月提供“预算-现金流调节表”，展示两者差异 |
    
    ### 3.4 语音与拍照记账 (P1)
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F24 | 语音输入 | 利用微信同声传译插件转文字，规则匹配金额、分类、账户、备注等 |
    | F25 | 自然语言解析 | 先规则后可选LLM；解析结果预填表单，用户确认后保存 |
    | F26 | 拍照OCR | 调用腾讯云OCR识别小票，提取金额、商家等信息，预填表单 |
    
    ### 3.5 统计与财务分析 (P0/P1)
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F27 | 月度收支总览 | 按消费日/现金流分别展示月收入、支出、结余 |
    | F28 | 分类/层级占比 | 支出分类饼图，可按层级筛选（仅看弹性等） |
    | F29 | 趋势图 | 近6个月收入/支出/结余柱状或折线图 |
    | F30 | 储蓄率仪表盘 | 月度储蓄率、健康度（绿/黄/红）、覆盖月数（总余额/月固定支出） |
    | F31 | 安全花费上限 | 系统计算：稳定月收入 - 月固定支出 - 储蓄目标 = 当月可支配弹性+心愿总额，首页展示 |
    | F32 | 智能预算分配 | 用户输入期望的弹性总预算，系统按过去3月各弹性分类均值比例自动生成分类预算建议 |
    | F33 | 异常消费提醒 | 某分类本月支出 > 过去3月均值×1.5 时，首页或统计页给出提醒 |
    | F34 | 月度财务简报 | 每月1日自动生成，含储蓄率、超预算Top3、支出Top3分类、环比变化；可查看历史 |
    | F35 | 账单导出 | 按时间范围导出CSV，支持消费日/现金流两种口径 |
    
    ### 3.6 系统与数据管理 (P1)
    
    | 编号 | 功能 | 描述 |
    | --- | --- | --- |
    | F36 | 云端同步 | 所有数据实时同步至后端，换设备登录自动拉取 |
    | F37 | 数据备份 | 服务器每日自动备份SQLite数据库文件 |
    | F38 | 分类/账户自定义 | 新增、编辑、软删除；分类可标记支出层级（固定/弹性/非必要）和“稳定收入” |
    | F39 | 周期性账单（原模型） | 已融入待摊与固定预算，不再单独保留旧版“待确认入账”，由待摊替代固定周期，弹性周期预算替代其他 |
    | F40 | 标签系统 | P2，暂不实现 |
    
    ---
    
    ## 4. 数据模型设计
    
    ### 4.1 用户表 (users)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | openid | varchar(100) | 微信OpenID，唯一 |
    | created_at | datetime |  |
    
    ### 4.2 账户表 (accounts)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | name | varchar(50) | 账户名 |
    | type | varchar(20) | `asset`（资产） / `liability`（负债） |
    | subtype | varchar(20) | 资产类：cash/bank/alipay等；负债类：huabei/credit_card |
    | initial_balance | decimal(12,2) | 初始余额（负债类为0） |
    | credit_limit | decimal(12,2) | 信用额度（仅负债类，可选） |
    | bill_date | integer | 账单日（每月几号，负债类） |
    | due_date | integer | 还款日（每月几号，负债类） |
    | sort_order | integer |  |
    | is_deleted | boolean |  |
    
    ### 4.3 分类表 (categories)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | name | varchar(50) |  |
    | nature | varchar(10) | `income` / `expense` |
    | expense_tier | varchar(20) | 仅支出有效：`essential` / `flexible` / `discretionary` |
    | icon | varchar(50) |  |
    | color | varchar(10) |  |
    | is_stable_income | boolean | 仅收入，是否稳定收入 |
    | is_system | boolean |  |
    | sort_order | integer |  |
    
    ### 4.4 账单表 (transactions) —— 消费日记录
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | entry_type | varchar(20) | `expense` / `income` / `transfer` |
    | amount | decimal(12,2) | 金额 |
    | category_id | integer | 分类（转账时可为空） |
    | account_id | integer | 本方账户（支出时资产或负债账户；收入时资产账户） |
    | to_account_id | integer | 对方账户（转账/还款时必填） |
    | transaction_date | date | **消费/收入发生日** |
    | note | text |  |
    | budget_id | integer | 关联弹性预算项（支出且弹性时必填） |
    | liability_id | integer | 若为信用消费，关联对应的负债记录ID（在liability_records表） |
    | is_cash_basis | boolean | 标记是否影响现金流（转账类为True，信用消费支出为False） |
    | created_at | datetime |  |
    
    ### 4.5 负债记录表 (liability_records)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | account_id | integer | 负债账户ID |
    | transaction_id | integer | 关联的消费记录ID（支出方） |
    | amount | decimal(12,2) | 负债金额（正数表示欠款增加） |
    | due_date | date | 还款日 |
    | bill_date | date | 所属账单日（出账日） |
    | status | varchar(10) | `pending`(未还) / `paid`(已还) |
    | paid_transaction_id | integer | 还款转账记录的ID |
    | created_at | datetime |  |
    
    ### 4.6 预算表 (budgets) —— 弹性预算项
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | name | varchar(100) |  |
    | cycle_type | varchar(10) | `weekly` / `monthly` / `custom` |
    | start_date | date |  |
    | end_date | date |  |
    | amount | decimal(12,2) | 预算总额 |
    | category_ids | json | 绑定的弹性分类ID列表，空数组表示所有弹性分类 |
    | is_active | boolean |  |
    | created_at | datetime |  |
    
    ### 4.7 待摊模板表 (amortization_templates)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | name | varchar(100) |  |
    | category_id | integer | 关联固定支出分类 |
    | total_amount | decimal(12,2) | 支付总额 |
    | paid_date | date | 实际支付日期 |
    | cycle_length | integer | 分摊周期单位：月数 或 天数（30天填30） |
    | cycle_unit | varchar(10) | `month` / `day` |
    | monthly_amount | decimal(12,2) | 每期金额（自动计算） |
    | start_date | date | 分摊开始日 |
    | remaining_amount | decimal(12,2) | 剩余未摊金额 |
    | is_active | boolean |  |
    | terminated_date | date | 提前终止日（可空） |
    | note | text |  |
    
    ### 4.8 月度计提记录表 (accruals) —— 可选，用于待摊历史
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | template_id | integer |  |
    | year | integer |  |
    | month | integer |  |
    | amount | decimal(12,2) | 当月计提金额 |
    | created_at | datetime |  |
    
    ### 4.9 用户设置表 (user_settings)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | saving_goal_type | varchar(10) | `fixed` / `percent` |
    | saving_goal_value | decimal(12,2) |  |
    | stable_income_category_ids | json | 稳定收入分类ID列表 |
    
    ### 4.10 月度简报表 (monthly_reports)
    
    | 字段 | 类型 | 说明 |
    | --- | --- | --- |
    | id | integer (PK) |  |
    | user_id | integer |  |
    | year | integer |  |
    | month | integer |  |
    | total_income | decimal(12,2) |  |
    | total_expense_consumption | decimal(12,2) | 按消费日统计 |
    | total_expense_cash | decimal(12,2) | 按现金流统计 |
    | savings_rate | decimal(5,2) |  |
    | essential_total | decimal(12,2) | 固定支出 |
    | flexible_total | decimal(12,2) | 弹性支出 |
    | discretionary_total | decimal(12,2) | 非必要支出 |
    | wish_pool_balance | decimal(12,2) | 期末心愿池余额 |
    | coverage_months | decimal(5,2) |  |
    | top_over_budget | json |  |
    | top_expense_categories | json |  |
    | generated_at | datetime |  |
    
    ---
    
    ## 5. API 设计大纲
    
    所有 API 前缀 `/api/v2`，JWT 认证。
    
    ### 5.1 用户
    
    - `POST /auth/login`
    - `GET /user/settings`
    - `PUT /user/settings`
    
    ### 5.2 账户
    
    - `GET /accounts`
    - `POST /accounts`
    - `PUT /accounts/:id`
    - `DELETE /accounts/:id`
    
    ### 5.3 分类
    
    - `GET /categories`
    - `POST /categories`
    - `PUT /categories/:id`
    - `DELETE /categories/:id`
    
    ### 5.4 账单（消费日记录）
    
    - `GET /transactions` 支持筛选：month, account_id, category_id, tier, budget_id, keyword, start_date, end_date, entry_type, is_cash_basis
    - `POST /transactions` 创建支出/收入/转账，内部处理信用消费双记录、关联负债、扣减预算
    - `PUT /transactions/:id`
    - `DELETE /transactions/:id` 联动删除负债记录等
    
    ### 5.5 负债记录
    
    - `GET /liabilities` 筛选状态、还款日范围等
    - `POST /liabilities/:id/pay` 手动标记还款（可内部生成转账记录）
    
    ### 5.6 预算（弹性）
    
    - `GET /budgets`
    - `POST /budgets`
    - `PUT /budgets/:id`
    - `DELETE /budgets/:id`
    - `GET /budgets/progress` 获取各预算已用/剩余
    
    ### 5.7 待摊模板
    
    - `GET /amortization-templates`
    - `POST /amortization-templates`
    - `PUT /amortization-templates/:id`
    - `POST /amortization-templates/:id/terminate` 提前终止
    - `GET /amortization-schedule` 查看未来计提计划
    
    ### 5.8 财务分析
    
    - `GET /analytics/spending-limit` 月安全花费上限、固定/弹性/心愿池建议
    - `POST /analytics/suggest-budgets` 根据弹性总预算分配分类预算
    - `GET /analytics/health` 储蓄率、覆盖月数、健康度
    - `GET /analytics/anomalies` 异常消费提醒
    - `GET /analytics/cash-flow` 未来30天现金流预测，含还款缺口预警
    - `GET /analytics/double-view?month=2026-06` 返回消费日 vs 现金流对照表及调节项
    
    ### 5.9 月度简报
    
    - `GET /analytics/monthly-report?year=&month=`
    - `POST /analytics/generate-report` （管理用）
    
    ### 5.10 导出
    
    - `GET /export/csv?start=&end=&view=consumption|cash` 双视图导出
    
    ---
    
    ## 6. 技术栈、跨端方案与部署
    
    ### 6.1 跨端架构目标
    
    - **移动端**：微信小程序，保留语音/拍照原生能力
    - **PC 端**：响应式 Web 应用（H5），适配桌面浏览器，提供大屏统计、报表分析、复杂编辑
    - **代码复用**：使用 Taro 或 uni-app 实现一套代码输出两端，维护成本降低约 40%
    
    ### 6.2 技术栈选择
    
    ### 前端（跨端）
    
    - **框架**：Taro 3.x（React） 或 uni-app（Vue 3）
        - Taro 优势：React 生态，H5 性能较好
        - uni-app 优势：Vue 生态，uView 组件丰富
    - **UI 组件库**：Taro UI / taroify 或 uView UI，满足移动端同时支持 H5 适配
    - **状态管理**：Zustand（React） 或 Pinia（Vue）
    - **图表**：ECharts 微信小程序版 + Web 版
    - **语音**：
        - 小程序端：微信同声传译插件
        - H5 端：降级为腾讯云语音识别（ASR）或暂时不提供，引导用户使用小程序
    - **拍照 OCR**：
        - 小程序端：微信 OCR 插件或腾讯云 OCR
        - H5 端：调用腾讯云 OCR SDK（免费额度）
    
    ### 后端
    
    - **语言**：Python 3.11+
    - **框架**：FastAPI
    - **数据库**：SQLite（初期）
    - **认证**：
        - 小程序：微信 OpenID + JWT
        - H5 端：手机号+密码登录，或临时 token；后期可加短信验证码
    - **任务调度**：APScheduler（计算待摊、异常检测、月度简报）
    
    ### 6.3 开发环境准备
    
    - Node.js 18 LTS
    - Taro CLI 或 HBuilderX / uni-app CLI
    - 微信开发者工具（小程序调试）
    - VS Code + 相应插件
    - 腾讯云账号（开通 OCR、ASR 服务，使用免费额度）
    
    ### 6.4 能力差异处理策略
    
    | 能力 | 小程序端 | H5 端（PC/手机浏览器） | 实现方案 |
    | --- | --- | --- | --- |
    | 语音记账 | 微信同声传译插件 | 暂不提供（或引导用户使用小程序） | 组件按平台条件编译 |
    | 拍照 OCR | 微信 OCR 插件 / 腾讯云 OCR | 腾讯云 OCR | 封装统一 API，后端调用云服务 |
    | 登录 | 微信静默登录 | 手机号+密码登录 | 后端兼容两种认证方式 |
    | 导出 CSV | 小程序分享/转发 | 直接浏览器下载 | 后端生成文件，根据 UA 返回 |
    
    ### 6.5 部署架构
    
    ```
    用户 → 微信小程序 (AppID: wx***)
            │
            └─→ api.warehouse.xxx.com (FastAPI, HTTPS)
                  │
                  └─ SQLite / PostgreSQL
    
    用户 → PC浏览器 → app.warehouse.xxx.com (H5 静态资源)
            │
            └─→ api.warehouse.xxx.com (相同后端)
    ```
    
    - **小程序端**：通过 `warehouse.xxx.xxx` 二级域名访问 API，已在微信后台配置为合法域名
    - **H5 端**：部署到云服务器 Nginx 目录，绑定域名 `app.warehouse.xxx.xxx`，开启 HTTPS
    - **后端**：复用现有 FastAPI，通过 CORS 允许 H5 请求
    
    ### 6.6 开发与发布流程
    
    1. 初始化 Taro/uni-app 项目，选择小程序 + H5 模板
    2. 开发通用业务逻辑（API 调用、数据管理、UI 组件）
    3. 条件编译平台特性（语音、OCR、登录）
    4. 分别构建：
        - `taro build --type weapp` → 用微信开发者工具上传
        - `taro build --type h5` → 部署到服务器
    5. 小程序提交审核，H5 直接更新静态文件
    
    ---
    
    ## 7. 界面与交互要点
    
    ### 7.1 首页
    
    - 顶部卡片：总资产余额、心愿池余额、月安全花费上限
    - 第二行：最近7天待还款总额 vs 活期余额，不足标红
    - 三层漏斗可视化：固定（绿色锁定）、弹性（蓝色进度条，按预算显示）、非必要（金色池子余量）
    - 下方账单列表，每笔信用消费标注“花呗·还款日4.20”
    
    ### 7.2 记账浮层
    
    - 账户选择可切换资产/负债，选负债账户时自动展示该账户还款日信息
    - 分类选择后自动判断层级，弹性分类强制选择关联预算项（可快捷“无预算”记入弹性但事后警告）
    - 消费日默认当天，可修改
    
    ### 7.3 统计页
    
    - 双视图切换开关
    - 预算-现金流调节表：消费支出总额 - 本期信用消费 + 本期还款 = 现金流出
    - 储蓄率环形图，覆盖月数大数字
    
    ### 7.4 现金流日历
    
    - 纵向时间轴，标出发薪日、还款日、房租日
    - 每日模拟余额曲线，缺口处红色预警
    
    ### 7.5 预算管理
    
    - 固定支出为只读卡片，点击展示构成（房租+各待摊月额）
    - 弹性预算可新增/修改/删除，“智能分配”按钮
    - 心愿池显示历史流水（转入/转出）
    
    ---
    
    ## 8. 开发阶段划分（调整）
    
    ### 第一阶段：核心双端闭环
    
    - 微信小程序完整功能（语音/拍照/记账/预算/信用/分析）
    - H5 端基础功能（手动记账、账单查看、统计图表，语音/OCR 暂缺）
    - 后端 API 支持双端登录
    
    ### 第二阶段：H5 端增强与多端一致体验
    
    - H5 补齐语音（腾讯云 ASR）和 OCR
    - PC 端大屏专属布局（侧边栏、宽表、图表优化）
    
    ### 第三阶段：智能增强与扩展
    
    - LLM 解析
    - 微信订阅消息
    - 标签系统、深色模式等
    
    ---
    
    ## 9. 注意事项
    
    - H5 端首次加载可能因资源较大需优化分包，或采用 PWA 缓存策略
    - 小程序包大小需控制在 2MB 以内，跨端框架输出稍大，需开启分包加载
    - 信用消费记录务必保证预算扣减与负债增加的原子性
    - 待摊模板的计提采用定时任务每日检查，避免遗漏跨月
    - 现金流预测基于当前余额，不包含未来不确定收入，谨慎假设
    - 数据备份每日执行，SQLite在单用户下无并发压力，但需定期优化索引
    
    ---