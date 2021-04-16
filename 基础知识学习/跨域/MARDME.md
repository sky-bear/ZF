### 跨域问题的产生及其价值意义

跨域(非同源策略请求)

- 同源策略请求（ajax fetch ）
- 跨域传输

同源

- 协议
- 域名
- 端口

### JSON 跨域解决方案的底层原理

这些标签不受跨域请求的限制

- script
- img
- link
- iframe
  ...

```javascript
// 客户端  通过script向服务器请求，同时会把本地的一个函数传递给服务器
script;
src = "http://127.0.0.1:5000/list?callback=func";

// 必须时全局函数
function fun(msg) {  // msg 就是拿到的数据 }

// 服务器 接受客户端的请求
callback = func

// 1.准备数据
data= {...}
// 2. 给客户端返回数据
'func('+JSON.stringify(data)+')'


```

存在问题： JSONP 只能处理 GET 请求 安全性不高

### CORS 跨域资源共享

### 基于 http proxy 实现跨域请求

### 基于 post message 实现跨域处理

### 基于 iframe 的跨域解决方案

### web scokt 和 nginx 反向代理
