import {
    Configuration
} from 'webpack';
import path from 'path';

// Webpack plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

const webpackConfig: Configuration = {
    entry: path.join(srcDir, 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: distDir
    },
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        plugins: [
            new TsConfigPathsPlugin()
        ],
        extensions: [
            ".ts", ".tsx", ".js"
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // happyPackMode: true,
                        transpileOnly: true,
                    }
                },   
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|png|jpg|svg|eot)$/,
                use: 'file-loader'
            }
        ]
    }
}

export default webpackConfig;