<template>
  <Dashboard>
    <v-container class="about">
      <h1>This is an Dashboard page</h1>
    </v-container>
  </Dashboard>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/layouts/Dashboard.vue";
export default {
  name: "ServiceView",
  components: {
    Dashboard
  }
};
</script>
