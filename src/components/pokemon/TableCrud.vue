<template>
  <v-card>
    <v-card-text>
      <FormPoke @registered="updatedPokemons" />
    </v-card-text>
    <v-card-actions>
      <v-table>
        <thead>
          <tr>
            <th>UUID</th>
            <th>Name</th>
            <th>Document Number</th>
            <th>Document Type</th>
            <th>Species</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pokemons" :key="item.uuid">
            <td>{{ item.uuid }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.documentNumber }}</td>
            <td>{{ item.documentType }}</td>
            <td>{{ item.speciesPokemon }}</td>
            <td>{{ item.typePokemon }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import FormPoke from "@/components/pokemon/FormPoke.vue";
import { ref } from "vue";
import { listPokemons } from "@/services/CivilizedPokemonApi";
import CivilizedPokemon from "@/models/CivilizedPokemon";
const pokemons = ref([{}]);

const updatedPokemons = async () => {
  pokemons.value = await listPokemons() as CivilizedPokemon[];
}

updatedPokemons().then();
</script>

<style scoped></style>
