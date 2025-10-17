//= laz r
//= 08-15-2025 21:58
//= main.jsx

//= Dependencies =//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import App from './app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CardsApp />
        </ThemeProvider>
  </StrictMode>,
)
