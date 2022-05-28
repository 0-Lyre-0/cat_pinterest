import {createTheme} from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      dark: "#1E88E5",
    },
    error: {
      main: "#FF3A00",
      light: "#F24E1E"
    }
  }
});

export default mainTheme