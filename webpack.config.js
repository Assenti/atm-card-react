module.exports = {
    mode: "production",
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf)$/,
                loader: 'file-loader',
                options: {
                    name: 'CREDITCARD.ttf',
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};