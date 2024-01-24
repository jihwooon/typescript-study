import { render, screen } from '../../../test-utils/testing-library.utils';

import Options from '../Options';

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Vanilla scoop', 'Chocolate scoop']);
});
