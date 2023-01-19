import CivilizedPokemon from "@/models/CivilizedPokemon";
import civipokeapi from "@/services/common/AxiosInstance";

export const registerPokemon =  async (civilizedPokemon: CivilizedPokemon) => {
  const {data} = await civipokeapi.post("pokemon", civilizedPokemon);
  return data;
}
