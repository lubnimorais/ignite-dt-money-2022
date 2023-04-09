import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import { useTheme } from 'styled-components';

import { SummaryCard, SummaryContainer } from './styles';

const Summary = () => {
  const theme = useTheme();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color={theme.colors['green-300']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color={theme.colors['red-300']} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color={theme.colors.white} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export { Summary };
