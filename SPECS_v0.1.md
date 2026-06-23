# 个人记账本小程序 - 需求规格文档 (SPEC)

**版本**：v1.0  
**日期**：2026-06-18  
**作者**：用户 & AI助手  

---

## 1. 产品概述

**产品名称**：轻记（暂定名）  
**产品形态**：微信小程序  
**目标用户**：个人用户（作者本人为主）  
**核心价值**：多维度记账、灵活预算控制、多账户管理、云端同步，通过语音/拍照快速记录，界面简洁清新如 iOS 备忘录。

---

## 2. 用户角色与使用流程

### 2.1 唯一角色
- **用户本人**（无多用户系统，身份通过微信 OpenID 自动识别）

### 2.2 核心使用流程
1. 打开小程序 → 自动登录（微信授权静默获取 OpenID）  
2. 进入首页，展示当前月收支概览、预算剩余进度  
3. 点击底部“+”按钮 → 选择“记一笔”（默认手动）或“语音记”、“拍照记”  
4. 填写/确认账单信息（金额、分类、账户、日期、备注、所属预算）  
5. 保存后同步云端，首页数据刷新  
6. 可进入统计页查看图表，预算页管理预算，设置页管理账户/分类/周期账单  

---

## 3. 功能需求列表

按优先级分为 **P0（必须有）**、**P1（应该有）**、**P2（锦上添花）**。

### 3.1 记账核心 (P0)
| 编号 | 功能 | 描述 |
|------|------|------|
| F1 | 收入/支出记录 | 必填：金额、分类、账户、日期；选填：备注、关联预算项 |
| F2 | 预置分类 | 默认支出分类（餐饮、交通、购物、娱乐、住房、医疗、人情、其他）、收入分类（工资、奖金、兼职、投资、退款、其他），支持修改颜色图标 |
| F3 | 自定义分类 | 用户可新增/编辑/删除分类（删除前判断是否有账单关联） |
| F4 | 多账户管理 | 支持账户：现金、银行卡、支付宝、微信钱包等；每个账户初始余额可设定 |
| F5 | 转账 | 两个账户间资金划转（不产生收支，仅改变账户余额） |
| F6 | 账单列表 | 首页按日期倒序显示账单，支持按月份筛选 |
| F7 | 搜索与筛选 | 按日期区间、账户、分类、金额范围、备注关键词筛选 |
| F8 | 编辑/删除账单 | 长按或滑动物理账单项，修改后相关预算、余额联动更新 |

### 3.2 预算管理 (P0)
| 编号 | 功能 | 描述 |
|------|------|------|
| F9 | 多预算项 | 支持创建多个独立预算，如“2026年6月总预算”、“每周咖啡奶茶预算” |
| F10 | 预算周期类型 | 支持：每月、每周、自定义时间段（如 6.18-7.18） |
| F11 | 预算范围 | 可选择“全部分类”或指定一个/多个分类；或选择无分类限制（仅按总额） |
| F12 | 记账关联预算 | 记录一笔支出时，可选关联到某个活跃的预算项（如“本周咖啡奶茶预算”） |
| F13 | 预算进度展示 | 首页显示各活跃预算的已用金额、剩余金额、百分比进度条；超支时数字变红警示 |
| F14 | 预算超支提示 | 仅在打开小程序时，若有预算超支，以红色文字/图标警示，不做推送 |

### 3.3 周期性账单 (P1)
| 编号 | 功能 | 描述 |
|------|------|------|
| F15 | 创建周期模板 | 设定金额、分类、账户、周期（每月几号/每周几）、下次生成日期、是否自动提醒 |
| F16 | 待确认入账 | 到账期那天（或月初），在首页出现待确认条目，用户点“确认”才正式记入账单；支持跳过/稍后处理 |
| F17 | 确认记录修改 | 确认时可修改金额、日期等再保存 |

### 3.4 语音记账 (P1)
| 编号 | 功能 | 描述 |
|------|------|------|
| F18 | 语音输入 | 录音后利用微信同声传译插件转文字 |
| F19 | 自然语言解析 | 先用规则匹配（如“花了XX元”，“用XX账户”，“买XX分类”），提取金额、分类、账户、备注；后续可切换LLM解析 |
| F20 | 预填表单确认 | 解析结果自动填入记账表单，用户确认/修改后保存 |

### 3.5 拍照记账 (P1)
| 编号 | 功能 | 描述 |
|------|------|------|
| F21 | OCR识别 | 拍照或从相册选择小票，调用腾讯云OCR（或微信OCR插件）提取文字 |
| F22 | 字段提取 | 类似语音解析，从识别文本中抽出金额、商家名等，填入表单确认 |

