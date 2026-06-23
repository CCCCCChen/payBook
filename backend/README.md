# payBook Backend（测试阶段）

## 1. 环境准备

- Python 3.11+

## 2. 安装依赖

在 `backend/` 目录：

```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

## 3. 配置

复制一份环境变量文件：

```bash
copy .env.example .env
```

### 登录模式

- `AUTH_MODE=mock`：小程序端调用 `Taro.login()` 拿到的 `code` 会被后端映射成一个 mock openid（不依赖微信 AppID/Secret），适合本地联调。
- `AUTH_MODE=wechat`：后端使用 `jscode2session` 换取真实 openid，需要配置 `WECHAT_APPID/WECHAT_SECRET`，并保证小程序请求域名已配置为可访问该后端的 HTTPS 域名。

## 4. 启动服务

在 `backend/` 目录：

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

接口前缀：`http://localhost:8000/api/v1`

OpenAPI：`http://localhost:8000/api/v1/openapi.json`

