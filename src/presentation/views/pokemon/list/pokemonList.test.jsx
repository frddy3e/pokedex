import PokemonList from './pokemonList';
import {render, screen} from '@testing-library/react';

describe('PokemonList', () => {
    test('should render pokemon list component', () => {
        render(<PokemonList />);
        const pokemonListElement = screen.getByTestId('pokemon-list');
        expect(pokemonListElement).toBeInTheDocument();
    });
});