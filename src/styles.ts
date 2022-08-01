/* eslint-disable no-magic-numbers */
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ITheme } from "./app/theme";

export const useStyles = makeStyles((theme: ITheme) => {
  return createStyles({
    generic: {
      borderRadius: 76,
      letterSpacing: 1,
      padding: "0.375rem 1rem"
    },
    genericOutline: {
      borderWidth: 1.5
    },

    /* PRIMARY BUTTON STYLE */
    containedSuccess: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.main
      },
      "&:focus": {
        backgroundColor: theme.palette.primary.light
      },
      "&:active": {
        backgroundColor: theme.palette.primary.dark
      }
    },
    outlinedSuccess: {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main
    },
    textSuccess: {
      color: theme.palette.primary.main
    },

    /* DANGER BUTTON STYLE */
    containedDanger: {
      backgroundColor: theme.palette.danger.default,
      color: theme.palette.danger.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.danger.hover
      },
      "&:focus": {
        backgroundColor: theme.palette.danger
      },
      "&:active": {
        backgroundColor: theme.palette.danger
      }
    },
    outlinedDanger: {
      borderColor: theme.palette.danger.default,
      color: theme.palette.danger.default
    },
    textDanger: {
      color: theme.palette.danger.default
    },

    /* SECONDARY BUTTON STYLE */
    containedSecondary: {
      backgroundColor: theme.palette.grey[50],
      color: theme.palette.grey[700],
      "&:not([disabled])": {
        border: `1.5px solid ${theme.palette.grey[600]}`
      },
      "&:hover": {
        backgroundColor: theme.palette.grey[400]
      },
      "&:focus": {
        backgroundColor: theme.palette.grey[500]
      },
      "&:active": {
        backgroundColor: theme.palette.grey[500]
      }
    },
    outlinedSecondary: {
      backgroundColor: "transparent",
      color: theme.palette.secondary.contrastText
    },
    textSecondary: {
      color: theme.palette.secondary.contrastText
    },
    iconOnly: {},
    tabButton: {
      fontSize: "16px",
      fontWeight: 600,
      padding: "6px 0",
      marginBottom: "5px",
      width: "150px",
      boxShadow: "none",
      borderRadius: "5px",
      border: "2px solid #f6f6f6", // TODO: - add colors HEX to palette
      backgroundColor: "#E8F1F8",
      "&.active": {
        backgroundColor: theme.palette.grey[50],
        borderColor: "#EDEDED"
      },
      "&:hover": {
        boxShadow: "none",
        backgroundColor: "#e1e1e1"
      }
    },
    zeroPadding: {
      padding: 0
    }
  });
});
