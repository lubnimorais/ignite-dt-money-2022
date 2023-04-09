import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsContent,
  TransactionsTable,
} from './styles';

const TransactionsPage = () => {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />

      <TransactionsContent>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>09/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>09/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContent>
    </TransactionsContainer>
  );
};

export { TransactionsPage };
