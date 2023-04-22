import { useTransaction } from '../../hooks/useTransaction';

import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsContent,
  TransactionsTable,
} from './styles';

import { dateFormatter, priceFormatter } from '../../utils/formatter';

const TransactionsPage = () => {
  const { transactions } = useTransaction();

  return (
    <TransactionsContainer>
      <Header />
      <Summary />

      <TransactionsContent>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price / 100)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContent>
    </TransactionsContainer>
  );
};

export { TransactionsPage };
