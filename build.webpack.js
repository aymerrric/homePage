const { merge } = require("merge");
const common = require("./common.webpack");

module.exports = merge(common, {
    mode: "production"
});
