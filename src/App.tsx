import { ThemeProvider } from 'styled-components';

import { TransactionsPage } from './pages/Transactions';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './hooks/useTransaction';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionProvider>
        <TransactionsPage />
      </TransactionProvider>
    </ThemeProvider>
  );
}

export { App };
