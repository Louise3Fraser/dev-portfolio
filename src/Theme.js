import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0px"
      },
    },
    },
  },
  typography: {
    colorPrimary: "#fffff",
    h1: {
      fontFamily: "Economica",
      letterSpacing: "2.5px",
      fontWeight: "600",
      textTransform: "none",
      color: "#040103"
    },
    h2: {
      fontFamily: "expo-sans-pro, sans-serif",
      fontStyle: "normal",
      fontWeight: "900",
    },
    h3: {
      fontFamily: "komet, sans-serif",
      fontWeight: "500",
      fontStyle: "normal",
      color: "#040103"
    },
  },

});
