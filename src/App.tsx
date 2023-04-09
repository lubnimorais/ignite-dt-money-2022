import { ThemeProvider } from 'styled-components';

import { TransactionsPage } from './pages/Transactions';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsPage />
    </ThemeProvider>
  );
}

export { App };
