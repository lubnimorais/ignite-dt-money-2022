import { useCallback } from 'react';

import * as zod from 'zod';

import { useTransaction } from '../../../../hooks/useTransaction';

import { MagnifyingGlass } from 'phosphor-react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormContainer } from './styles';

const searchFormSchemaValidation = zod.object({
  query: zod.string(),
});

type SearchInputForm = zod.infer<typeof searchFormSchemaValidation>;

const SearchForm = () => {
  const { fetchTransactions } = useTransaction();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputForm>({
    resolver: zodResolver(searchFormSchemaValidation),
  });

  const handleSearchTransactions = useCallback(
    async (data: SearchInputForm) => {
      await fetchTransactions(data.query);
    },
    [fetchTransactions],
  );

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};

export { SearchForm };
