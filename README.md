# payBook / 轻记（v2.1 直切 v2 开发中）

一个用于个人记账的 H5 + 小程序跨端项目，当前建议优先使用 H5 网页端：

- 前端：Taro (React) + TypeScript + Zustand
- 后端：FastAPI + SQLAlchemy 2.0 + SQLite
- 当前版本策略：按 `SPECS_v2.1.md` “直接切 v2”，接口前缀为 `/api/v2`，不再兼容旧 `/api/v1` 数据结构

相关文档：

- 需求：`SPECS_v2.1.md`
- 规划：`.trae/documents/spec-v2-1-direct-cutover-plan.md`
- 小程序联调：`WEAPP_TESTING_GUIDE.md`

---

## 快速启动（当前版本）

### 1) 启动后端（FastAPI）

进入后端目录并安装依赖：

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

启动服务：

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

验证：

- OpenAPI：`http://localhost:8000/api/v2/openapi.json`

登录模式（在 `.env` 中配置）：

- `AUTH_MODE=mock`：微信小程序 `Taro.login()` 的 `code` 会被映射成 mock openid，适合本地联调
- `AUTH_MODE=wechat`：使用微信 `jscode2session` 换取真实 openid，需要配置 `WECHAT_APPID/WECHAT_SECRET`

数据库说明（v2.1 直切）：

- v2.1 会重建后端表结构，旧库不兼容
- 若遇到字段/表结构不一致导致报错，停止后端后删除 `backend/data/app.db`，再重新启动（启动时自动建表）

---

### 2) 启动前端（Taro）

安装依赖：

```bash
npm install
```

推荐优先启动 H5：

```bash
npm run dev:h5
```

首次进入 H5 时会跳转到账号密码登录页，可直接注册并开始使用。

小程序（weapp）开发：

```bash
npm run dev:weapp
```

后端地址：

- 默认：`http://localhost:8000/api/v2`（可在“我的/设置”中修改，底层存储在本地设置里）

重要限制（联调必读）：

- H5 预览/真机调试无法访问 `localhost`：需要改用公网 HTTPS 后端
- H5 HTTPS 页面请求 HTTP 接口会被浏览器拦截（Mixed Content）：后端也必须是 HTTPS

---

## 项目结构（简版）

- `src/`：Taro 前端（小程序 + H5 共用）
- `backend/`：FastAPI 后端
- `SPECS_v2.1.md`：v2.1 规格说明
