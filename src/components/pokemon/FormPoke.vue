<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click="dialog = !dialog" icon color="success">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-text class="text-h5"> Privacy Policy </v-card-text>

      <v-card-text>
        <v-form>
          <v-text-field v-model="data.name" placeholder="Nombre del pokemon" />
          <v-text-field
            v-model="data.documentNumber"
            placeholder="Numero de documento"
          />
          <v-select
            label="Seleccione el tipo de documento"
            :items="itemsDocumentTypes"
            v-model="data.documentType"
          />
          <v-select
            label="Seleccione la especie"
            :items="itemsSpecies"
            v-model="data.species"
           />
          <v-select
            label="Seleccione el tipo"
            :items="itemsTypes"
            v-model="data.type"
          />
          <v-divider />
          <v-btn block color="success" @click="register">Registrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["registered"]);
import { listDocumentTypes, listSpecies, listTypes, registerPokemon } from "@/services/CivilizedPokemonApi";
import CivilizedPokemon from "@/models/CivilizedPokemon";

const dialog = ref(false);
const data = ref({
  name: "",
  documentNumber: "",
  documentType: "",
  species: "",
  type: "",
});

const itemsSpecies = ref([]);
const itemsTypes = ref([]);
const itemsDocumentTypes = ref([]);

listSpecies().then(r => itemsSpecies.value = r as []);
listTypes().then(r => itemsTypes.value = r as []);
listDocumentTypes().then(r => itemsDocumentTypes.value = r as []);

const register = async () => {
  dialog.value = false;
  await registerPokemon(
    new CivilizedPokemon(
      data.value.name,
      data.value.documentNumber,
      data.value.documentType,
      data.value.species,
      data.value.type,
    )
  );
  data.value = {
    name: "",
    documentNumber: "",
    documentType: "",
    species: "",
    type: "",
  };
  emit("registered", true);
};
</script>