### 3.6 统计与可视化 (P0)
| 编号 | 功能 | 描述 |
|------|------|------|
| F23 | 月度收支总览 | 当月收入/支出总额，月结余 |
| F24 | 分类占比饼图 | 支出分类占比（可切换时间范围） |
| F25 | 收支趋势图 | 按月的收入/支出柱状图或折线图 |
| F26 | 账户余额一览 | 显示所有账户当前余额（根据流水计算） |

### 3.7 数据管理 (P1)
| 编号 | 功能 | 描述 |
|------|------|------|
| F27 | 导出账单 | 支持按时间范围导出为 CSV 文件，通过微信分享或下载 |
| F28 | 云端同步 | 所有数据实时保存至后端，换设备登录同一微信自动拉取 |

### 3.8 其他 (P2)
- 标签系统（可选，等需要时再加）
- 深色模式
- 账单备注支持常用短语快捷填充

---

## 4. 数据模型设计

### 4.1 用户表 (users)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 用户ID |
| openid | varchar(100) | 微信OpenID，唯一 |
| created_at | datetime | 注册时间 |

### 4.2 账户表 (accounts)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 账户ID |
| user_id | integer | 所属用户 |
| name | varchar(50) | 账户名 |
| type | varchar(20) | 现金/银行卡/支付宝等 |
| initial_balance | decimal(12,2) | 初始余额 |
| sort_order | integer | 排序 |
| is_deleted | boolean | 软删除标记 |

### 4.3 分类表 (categories)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 分类ID |
| user_id | integer | 所属用户 |
| name | varchar(50) | 分类名 |
| type | varchar(10) | income / expense |
| icon | varchar(50) | 图标代码或表情 |
| color | varchar(10) | 色值 |
| sort_order | integer | 排序 |
| is_system | boolean | 是否系统预置（不可删除） |

### 4.4 账单表 (transactions)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 账单ID |
| user_id | integer | 所属用户 |
| type | varchar(10) | income / expense / transfer_out / transfer_in |
| amount | decimal(12,2) | 金额 |
| category_id | integer | 关联分类（转账时可为空） |
| account_id | integer | 本方账户 |
| to_account_id | integer | 对方账户（转账时必填） |
| date | date | 发生日期 |
| note | text | 备注 |
| budget_id | integer | 关联的预算项（可为空） |
| created_at | datetime | 创建时间 |
| updated_at | datetime | 更新时间 |

### 4.5 预算表 (budgets)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 预算ID |
| user_id | integer | 所属用户 |
| name | varchar(100) | 预算名称 |
| cycle_type | varchar(10) | weekly / monthly / custom |
| start_date | date | 自定义周期起始（周/月预算可自动计算当期） |
| end_date | date | 自定义周期结束 |
| amount | decimal(12,2) | 预算总额 |
| category_scope | json | 包含的分类ID列表，空数组表示全部 |
| is_active | boolean | 是否启用 |
| created_at | datetime | 创建时间 |

预算进度实时计算：统计该预算时间范围内、关联到该预算ID的支出总额（若 category_scope 不为空则再过滤分类）。

### 4.6 周期性账单模板 (recurring_templates)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 模板ID |
| user_id | integer | 所属用户 |
| name | varchar(100) | 模板名 |
| type | varchar(10) | income / expense |
| amount | decimal(12,2) | 默认金额 |
| category_id | integer | 分类 |
| account_id | integer | 账户 |
| cycle_type | varchar(10) | monthly / weekly |
| cycle_day | integer | 每月第几天 / 每周几（0=周日） |
| next_due_date | date | 下一次应生成待确认项的日期 |
| is_active | boolean | 是否启用 |
| note | text | 备注模板 |

### 4.7 待确认账单 (pending_transactions)
| 字段 | 类型 | 说明 |
|------|------|------|
| id | integer (PK) | 待确认ID |
| user_id | integer | 所属用户 |
| template_id | integer | 来源模板（可空） |
| type | varchar(10) | income/expense |
| amount | decimal(12,2) | 金额 |
| category_id | integer | 分类 |
| account_id | integer | 账户 |
| date | date | 建议入账日期 |
| due_date | date | 最晚确认日期 |
| note | text | 备注 |
| status | varchar(10) | pending/confirmed/skipped |
| created_at | datetime | 生成时间 |

---

## 5. API 设计大纲

所有 API 前缀：`/api/v1`，认证方式：微信登录后返回 JWT token，后续请求头携带 `Authorization: Bearer <token>`

### 5.1 用户
- `POST /auth/login` 传入微信 code，返回 token

### 5.2 账户
- `GET /accounts` 列表  
- `POST /accounts` 创建  
- `PUT /accounts/:id` 修改  
- `DELETE /accounts/:id` 软删除  

