"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __main__1 = require("./Utils/CSS_Splitter/__main__");
const cacheGroups = { vendors: false };
__main__1.CSS_Splitter.fileRegExes.forEach((pattern, i) => {
    cacheGroups[`Group${i}`] = {
        name: __main__1.CSS_Splitter.get_ChunkName,
        test: /CSS\.styl$/,
        chunks: "all",
        enforce: true,
    };
});
exports.optimization = {
    splitChunks: { cacheGroups },
};
