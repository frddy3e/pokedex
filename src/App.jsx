import './App.css';
import PokemonTable from './presentation/views/pokemon/list/pokemonTable';
import PokemonNewEdit from './presentation/views/pokemon/edit/PokemonNewEdit';
import PokemonFiler from './presentation/views/pokemon/filter/PokemonFilter';
import PokemonNew from './presentation/views/pokemon/new/PokemonNew';
import Title from './presentation/components/title';






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

      <div className="title" data-testid="general-title" >
        <Title text="Listado de Pokemon" />
      </div>

      <div className="filter-new">
      <PokemonFiler />
      <PokemonNew />
      </div>
      
      <PokemonTable pokemonData={pokemonData} />
      <PokemonNewEdit pokemon={pokemonData[0]} onChange={()=>{}} />

    </div>
  );
}

export default App;
