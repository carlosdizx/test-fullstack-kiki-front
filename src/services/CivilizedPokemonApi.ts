import CivilizedPokemon from "@/models/CivilizedPokemon";
import civipokeapi from "@/services/common/AxiosInstance";

export const registerPokemon =  async (poke:CivilizedPokemon) => {
  const {data} = await civipokeapi.post("pokemon",poke );
  return data;
}
