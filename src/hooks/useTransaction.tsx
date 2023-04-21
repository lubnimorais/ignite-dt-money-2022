import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ICreateTransaction {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface ITransactionContextData {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: ({
    description,
    price,
    category,
    type,
  }: ICreateTransaction) => Promise<void>;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as ITransactionContextData);

const TransactionProvider = ({ children }: ITransactionProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async ({ description, price, category, type }: ICreateTransaction) => {
      const response = await api.post('/transactions', {
        description,
        price: price * 100,
        category,
        type,
        createdAt: new Date(),
      });

      const newTransaction = response.data;

      setTransactions(oldState => [newTransaction, ...oldState]);
    },
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

function useTransaction(): ITransactionContextData {
  const context = useContext(TransactionContext);

  if (!context) {
    alert('useContext must be used with TransactionProvider');
  }

  return context;
}

export { TransactionProvider, useTransaction };
