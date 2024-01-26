import { http, HttpResponse } from 'msw';
import { render, screen } from '../../../test-utils/testing-library.utils';
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

  const alerts = await screen.findAllByRole('alert');

  expect(alerts).toHaveLength(2);
});
