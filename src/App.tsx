import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { CssBaseline, ThemeProvider } from '@mui/material';

 import Theme from './config/theme/Theme';
 
function App() {
  return (
    <ThemeProvider theme={Theme}>
       <CssBaseline /> 
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
