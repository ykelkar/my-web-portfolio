const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yash.kelkar/Library/Mobile Documents/com~apple~CloudDocs/Documents/CareerPortfolio/Website Portfolio/Portfolio/my-web-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yash.kelkar/Library/Mobile Documents/com~apple~CloudDocs/Documents/CareerPortfolio/Website Portfolio/Portfolio/my-web-portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yash.kelkar/Library/Mobile Documents/com~apple~CloudDocs/Documents/CareerPortfolio/Website Portfolio/Portfolio/my-web-portfolio/src/pages/index.js")))
}

