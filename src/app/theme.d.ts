import React from "react";
import { Palette } from "@material-ui/core/styles/createPalette";
import { Theme } from "@material-ui/core/styles";
interface IPalette extends Palette {
    primary: {
        main: string;
        dark: string;
        darker: string;
        light: string;
        contrastText: string;
    };
    background: {
        default: string;
        paper: string;
        dark: string;
    };
    danger: {
        default: string;
        hover: string;
        contrastText: string;
    };
}
export interface ITheme extends Theme {
    palette: IPalette;
}
export interface ThemeTypes {
    main: Theme;
    alt: Theme;
    dark: Theme;
    light: Theme;
}
export declare function createThemes(preferDarkMode: boolean): ThemeTypes;
export declare const ThemesProviderContext: React.Context<ThemeTypes>;
export {};
