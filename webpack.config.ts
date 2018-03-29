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
    entry: [
        './src/index.ts'
    ],
    output: {
        filename: 'bundle.js',
        path: distDir
    },
    devtool: 'eval-source-map',
    resolve: {
        // modules: [
        //     srcDir,
        //     "node_modules"
        // ],
        extensions: [
            ".ts", ".tsx"
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new TsConfigPathsPlugin()
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
                
            }
        ]
    }
}

export default webpackConfig;