import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);
const theme = createTheme({});

root.render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </LocalizationProvider>
            </ThemeProvider>
        </Provider>
    </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
