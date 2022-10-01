import PokemonTable from './pokemonTable';
import {render, screen} from '@testing-library/react';

describe('PokemonTable', () => {
    test('should render pokemon table component', () => {
        render(<PokemonTable />);
        const pokemonListElement = screen.getByTestId('pokemon-table');
        expect(pokemonListElement).toBeInTheDocument();
    });

    test('pokemon table should render data', () => {
        const pokemonData = [
            {
                id: 1,
                name: 'bulbasaur',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                attack: 49,
                defense: 49
            }
        ];
        render(<PokemonTable pokemonData={pokemonData}/>);
        const tableBodyElement = screen.getByTestId('table-body-row');
        expect(tableBodyElement.children.length).toBe(5);
    });
});