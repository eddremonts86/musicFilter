<template>
  <v-card>
    <v-card-title class="grey lighten-3">Select Awards </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Awards"
            multiple
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      "Blue Music Awards",
      "Fryderyk Awards",
      "40 Principales",
      "Grammys Awards",
      "Latins Grammys Awards",
      "Bilbord Awards"
    ],
    value: []
  })
};
</script>

<style></style>
