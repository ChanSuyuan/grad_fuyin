const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  // eslint-disable-next-line no-sequences
  app.use(proxy.createProxyMiddleware(['/user', '/admin', '/superadmin', '/validate'], {
    target: 'http://59.110.169.28:8075/fuyin',
    changeOrigin: true,
  }))
}
