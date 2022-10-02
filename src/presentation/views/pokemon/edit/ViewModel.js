import { useState } from "react";   
import { updatePokemonUseCase } from "../../../../domain/useCase/pokemon/UpdatePokemon";
import { deletePokemonUseCase } from "../../../../domain/useCase/pokemon/DeletePokemon";

export default function PokemonEditViewModel() {
    const [editPokemon, setEditPokemon] = useState({});
    const [isDeletingPokemon, setIsDeletingPokemon] = useState(false);
    const [isEditingPokemon, setIsEditingPokemon] = useState(false);

    async function handleEditPokemon(pokemon) {
        setIsEditingPokemon(true);
        setEditPokemon(pokemon);
    }

    async function handleSaveEditPokemon(pokemon) {
        await updatePokemonUseCase(pokemon);
        setIsEditingPokemon(false);
    }

    async function handleCancelEditPokemon() {
        setIsEditingPokemon(false);
    }

    async function handleDeletePokemon(pokemon) {
        setIsDeletingPokemon(true);
        await deletePokemonUseCase(pokemon.id);
        setIsDeletingPokemon(false);
    }

    return {
        editPokemon,
        isEditingPokemon,
        isDeletingPokemon,
        setEditPokemon,
        handleEditPokemon,
        handleSaveEditPokemon,
        handleCancelEditPokemon,
        handleDeletePokemon
    }
}

