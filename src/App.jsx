import './App.css';
import PokemonTable from './presentation/views/pokemon/list/pokemonTable';
import PokemonNewEdit from './presentation/views/pokemon/edit/PokemonNewEdit';

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
      <PokemonNewEdit pokemon={pokemonData[0]} onChange={()=>{}} />

    </div>
  );
}

export default App;
