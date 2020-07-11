import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './sections/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
