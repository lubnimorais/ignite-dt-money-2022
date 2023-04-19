import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ITransactionContextData {
  transactions: ITransaction[];
}

interface ITransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as ITransactionContextData);

const TransactionProvider = ({ children }: ITransactionProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const loadTransactions = useCallback(async () => {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();

    setTransactions(data);
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return (
    <TransactionContext.Provider value={{ transactions }}>
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
