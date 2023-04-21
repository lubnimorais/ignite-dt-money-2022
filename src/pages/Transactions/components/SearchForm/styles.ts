import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border: 0;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors['gray-900']};

    color: ${({ theme }) => theme.colors['gray-300']};

    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border: 1px solid ${({ theme }) => theme.colors['green-300']};
    border-radius: 6px;

    font-weight: bold;
    color: ${({ theme }) => theme.colors['green-300']};

    padding: 1rem;

    background: transparent;

    transition: 0.3s;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors['green-500']};

      border-color: ${({ theme }) => theme.colors['green-500']};

      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
