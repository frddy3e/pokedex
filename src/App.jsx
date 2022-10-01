import './App.css';
import PokemonTable from './presentation/views/pokemon/list/pokemonTable';
import PokemonNewEdit from './presentation/views/pokemon/edit/PokemonNewEdit';
import PokemonFiler from './presentation/views/pokemon/filter/PokemonFilter';
import PokemonNew from './presentation/views/pokemon/new/PokemonNew';
import Title from './presentation/components/title';

import {useEffect, useState} from 'react';
import PokemonListViewModel from './presentation/views/pokemon/list/ViewModel';
import PokemonNewViewModel from './presentation/views/pokemon/new/viewModel';


function App() {
  const {getPokemonList, pokemonList, isLoadingPokemonList, errorPokemonList} = PokemonListViewModel();
  const {handleSavePokemon, handleCancelCreatePokemon, newPokemon, isCreatingPokemon, handleCreatePokemon} = PokemonNewViewModel();
  
  useEffect(() => {
    getPokemonList();
  }, [isCreatingPokemon]);
  

  return (

    <div className="App">

      <div className="title" data-testid="general-title" >
        <Title text="Listado de Pokemon" />
      </div>

      <div className="filter-new">
        <PokemonFiler />
        <PokemonNew onClick={handleCreatePokemon} />
      </div>

      <div>
        {errorPokemonList && <div data-testid="error-pokemon-list">Error al cargar la lista de pokemon</div>}
        {isLoadingPokemonList && <div data-testid="loading-pokemon-list">Cargando lista de pokemon</div>}
        {!isLoadingPokemonList && !errorPokemonList && <PokemonTable pokemonData={pokemonList} />}
      </div>
      

      <div>
        {isCreatingPokemon && <PokemonNewEdit pokemon={newPokemon} onSave={handleSavePokemon} onCancel={handleCancelCreatePokemon} />}
      </div>
    </div>
  );
}

export default App;
