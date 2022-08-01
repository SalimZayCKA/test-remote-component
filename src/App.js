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
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("./styles");
var clsx_1 = __importDefault(require("clsx"));
var CkaButton = function (_a) {
    var _b;
    var children = _a.children, _c = _a.color, color = _c === void 0 ? "default" : _c, _d = _a.variant, variant = _d === void 0 ? "contained" : _d, _e = _a.disableElevation, disableElevation = _e === void 0 ? true : _e, _f = _a.iconOnly, iconOnly = _f === void 0 ? false : _f, zeroPadding = _a.zeroPadding, className = _a.className, _g = _a.forceClassName, forceClassName = _g === void 0 ? false : _g, restProps = __rest(_a, ["children", "color", "variant", "disableElevation", "iconOnly", "zeroPadding", "className", "forceClassName"]);
    var classes = (0, styles_1.useStyles)();
    var buttonClasses = (_b = {},
        _b[classes.zeroPadding] = zeroPadding === true,
        _b[classes.iconOnly] = iconOnly === true,
        _b[classes.genericOutline] = variant === "outlined",
        _b[classes.containedSuccess] = color === "primary" && variant === "contained",
        _b[classes.outlinedSuccess] = color === "primary" && variant === "outlined",
        _b[classes.textSuccess] = color === "primary" && variant === "text",
        _b[classes.containedDanger] = color === "danger" && variant === "contained",
        _b[classes.outlinedDanger] = color === "danger" && variant === "outlined",
        _b[classes.textDanger] = color === "danger" && variant === "text",
        _b[classes.containedSecondary] = color === "default" && variant === "contained",
        _b[classes.outlinedSecondary] = color === "default" && variant === "outlined",
        _b[classes.textSecondary] = color === "default" && variant === "text",
        _b);
    var finalClassName = forceClassName && className
        ? className
        : (0, clsx_1.default)(classes.generic, buttonClasses, className);
    return (react_1.default.createElement(Button_1.default, __assign({}, restProps, { variant: variant, disableElevation: disableElevation, className: finalClassName }), children));
};
exports.default = CkaButton;
//# sourceMappingURL=App.js.map