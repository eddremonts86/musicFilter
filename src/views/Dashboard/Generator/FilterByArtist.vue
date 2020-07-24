<template>
  <Dashboard>
    <v-container class="about" fluid>
      <h1>This is an By Artist page</h1>
    </v-container>
  </Dashboard>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/layouts/Dashboard.vue";
export default {
  name: "ArtistView",
  components: {
    Dashboard
  }
};
</script>
