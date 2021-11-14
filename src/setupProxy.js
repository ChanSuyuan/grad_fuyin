const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  // 前面的这个 '/api' 指的是需要转发的请求，可以理解为localhost:8080/api 
  app.use(proxy.createProxyMiddleware('/user', {
    // target: 这里填写目标地址
    target: 'http://59.110.169.28:8075',
    secure: false,
    changeOrigin: true,
  }))
}