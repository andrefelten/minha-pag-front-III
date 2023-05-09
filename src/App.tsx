import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import tema from "./configuracao/tema";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={tema}>
          <CssBaseline />
          <AppRoutes />
    </ThemeProvider>
  );
};
export default App;
