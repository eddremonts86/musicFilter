<template>
  <StartHome>
    <div class="home">
      <Home :home="false" /></div
  ></StartHome>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/StartHome/Home.vue";
import StartHome from "@/layouts/StartHome.vue";
export default {
  name: "HomeView",
  components: {
    Home,
    StartHome
  }
};
</script>
