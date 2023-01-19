<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click="dialog = !dialog" icon color="success">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-text class="text-h5">
        Privacy Policy
      </v-card-text>

      <v-card-text>
        <v-form>
          <v-text-field v-model="data.name" placeholder="Nombre del pokemon"/>
          <v-text-field v-model="data.documentNumber" placeholder="Numero de documento"/>
          <v-divider />
          <v-btn block color="success" @click="register">Registrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { registerPokemon } from "@/services/CivilizedPokemonApi";
import CivilizedPokemon from "@/models/CivilizedPokemon";

const dialog = ref(false);
const data = ref({
  name: "",
  documentNumber: ""
});

const register = async () => {
  dialog.value = false;
  await registerPokemon(new CivilizedPokemon(data.value.name, data.value.documentNumber, "1231", "pokepass", "xd"))
}
</script>
