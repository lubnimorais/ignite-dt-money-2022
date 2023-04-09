import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['gray-900']};

  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;

  margin: 0 auto;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 3.125rem;

  border: 0;

  background: ${({ theme }) => theme.colors['green-500']};

  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  padding: 0 1.25rem;

  border-radius: 6px;

  cursor: pointer;

  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors['green-700']};
  }
`;
