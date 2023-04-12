import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;

  /* mesma coisa de fazermos top: 0, bottom: 0, left: 0, right: 0 */
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;

  border-radius: 6px;

  padding: 2.5rem 3rem;

  background: ${({ theme }) => theme.colors['gray-800']};

  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;

      background: ${({ theme }) => theme.colors['gray-900']};

      color: ${({ theme }) => theme.colors['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors['gray-500']};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'] {
        -moz-appearance: textfield;
      }
    }

    button[type='submit'] {
      height: 3.625rem;

      border: 0;
      border-radius: 6px;

      background: ${({ theme }) => theme.colors['green-500']};

      color: ${({ theme }) => theme.colors.white};

      padding: 0.125rem;

      margin-top: 1.5rem;

      cursor: pointer;

      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors['green-700']};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;

  background: transparent;

  border: 0;

  top: 2.5rem;
  right: 1.5rem;

  line-height: 0;

  cursor: pointer;

  color: ${({ theme }) => theme.colors['gray-500']};
`;
