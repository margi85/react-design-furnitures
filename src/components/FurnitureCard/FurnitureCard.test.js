import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FurnitureCard from './FurnitureCard';

describe('FurnitureCard component', () => {
  it('Sould display name', () => {
    render(
      <BrowserRouter>
        <FurnitureCard name="Pesho" />
      </BrowserRouter>
    );
    expect(document.querySelector('h3').textContent).toBe("Designer-name: Pesho")
  });
  it('Should increase likes when like button is pressed', async() => {
    render(
      <BrowserRouter>
        <FurnitureCard likes={ 5} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Like'));

    await waitFor(() => screen.getByText('Like'));

    expect(document.querySelector('.furn-info span').textContent).toBe(' 6')
  })
});
