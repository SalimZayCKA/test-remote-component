"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesProviderContext = exports.createThemes = void 0;
var react_1 = __importDefault(require("react"));
/// TODO: Monitor for changes with V5 this should be fixed
var styles_1 = require("@material-ui/core/styles");
var typography = {
    fontFamily: [
        "Titillium Web",
        "sans-serif",
        "Verdana",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(","),
    fontWeightRegular: 600,
    fontWeightLight: 400,
    allVariants: {
        fontWeight: 600
    },
    button: {
        fontWeight: 600
    },
    body2: {
        fontWeight: 400
    },
    h1: {
        fontSize: "41px",
        fontWeight: 400
    },
    h3: {
        fontWeight: 400
    }
};
var darkTheme = (0, styles_1.unstable_createMuiStrictModeTheme)({
    typography: typography,
    palette: {
        type: "dark",
        background: {
            default: "#52606E",
            dark: "#333B43",
            paper: "#333B43"
            // paper: '#FFFFFF',
        },
        primary: {
            main: "#96E415",
            contrastText: "#488112",
            dark: "#6ab126",
            darker: "#437212"
        },
        danger: {
            default: "#FB5B5B",
            hover: "#d04545",
            contrastText: "#FFF"
        },
        secondary: {
            // light: 'rgb(255, 255, 255)',
            contrastText: "#FFF",
            main: "rgb(82, 96, 110)"
            // dark: 'rgb(51, 59, 67)',
        },
        action: {
            active: "#96E415",
            hover: "#747F8B",
            selected: "#52606E",
            disabled: "#DBE0E3"
        },
        error: {
            main: "#FB5B5B"
        },
        divider: "#52606E",
        grey: {
            50: "#FFFFFF",
            100: "#FBFBFC",
            200: "#F9FAFA",
            300: "#F6FAFD",
            400: "#EDEFF0",
            500: "#DCDFE5",
            600: "#979FA8",
            700: "#52606E",
            800: "#495663",
            900: "#39434D",
            A100: "#313942",
            A200: "#20262C",
            A400: "#101316",
            A700: "#08090B"
        }
    }
});
var responsiveDarkTheme = (0, styles_1.responsiveFontSizes)(darkTheme);
var lightTheme = (0, styles_1.unstable_createMuiStrictModeTheme)({
    typography: typography,
    overrides: {
        MuiTextField: {
            root: {
                borderColor: "#495663",
                color: "#495663"
            }
        }
    },
    palette: {
        type: "light",
        //   background: {
        //     default: '#52606E',
        //     dark: '#333B43',
        //     // paper: '#FFFFFF',
        //   },
        primary: {
            main: "#96E415",
            contrastText: "#488112",
            dark: "#6ab126",
            darker: "#437212"
        },
        danger: {
            default: "#FB5B5B",
            hover: "#d04545",
            contrastText: "#FFF"
        },
        secondary: {
            contrastText: "#52606E",
            light: "rgb(255, 255, 255)",
            main: "rgb(82, 96, 110)",
            dark: "rgb(51, 59, 67)"
        },
        action: {
            // active: "#96E415",
            // hover: "#747F8B",
            // selected: "#52606E",
            disabled: "#a2a9ae"
        },
        //   divider:'#E6F1F9',
        grey: {
            50: "#FFFFFF",
            100: "#FBFBFC",
            200: "#F9FAFA",
            300: "#F6FAFD",
            400: "#EDEFF0",
            500: "#CBCFD3",
            600: "#BFC2C8",
            700: "#52606E",
            800: "#495663",
            900: "#39434D",
            A100: "#313942",
            A200: "#20262C",
            A400: "#101316",
            A700: "#08090B"
        }
    }
});
var responsiveLightTheme = (0, styles_1.responsiveFontSizes)(lightTheme);
function createThemes(preferDarkMode) {
    if (preferDarkMode) {
        return {
            main: responsiveDarkTheme,
            alt: responsiveLightTheme,
            dark: responsiveDarkTheme,
            light: responsiveLightTheme
        };
    }
    else {
        return {
            main: responsiveLightTheme,
            alt: responsiveDarkTheme,
            dark: responsiveDarkTheme,
            light: responsiveLightTheme
        };
    }
}
exports.createThemes = createThemes;
// Do we want dark mode or not
exports.ThemesProviderContext = react_1.default.createContext(createThemes(true));
//# sourceMappingURL=theme.js.map