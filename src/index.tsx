import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import mainTheme from "./themes/mainTheme";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <StyledEngineProvider injectFirst>
          <App/>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
