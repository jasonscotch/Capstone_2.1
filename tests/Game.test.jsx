import { render } from '@testing-library/react';
import { vi } from 'vitest';
import Game from '../src/Game';
import * as GameContext from '../src/GameContext';
import * as AuthContext from '../src/AuthContext';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../src/GameContext', () => ({
  useGame: vi.fn(),
}));

vi.mock('../src/AuthContext', () => ({
    useAuth: () => ({
      logout: vi.fn(),
    }),
  }));

vi.mock('../src/Book', () => ({
__esModule: true,
default: () => <div>Mocked Book Component</div>,
}));

vi.mock('../src/AdventureSheet', () => ({
__esModule: true,
default: () => <div>Mocked Adventure Sheet</div>,
}));

vi.mock('react-router-dom', () => ({
useNavigate: () => mockNavigate, 
}));


it('navigates to /death when stamina is 0', () => {
  GameContext.useGame.mockReturnValue({ stamina: 0 });
  render(<Game />);

  expect(mockNavigate).toHaveBeenCalledWith('/death');
});