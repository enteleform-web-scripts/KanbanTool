/// <reference types="webpack-dev-server" />
import webpack from "webpack";
declare const config: ((env: any) => webpack.Configuration);
export default config;
