var path = require("path");

console.log(path.resolve("node_modules"))

module.exports = {
    entry: path.resolve("./src/index.js"),
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:  path.resolve("node_modules"),
                loader: "babel-loader"
            }
        ]
    },
    output: {
        path: path.resolve("dist"),
        filename: "main.js"
    },
    devServer: {
        contentBase: path.resolve("dist"),
        compress: true,
        port: 9000
      }
}