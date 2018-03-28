import {
    Configuration
} from 'webpack';
import path from 'path';

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

const webpackConfig: Configuration = {
    entry: [
        './src/index.ts'
    ],
    devtool: 'eval-source-map',
    resolve: {
        modules: [
            srcDir,
            "node_modules"
        ],
        extensions: [
            ".ts", ".tsx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: srcDir,
                options: {
                    happyPackMode: true
                },
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: distDir
    }
}

export default webpackConfig;