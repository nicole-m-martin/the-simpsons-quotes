import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuotes from '../container/SimpsonsQuotes';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          character: 'Homer Simpson',
          quote: 'Oh, so they have Internet on computers now!',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
        },
      ])
    );
  })
);

describe('Simpsons Quotes Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches a quote and displays it', async () => {
    render(<SimpsonsQuotes />);

    screen.getByAltText('simpsons logo');
    screen.getByText('The Simpsons Quotes On Demand!');

    const button = screen.getByRole('button');
    fireEvent.click(button);

    return waitFor(() => {
      screen.getByText('Oh, so they have Internet on computers now!');
    });
  });
});
