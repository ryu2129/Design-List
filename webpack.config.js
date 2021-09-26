const MODE = "production";
const enabledSourceMap = MODE === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: MODE,
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js",
    },

    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: { 
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                type: "asset/resource",
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    target: ["web", "es5"],
    devServer: {
        static: "dist",
        open: true
    }
};