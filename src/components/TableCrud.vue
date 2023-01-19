<template>
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
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.uuid }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.documentNumber }}</td>
        <td>{{ item.documentType }}</td>
        <td>{{ item.speciesPokemon }}</td>
        <td>{{ item.typePokemon }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
const desserts = [
  {
    "uuid": "0eabb7e9-7d12-4649-b5c1-76531b2f94ab",
    "name": "Canela",
    "documentNumber": "102255",
    "documentType": "pokeid",
    "speciesPokemon": "XD",
    "typePokemon": "AS"
  },
  {
    "uuid": "6ed5968e-362b-44fc-9fbb-a2ae2172b9b4",
    "name": "Canela",
    "documentNumber": "102255",
    "documentType": "pokeid",
    "speciesPokemon": "XD",
    "typePokemon": "AS"
  }
];
</script>

<style scoped></style>