### 5.3 分类
- `GET /categories` 列表（含系统预置和自定义）  
- `POST /categories` 创建自定义  
- `PUT /categories/:id` 修改  
- `DELETE /categories/:id` 删除（检查账单引用）

### 5.4 账单
- `GET /transactions` 列表（支持 query: month, account_id, category_id, keyword, start_date, end_date, budget_id）  
- `POST /transactions` 创建（支持关联budget_id）  
- `PUT /transactions/:id` 修改  
- `DELETE /transactions/:id` 删除  
- `POST /transactions/transfer` 转账（内部生成2条记录）

### 5.5 预算
- `GET /budgets` 列表（含当前进度计算）  
- `POST /budgets` 创建  
- `PUT /budgets/:id` 修改  
- `DELETE /budgets/:id` 删除  

### 5.6 周期性账单
- `GET /recurring-templates` 列表  
- `POST /recurring-templates` 创建  
- `PUT /recurring-templates/:id` 修改  
- `DELETE /recurring-templates/:id` 删除  
- `GET /pending-transactions` 获取待确认列表  
- `POST /pending-transactions/:id/confirm` 确认入账（可带修改字段）  
- `POST /pending-transactions/:id/skip` 跳过  

### 5.7 统计
- `GET /statistics/summary?month=2026-06` 月度收支总额  
- `GET /statistics/category-pie?start=..&end=..` 分类占比  
- `GET /statistics/trend?months=6` 近6月趋势  
- `GET /statistics/account-balances` 所有账户余额  

### 5.8 语音/拍照辅助
- `POST /utils/parse-voice` 接收文字，返回预填字段（规则/LLM）  
- `POST /utils/parse-image` 接收图片 media_id，后端调OCR并返回预填字段  

### 5.9 导出
- `GET /export/csv?start=..&end=..` 返回 CSV 文件流  

---

## 6. 技术栈与部署方案

### 6.1 前端（微信小程序）
- 框架：原生小程序 + WeUI 或 Vant Weapp（简洁组件库）
- 图表：ECharts 微信小程序版
- 语音：微信同声传译插件
- 拍照：微信 OCR 插件（或 wx.chooseImage 上传后端处理）

### 6.2 后端
- 语言：Python 3.11+
- 框架：FastAPI
- ORM：SQLAlchemy + Alembic（数据库迁移）
- 数据库：SQLite（初期），文件路径 `/data/app.db`，定期备份
- 认证：PyJWT
- OCR：初期用腾讯云 OCR 免费额度，后续可换
- 任务调度：后台用 APScheduler 每日检查 recurring 生成待确认项
- 部署：Nginx 反向代理 + Uvicorn（`uvicorn main:app --workers 2`）

### 6.3 服务器
- 配置：1核1G，系统 Ubuntu 22.04
- 域名：已备案 HTTPS
- 进程管理：systemd 托管 uvicorn
- 预计内存占用：~300MB（含Nginx、uvicorn、SQLite），富裕空间充足

---

## 7. 界面与交互要点

- **配色**：浅灰白背景，卡片白色圆角阴影，主色调柔和蓝/绿（如 `#4A90D9`）
- **底部导航**：首页（账单流）、统计、预算、我的（设置）
- **首页**：顶部账户总资产卡片 + 活跃预算进度条；下方账单列表（日期分组）
- **记账页**：弹出式半屏表单，金额自动聚焦，数字键盘；分类横向滑动选择；预算项非必选
- **待确认项**：首页顶部小横幅提醒“你有N笔待确认账单”，点击进入列表
- **超支警示**：预算进度条变红，数字红色加粗，无推送

---

## 8. 开发阶段划分

### 第一阶段：核心闭环 (MVP)
- 微信登录、账户管理、预置分类
- 手动记账（收支）、转账
- 预算创建与关联（月/周/自定义）
- 月度统计图表、分类占比
- 账单列表与搜索
- 云端同步部署上线

### 第二阶段：效率提升
- 周期性账单（生成待确认项、确认入账）
- 语音记账（规则解析）
- 拍照记账（OCR）
- 导出 CSV

### 第三阶段：智能增强（可选）
- 接入 LLM 优化语音/拍照解析
- 预算超支微信订阅消息
- 标签系统
- 深色模式

---

## 9. 风险与注意事项

- **备案**：小程序上线前需完成域名 ICP 备案，可能耗时1-2周，建议提前准备。
- **SQLite 并发**：单人使用完全无瓶颈，但避免直接多 worker 写冲突，后端写操作做好重试机制。
- **周期性任务触发**：由于是1核1G服务器，定时任务用 APScheduler 在应用进程内即可，不需要 Celery。
- **数据备份**：建议 crontab 每日 rsync 数据库文件到其他位置或云存储。
