import { useState } from "react";
import { createPokemonUseCase } from "../../../../domain/useCase/pokemon/CreatePokemon";

export default function PokemonNewViewModel() {
    const [newPokemon, setNewPokemon] = useState({});
    const [isCreatingPokemon, setIsCreatingPokemon] = useState(false);

    async function handleCreatePokemon() {
        setIsCreatingPokemon(true);
        setNewPokemon({
            id: -1,
            name: "",
            image: "",
            attack: 0,
            defense: 0
        });
    }

    async function handleSavePokemon(pokemon) {
        await createPokemonUseCase(pokemon);
        setIsCreatingPokemon(false);
    }

    async function handleCancelCreatePokemon() {
        setIsCreatingPokemon(false);
    }

    return {
        newPokemon,
        isCreatingPokemon,
        setNewPokemon,
        handleCreatePokemon,
        handleSavePokemon,
        handleCancelCreatePokemon
    }
}