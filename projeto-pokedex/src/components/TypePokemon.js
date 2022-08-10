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

import { DivTypImg, ImgType } from "./StyledListPokemons";

const TypePokemon = ({typePokemon}) => {
    if (typePokemon === "poison") {
        return (
            <DivTypImg>
                <ImgType src={Poison}/>
            </DivTypImg>
        )
    } if (typePokemon === "bug") {
        return (
            <DivTypImg>
                <ImgType src={Bug}/>
            </DivTypImg>
        )
    } if (typePokemon === "dark") {
        return (
            <DivTypImg>
                <ImgType src={Dark}/>
            </DivTypImg>
        )
    } if (typePokemon === "dragon") {
        return (
            <DivTypImg>
                <ImgType src={Dragon}/>
            </DivTypImg>
        )
    } if (typePokemon === "electric") {
        return (
            <DivTypImg>
                <ImgType src={Electric}/>
            </DivTypImg>
        )
    } if (typePokemon === "fairy") {
        return (
            <DivTypImg>
                <ImgType src={Fairy}/>
            </DivTypImg>
        )
    } if (typePokemon === "fighting") {
        return (
            <DivTypImg>
                <ImgType src={Fighting}/>
            </DivTypImg>
        )
    } if (typePokemon === "fire") {
        return (
            <DivTypImg>
                <ImgType src={Fire}/>
            </DivTypImg>
        )
    } if (typePokemon === "flying") {
        return (
            <DivTypImg>
                <ImgType src={Flying}/>
            </DivTypImg>
        )
    } if (typePokemon === "grass") {
        return (
            <DivTypImg>
                <ImgType src={Grass}/>
            </DivTypImg>
        )
    } if (typePokemon === "ground") {
        return (
            <DivTypImg>
                <ImgType src={Ground}/>
            </DivTypImg>
        )
    } if (typePokemon === "ice") {
        return (
            <DivTypImg>
                <ImgType src={Ice}/>
            </DivTypImg>
        )
    } if (typePokemon === "normal") {
        return (
            <DivTypImg>
                <ImgType src={Normal}/>
            </DivTypImg>
        )
    } if (typePokemon === "psychic") {
        return (
            <DivTypImg>
                <ImgType src={Psychic}/>
            </DivTypImg>
        )
    } if (typePokemon === "rock") {
        return (
            <DivTypImg>
                <ImgType src={Rock}/>
            </DivTypImg>
        )
    } if (typePokemon === "steel") {
        return (
            <DivTypImg>
                <ImgType src={Steel}/>
            </DivTypImg>
        )
    } if (typePokemon === "water") {
        return (
            <DivTypImg>
                <ImgType src={Water}/>
            </DivTypImg>
        )
    }
};
export default TypePokemon;
