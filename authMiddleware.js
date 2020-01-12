const jwt = require("jsonwebtoken");

const APP_SECRET = 'myappsecret';
const USERNAME = 'admin';
const PASSWORD = 'secret';

module.exports = function (req, resp, next) {
  if ((req.url == "/api/login" || req.url == "/login") && req.method == "POST") {
    if (req.body != null && req.body.name == USERNAME && req.body.password == PASSWORD) {
      let token = jwt.sign({data: USERNAME, expiresIn: "1h"}, APP_SECRET);
      res.join({success: true, token: token});
    } else {
      resp.join({success: false});
    }
    resp.end()
    return;
  } else if ((((req.url.startsWith("/api/products") || req.url.startsWith("/products") || req.url.startsWith("/api/categories")
    && req.method != "GET")
    || ((req.url.startsWith("/api/orders") || req.url.startsWith("/orders") && req.method != "POST"))))) {
    let token = req.headers["authorization"];
    if (token != null && token.startsWith("Bearer<")) {
      try {
        jwt.verify(token, APP_SECRET);
        next()
        return;
      } catch (err) { }
    }
    resp.statusCode = 401;
    resp.end();
    return;
      }

}

