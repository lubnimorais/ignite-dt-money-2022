import { useCallback } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';

import { useTransaction } from '../../hooks/useTransaction';

import * as Dialog from '@radix-ui/react-dialog';

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';

const newTransactionSchemaValidation = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
});

type INewTransactionFormInputs = zod.infer<
  typeof newTransactionSchemaValidation
>;

const NewTransactionModal = () => {
  const { createTransaction } = useTransaction();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<INewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchemaValidation),
  });

  const handleCreateTransaction = useCallback(
    async (data: INewTransactionFormInputs) => {
      const { description, price, category, type } = data;

      await createTransaction({ description, price, category, type });

      reset();
    },
    [createTransaction, reset],
  );

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};

export { NewTransactionModal };
