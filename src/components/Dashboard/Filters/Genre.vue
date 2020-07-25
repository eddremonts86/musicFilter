<template>
  <v-card>
    <v-card-title class="grey lighten-3">Select Genre </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="value"
            :items="items"
            chips
            label="Genres"
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
      "Salsa",
      "Hip Hop",
      "Pop",
      "Country",
      "Dance/Electronic",
      "Gospel",
      "Jazz",
      "Holiday",
      "Web",
      "Intrernational",
      "Regguetom"
    ],
    value: []
  })
};
</script>

<style></style>
