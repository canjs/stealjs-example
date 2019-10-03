const stealTools = require("steal-tools");

stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  bundlePromisePolyfill: true
});
