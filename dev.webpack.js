const merge = require("merge");
const common = require("./common.webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: { watchFiles: ["./src/template.html"] },
});
