import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Global } from '@emotion/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Style } from 'components/GlobalStyle';
import { ThemeProvider, createTheme } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

const defaultTheme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/PhonebookAPP">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>
            <App />
            <Global styles={Style} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
