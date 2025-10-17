//= laz r
//= 08-15-2025 21:58
//= main.jsx

//= Dependencies =//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import App from './app/App';
import { PokemonProvider } from './context/PokemonContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <App />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
