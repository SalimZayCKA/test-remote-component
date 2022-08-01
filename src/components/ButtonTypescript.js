"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CkaButton = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var CkaButton = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "default" : _b, _c = _a.variant, variant = _c === void 0 ? "contained" : _c, _d = _a.disableElevation, disableElevation = _d === void 0 ? true : _d, _e = _a.iconOnly, iconOnly = _e === void 0 ? false : _e, zeroPadding = _a.zeroPadding, className = _a.className, _f = _a.forceClassName, forceClassName = _f === void 0 ? false : _f, restProps = __rest(_a, ["children", "color", "variant", "disableElevation", "iconOnly", "zeroPadding", "className", "forceClassName"]);
    return (react_1.default.createElement(Button_1.default, __assign({}, restProps, { variant: variant, disableElevation: disableElevation }), children));
};
exports.CkaButton = CkaButton;
//# sourceMappingURL=ButtonTypescript.js.map