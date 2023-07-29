import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "transparent",
        },
        colorSecondary: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  typography: {
    colorPrimary: "#030b15",
    h1: {
      fontFamily: "superclarendon, seriff",
      fontStyle: "normal",
      fontWeight: "500",
      textTransform: "none",
    },
    h2: {
      fontFamily: "source-code-pro, monospace",
      fontStyle: "normal",
      fontWeight: "200",
    },
    h3: {
      fontFamily: "sans-serif",
    },
  },
});