import styled from 'styled-components';

export const TransactionsContainer = styled.div``;

export const TransactionsContent = styled.main`
  width: 100%;
  max-width: 70rem;

  margin: 4rem auto 0;

  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  /* border-spacing: espaço-na-lateral espaço-na-vertical; */
  border-spacing: 0 0.5rem;

  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;

    background: ${({ theme }) => theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface IPriceHighLightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<IPriceHighLightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
`;
