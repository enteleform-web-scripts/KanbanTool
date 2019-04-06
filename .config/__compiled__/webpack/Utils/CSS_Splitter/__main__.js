"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Settings_1 = require("../../../Settings");
const path_1 = __importDefault(require("path"));
const escape_string_regexp_1 = __importDefault(require("escape-string-regexp"));
const klaw_sync_1 = __importDefault(require("klaw-sync"));
class CSS_Splitter {
    static get_ChunkName(module, chunks, cacheGroup_Key) {
        const filePath = (module.resource || module.issuer.resource);
        const filePath_Head = new RegExp("^" + escape_string_regexp_1.default(Settings_1.Settings.sourcePath));
        const fileBase = filePath
            .replace(filePath_Head, "")
            .replace(/CSS\.styl$/, "")
            .replace(/\\$/, "");
        return fileBase;
    }
}
CSS_Splitter.filePaths = klaw_sync_1.default(Settings_1.Settings.sourcePath, { traverseAll: true, filter: _filter_CSS_MainFiles })
    .map(fileData => fileData.path);
CSS_Splitter.fileRegExes = CSS_Splitter.filePaths
    .map(fileData => _get_CacheGroup_TestRegEx(fileData));
exports.CSS_Splitter = CSS_Splitter;
function _filter_CSS_MainFiles(fileData) {
    const fileBase = path_1.default.basename(fileData.path);
    const is_CSS_MainFile = (fileBase.toLowerCase() == "css.styl");
    return is_CSS_MainFile;
}
function _get_CacheGroup_TestRegEx(filePath) {
    const relativePath = filePath.replace(Settings_1.Settings.rootPath, "");
    return new RegExp(".*" + escape_string_regexp_1.default(relativePath) + "$");
}
