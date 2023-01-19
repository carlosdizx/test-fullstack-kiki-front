import CivilizedPokemon from "@/models/CivilizedPokemon";
import civipokeapi from "@/services/common/AxiosInstance";
import Swal from "sweetalert2";

export const registerPokemon = async (poke: CivilizedPokemon) => {
  try {
    await civipokeapi.post("pokemon", poke);
    await Swal.fire({
      title: "Pokemon registrado",
      html: "Datos guardados exitosamente",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  } catch (e) {
    await Swal.fire("Algo salio mal", "", "error");
  }
};

export const listPokemons = async():Promise<CivilizedPokemon[]> => {
  const {data} = await civipokeapi.get("pokemon/all");
  return data;
};

export const listSpecies = async() => {
  const {data} = await civipokeapi.get("pokemon/all/species")
  return data;
}

export const listTypes = async() => {
  const {data} = await civipokeapi.get("pokemon/all/types")
  return data;
}
