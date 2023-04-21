import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import { priceFormatter } from '../../utils/formatter';

import { useTheme } from 'styled-components';

import { SummaryCard, SummaryContainer } from './styles';
import { useSummary } from '../../hooks/useSummary';

const Summary = () => {
  const theme = useTheme();
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color={theme.colors['green-300']} />
        </header>

        <strong>{priceFormatter.format(summary.income / 100)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color={theme.colors['red-300']} />
        </header>

        <strong>{priceFormatter.format(summary.outcome / 100)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color={theme.colors.white} />
        </header>

        <strong>{priceFormatter.format(summary.total / 100)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};

export { Summary };
