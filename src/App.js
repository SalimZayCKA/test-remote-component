"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var Title_1 = require("./components/Title");
var App = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "World" : _b;
    return react_1.default.createElement(Title_1.Title, null,
        "Hello ",
        name,
        "!");
};
exports.App = App;
//# sourceMappingURL=App.js.map