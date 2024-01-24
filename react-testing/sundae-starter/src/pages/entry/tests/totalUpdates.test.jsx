import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Options from '../Options';
import userEvent from '@testing-library/user-event';

describe('totalUpdates', () => {
  test('초기값', async () => {
    const user = userEvent.setup();
    render(<Options optionType="scoops" />);

    const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopSubtotal).toHaveContext('0.00');

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');

    expect(scoopSubtotal).toHaveContext('2.00');

    const chocolateInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    });

    await user.clear(chocolateInput);
    await user.type(chocolateInput, '2');
    expect(scoopSubtotal).toHaveTextContent('6.00');
  });
});
