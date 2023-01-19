<template>
  <v-card>
    <v-card-text class="text-right">
      <v-btn @click="add" icon color="success">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-actions>
      <v-table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Document Number</th>
            <th>Document Type</th>
            <th>Species</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pokemons" :key="item.uuid">
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
import { ref } from "vue";
import { listPokemons, registerPokemon } from "@/services/CivilizedPokemonApi";
import CivilizedPokemon from "@/models/CivilizedPokemon";
const pokemons = ref([{}]);

listPokemons().then(r=> {
  pokemons.value = r as CivilizedPokemon[];
});
const add = () => {
  registerPokemon(new CivilizedPokemon("algo", "De front","1231","pokepass","xd","xd"))
}
</script>

<style scoped></style>
