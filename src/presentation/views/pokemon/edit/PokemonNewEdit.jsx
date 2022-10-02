import React from "react";
import { useState } from "react";
import PropTypes from "prop-types"
import InputText from "../../../components/inputText";
import Button from "../../../components/button";
import Slider from "../../../components/slider";
import Title from "../../../components/title";

import {AiOutlineSave} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";

import Style from './PokemonNewEdit.module.css';

/**
 * The componenet that renders the pokemon new/edit view.
 * @component
 * @example
 * return (
 * <PokemonNewEdit />
 * )
 */
const PokemonNewEdit = (props) => {
    const [name, setName] = useState(props.pokemon.name);
    const [attack, setAttack] = useState(props.pokemon.attack);
    const [defense, setDefense] = useState(props.pokemon.defense);
    const [image, setImage] = useState(props.pokemon.image);
    const [pokemonId, setPokemonId] = useState(props.pokemon.id);

    const {onSave, onCancel} = props;



    return <div data-testid="pokemon-new-edit" className={Style.container}>
        <Title text="Nuevo Pokemon"/>
        <div className={Style.formRow}>
        <InputText id="name" name="name" label="Nombre: " value={name} onChange={(e) => setName(e.target.value)}/>
        <Slider id="attack" name="attack" label="Ataque: " value={attack} minValue={0} maxValue={100} onChange={(e) => setAttack(e.target.value)}/>
        </div>
        <div className={Style.formRow}>
        <InputText id="image" name="image" label="Imagen: " value={image} onChange={(e) => setImage(e.target.value)}/>
        <Slider id="defense" name="defense" label="Defensa: " value={defense} minValue={0} maxValue={100} onChange={(e) => setDefense(e.target.value)}/>
        </div>
        <div className={Style.buttonRow}>
        <Button text="Guardar" onClick={()=>{
            const savePokemon = {
                id: pokemonId,
                name: name,
                attack: parseInt(attack),
                defense: parseInt(defense),
                image: image,
                hp: 100,
                type: "undefined",
                idAuthor: 1
            }
            console.log("savePokemon");
            console.log(savePokemon);
            onSave(savePokemon);
        }} icon={<AiOutlineSave size={20} />} disabled={name === "" || attack === "" || defense === "" || image === ""}/>
        <Button text="Cancelar" onClick={onCancel} icon={<AiOutlineClose size={20} />} disabled={false}/>
        </div>
    </div>;
}

PokemonNewEdit.defaultProps = {
    pokemon: {},
    onSave: () => {},
    onCancel: () => {}
}

PokemonNewEdit.propTypes = {
    /**
     * The pokemon data
     */
    pokemon: PropTypes.object,
    /**
     * The function to call when the user clicks on the save button
     */
    onSave: PropTypes.func,
    /**
     * The function to call when the user clicks on the cancel button
     */
    onCancel: PropTypes.func
}




export default PokemonNewEdit;