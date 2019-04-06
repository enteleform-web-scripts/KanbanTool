"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
class Settings {
}
Settings.sourceFolder = "__src__";
Settings.configFolder = ".config";
Settings.compiledConfigFolder = "__compiled__";
Settings.staticFolder = "Static";
Settings.distributionFolder = "__dist__";
Settings.rootPath = path_1.default.resolve(".");
Settings.configPath = path_1.default.join(Settings.rootPath, Settings.configFolder, Settings.compiledConfigFolder);
Settings.sourcePath = path_1.default.join(Settings.rootPath, Settings.sourceFolder);
Settings.distributionPath = path_1.default.join(Settings.rootPath, Settings.distributionFolder);
Settings.staticPath = path_1.default.join(Settings.sourcePath, Settings.staticFolder);
exports.Settings = Settings;
