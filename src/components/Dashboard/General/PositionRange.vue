<template>
  <v-card>
    <v-card-title class="grey lighten-3">Position Range </v-card-title>
    <v-card-text>
      <v-row v-if="verticalStyleProp">
        <v-col cols="12" >
          <v-text-field outlined v-model="Position['from']" label="From Position" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field outlined v-model="Position['to']" label="To Position" required></v-text-field>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col sm="12" md="6" lg="6" >
          <v-text-field outlined v-model="Position['from']" label="From Position" required></v-text-field>
        </v-col>
        <v-col sm="12" md="6" lg="6">
          <v-text-field outlined v-model="Position['to']" label="To Position" required></v-text-field>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    verticalStyleProp: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  data: () => ({
    Position: []
  })
};
</script>

<style></style>
