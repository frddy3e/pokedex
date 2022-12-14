import React from "react";
import Button from "../../../components/button";
import {AiOutlinePlus} from "react-icons/ai";

const PokemonNew = (props) => {
    return (
        <Button onClick={props.onClick} text="Nuevo" icon={<AiOutlinePlus size={20} color={"#fff"}/>}/>
    );
};

export default PokemonNew;