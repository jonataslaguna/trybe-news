import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import ProviderNews from '../context/ProviderNews';
import renderWithRouter from './renderWithRouter';
import NewsMock from './Mocks/newsMock';

describe('Home', () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({
          json: async () => NewsMock.items,
        });
      });
  it('Rendering page', async () => {
    renderWithRouter(
      <ProviderNews>
        <App />
    </ProviderNews>,
            );
    expect(global.fetch).toHaveBeenCalled();
    expect(screen.getByRole('heading', {  name: /trybe news/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {  name: /mais recentes/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {  name: /release/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {  name: /notícias/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {  name: /favoritas/i})).toBeInTheDocument();
    expect(screen.getByText(/noticia mais recente/i)).toBeInTheDocument();
    
    waitFor(() => {
         expect(screen.getByText(/servidores do IBGE no RS se mobilizam para ajudar desabrigados nas enchentes/i)).toBeInTheDocument();
         expect(screen.getByText(/Processos seletivos receberam mais de 180 mil inscrições /i)).toBeInTheDocument();
    });
  });
  it('Filter Buttons', async () => {
    const { user } = renderWithRouter(
      <ProviderNews>
        <App />
      </ProviderNews>,
      );
        const btnRecent = screen.getByRole('button', {  name: /mais recentes/i});
        const btnRelease = screen.getByRole('button', {  name: /release/i});
        const btnNews = screen.getByRole('button', {  name: /notícias/i});
        
        waitFor(() => {
        user.click(btnRelease);
        const elementsH3 = screen.getAllByRole('heading', {  level:3 });
        expect(elementsH3[1]).toHaveTextContent(/Volume dos Serviços cresce 0,5% em julho/i);
        user.click(btnNews);
        expect(elementsH3[0]).toHaveTextContent(/Servidores do IBGE no RS se mobilizam para ajudar desabrigados nas enchentes/i);
        user.click(btnRecent);
        expect(elementsH3[0]).toHaveTextContent(/Servidores do IBGE no RS se mobilizam para ajudar desabrigados nas enchentes/i);
    });
  });
});

