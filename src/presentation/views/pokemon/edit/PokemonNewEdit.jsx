import React from "react";
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
    const {pokemon, onSave, onCancel, onChange} = props;
    const {id, name, image, attack, defense} = pokemon;
    return <div data-testid="pokemon-new-edit" className={Style.container}>
        <Title text="Nuevo Pokemon"/>
        <div className={Style.formRow}>
        <InputText id="name" label="Nombre: " value={name} onChange={onChange}/>
        <Slider id="attack" label="Ataque: " value={attack} onChange={onChange} minValue={0} maxValue={100}/>
        </div>
        <div className={Style.formRow}>
        <InputText id="image" label="Imagen: " value={image} onChange={onChange}/>
        <Slider id="defense" label="Defensa: " value={defense} onChange={onChange} minValue={0} maxValue={100}/>
        </div>
        <div className={Style.buttonRow}>
        <Button text="Guardar" onClick={onSave} icon={<AiOutlineSave size={20} />} disabled={true}/>
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