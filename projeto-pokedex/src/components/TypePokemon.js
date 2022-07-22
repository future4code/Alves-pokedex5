import React from "react";
import Bug from "../imageTypes/bug.png";
import Dark from "../imageTypes/dark.png";
import Dragon from "../imageTypes/dragon.png";
import Electric from "../imageTypes/electric.png";
import Fairy from "../imageTypes/fairy.png";
import Fighting from "../imageTypes/fighting.png";
import Fire from "../imageTypes/fire.png";
import Flying from "../imageTypes/flying.png";
import Grass from "../imageTypes/grass.png";
import Ground from "../imageTypes/ground.png";
import Ice from "../imageTypes/ice.png";
import Normal from "../imageTypes/normal.png";
import Poison from "../imageTypes/poison.png";
import Psychic from "../imageTypes/psychic.png";
import Rock from "../imageTypes/rock.png";
import Steel from "../imageTypes/steel.png";
import Water from "../imageTypes/water.png";

import { ImgType } from "./StyledListPokemons";

const TypePokemon = ({typePokemon}) => {
    if (typePokemon === "poison") {
        return (
            <>
                <ImgType src={Poison}/>
            </>
        )
    } if (typePokemon === "bug") {
        return (
            <>
                <ImgType src={Bug}/>
            </>
        )
    } if (typePokemon === "dark") {
        return (
            <>
                <ImgType src={Dark}/>
            </>
        )
    } if (typePokemon === "dragon") {
        return (
            <>
                <ImgType src={Dragon}/>
            </>
        )
    } if (typePokemon === "electric") {
        return (
            <>
                <ImgType src={Electric}/>
            </>
        )
    } if (typePokemon === "fairy") {
        return (
            <>
                <ImgType src={Fairy}/>
            </>
        )
    } if (typePokemon === "fighting") {
        return (
            <>
                <ImgType src={Fighting}/>
            </>
        )
    } if (typePokemon === "fire") {
        return (
            <>
                <ImgType src={Fire}/>
            </>
        )
    } if (typePokemon === "flying") {
        return (
            <>
                <ImgType src={Flying}/>
            </>
        )
    } if (typePokemon === "grass") {
        return (
            <>
                <ImgType src={Grass}/>
            </>
        )
    } if (typePokemon === "ground") {
        return (
            <>
                <ImgType src={Ground}/>
            </>
        )
    } if (typePokemon === "ice") {
        return (
            <>
                <ImgType src={Ice}/>
            </>
        )
    } if (typePokemon === "normal") {
        return (
            <>
                <ImgType src={Normal}/>
            </>
        )
    } if (typePokemon === "psychic") {
        return (
            <>
                <ImgType src={Psychic}/>
            </>
        )
    } if (typePokemon === "rock") {
        return (
            <>
                <ImgType src={Rock}/>
            </>
        )
    } if (typePokemon === "steel") {
        return (
            <>
                <ImgType src={Steel}/>
            </>
        )
    } if (typePokemon === "water") {
        return (
            <>
                <ImgType src={Water}/>
            </>
        )
    }
};
export default TypePokemon;
