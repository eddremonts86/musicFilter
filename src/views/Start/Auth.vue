<template>
  <StartHome>
    <div class="centerGrid pt-10">
      <Auth />
    </div>
  </StartHome>
</template>

<script>
// @ is an alias to /src
import Auth from "@/components/Authorization/Auth.vue";
import StartHome from "@/layouts/StartHome.vue";
export default {
  name: "HomeView",
  components: {
    Auth,
    StartHome
  }
};
</script>
<style scoped>
.centerGrid {
  display: grid;
  justify-content: center;
  background: url(https://cdn.pixabay.com/photo/2017/03/09/20/53/microphone-2130806_960_720.jpg);
  background-position: center;
  background-size: cover;
  height: calc(100vh - 64px);
}
</style>