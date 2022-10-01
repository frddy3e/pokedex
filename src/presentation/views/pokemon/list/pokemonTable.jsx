import Table from "../../../components/table";
import Actions from "../../../components/actions";
import PropTypes from "prop-types"

/**
 * The pokemon table component, which renders a table with the pokemon data.
 * @component
 * @example
 * const pokemonData = [
 *    {
 *      id: 1,
 *      name: 'bulbasaur',
 *      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
 *      attack: 49,
 *      defense: 49
 *    }
 * ];
 * return (
 * <PokemonTable pokemonData={pokemonData} />
 * )
 */
const PokemonTable = (props) => {
    const {pokemonData} = props;
    const headers = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];

    const rows = pokemonData.map((pokemon) => {
        return [
            pokemon.name,
            <img src={pokemon.image} alt={pokemon.name} height={50} width={50}/>,
            pokemon.attack,
            pokemon.defense,
            <Actions onEdit={() => {}} onDelete={() => {}} />
        ]
    });

    return <div data-testid="pokemon-table">
        <Table headers={headers} rows={rows}/>
    </div>;
};

PokemonTable.propTypes = {
    /**
     * The pokemon data
     */
    pokemonData: PropTypes.array.isRequired
};

PokemonTable.defaultProps = {
    pokemonData: []
};

export default PokemonTable;