import React from "react"
import { ThemeOptions } from "@material-ui/core/styles"
import { Palette } from "@material-ui/core/styles/createPalette"
/// TODO: Monitor for changes with V5 this should be fixed
import {
    responsiveFontSizes,
    Theme,
    unstable_createMuiStrictModeTheme as createMuiTheme
} from "@material-ui/core/styles"
import { TypographyOptions } from "@material-ui/core/styles/createTypography"

interface IPalette extends Palette {
    primary: {
        main: string
        dark: string
        darker: string
        light: string
        contrastText: string
    }
    background: {
        default: string
        paper: string
        dark: string
    }
    danger: {
        default: string
        hover: string
        contrastText: string
    }
}
export interface ITheme extends Theme {
    palette: IPalette
}

interface IThemeOptions extends ThemeOptions {
    palette: IPalette
}

const typography: TypographyOptions = {
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
}

const darkTheme = createMuiTheme({
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
} as IThemeOptions)
const responsiveDarkTheme = responsiveFontSizes(darkTheme)
const lightTheme = createMuiTheme({
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
} as IThemeOptions)
const responsiveLightTheme = responsiveFontSizes(lightTheme)

export interface ThemeTypes {
    main: Theme
    alt: Theme
    dark: Theme
    light: Theme
}
export function createThemes(preferDarkMode: boolean): ThemeTypes {
    if (preferDarkMode) {
        return {
            main: responsiveDarkTheme,
            alt: responsiveLightTheme,
            dark: responsiveDarkTheme,
            light: responsiveLightTheme
        }
    } else {
        return {
            main: responsiveLightTheme,
            alt: responsiveDarkTheme,
            dark: responsiveDarkTheme,
            light: responsiveLightTheme
        }
    }
}

// Do we want dark mode or not
export const ThemesProviderContext = React.createContext(createThemes(true))
