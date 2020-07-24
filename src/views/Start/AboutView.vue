<template>
  <StartHome>
    <v-container class="about">
      <h1>This is an about page</h1>
    </v-container>
  </StartHome>
</template>

<script>
// @ is an alias to /src
import StartHome from "@/layouts/StartHome.vue";
export default {
  name: "AboutView",
  components: {
    StartHome
  }
};
</script>
