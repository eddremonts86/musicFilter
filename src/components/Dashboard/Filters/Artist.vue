<template>
  <v-card>
    <v-card-title class="grey lighten-3">Search by artist </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field outlined v-model="artist" label="Artist Name" required></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    artist: ""
  })
};
</script>

<style></style>
