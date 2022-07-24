import { CardPokemon } from "./StyledListPokemons";

export const defineBackgroundColorCard = (type) => {
  if (type === "grass") {
    return "#729F92";
  } else if (type === "fire") {
    return "#EAAB7D";
  } else if (type === "water") {
    return "#71C3FF";
  } else if (type === "bug") {
    return "#76A866";
  } else if (type === "normal") {
    return "#BF9762";
  } else if (type === "electric") {
    return "#e8c00d";
  } else if (type === "ground") {
    return "#ce5c24";
  } else if (type === "poison") {
    return "#953d96";
  }
};
