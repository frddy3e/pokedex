import './App.css';
import PokemonTable from './presentation/views/pokemon/list/pokemonTable';

function App() {

  const pokemonData = [
    {
        id: 1,
        name: 'bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        attack: 49,
        defense: 49
    }
  ];

  return (
    <div className="App">
      <h1>Wellcome to pokedex</h1>
      <PokemonTable pokemonData={pokemonData} />

    </div>
  );
}

export default App;
