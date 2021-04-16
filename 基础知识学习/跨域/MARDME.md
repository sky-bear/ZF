### 跨域问题的产生及其价值意义

跨域(非同源策略请求)本质原因是 浏览器通过同源策略来防止恶意网站窃取数据

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

CORS 是一种 W3C 标准， 它允许服务器通过一些自定义的头部来限制哪些源可以访问它自身的资源
当发起跨域请求时， 由于安全原因，在一定的条件下浏览器会在正式请求之前自动先发起 OPTIONS 请求， 即 CORS 预见请求， 服务器若接受该跨域请求， 浏览器才能继续发起请求

- 使用 GET 或 POST 以外的方法；
- 利用 POST 发送 application/x-www-form-urlencoded, multipart/form-data, or text/plain 之外的 Content-Type；例如，post body 的 Content-type 为 application/xml
- 发送自定义的头部信息，如 x-pagination-count

CROS 的通信关键时服务器， 需要后端配置

- `Access-Control-Allow-Origin` origin 参数的值指定了允许访问该资源的外域 URI。
  对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符\*，表示允许来自所有域的请求

- `Access-Control-Expose-Headers`在跨域访问时，XMLHttpRequest 对象的 getResponseHeader()方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头
  例如前后端协作时，分页信息要储存在 header 头部，需要设置 x-pagination-count

- `Access-Control-Allow-Credentials`指定了当浏览器的 credentials 设置为 true 时是否允许浏览器读取 response 的内容。当用在对 preflight 预检测请求的响应中时，它指定了实际的请求是否可以使用 credentials。

- `Access-Control-Allow-Methods`指明了实际请求所允许使用的 HTTP 方法

如果要发送 Cookie，Access-Control-Allow-Origin 就不能设为\*，必须指定明确的、与请求网页一致的域名。同时，Cookie 依然遵循同源政策，只有用服务器域名设置的 Cookie 才会上传，其他域名的 Cookie 并不会上传，且（跨源）原网页代码中的 document.cookie 也无法读取服务器域名下的 Cookie。

### 基于 http proxy 实现跨域请求

基于 webpack-dev-server 实现

### 基于 postMessage 实现跨域处理

使用`window.postMessage`实现

### 基于 iframe 的跨域解决方案

- document.domain + iframe 只能同一个主域名， 不同子域之间的操作
- window.name +iframe (需要 3 个页面)
- location.hash + iframe (需要 3 个页面)

### web scokt 和 nginx 反向代理
