import { http, HttpResponse } from 'msw';
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../../../mocks/server';
import OrderEntry from '../OrderEntry';

test('Order response', async () => {
  server.resetHandlers(
    http.get('http://localhost:3030/scoops', () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get('http://localhost:3030/toppings', () => {
      return new HttpResponse(null, { status: 500 });
    }),
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});
