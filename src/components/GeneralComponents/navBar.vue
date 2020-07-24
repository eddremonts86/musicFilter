<template>
  <v-app-bar app class="nav_bg" flat>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </div>
    <v-spacer></v-spacer>
    <NavList/>
  </v-app-bar>
</template>

<script>
import NavList from '@/components/GeneralComponents/NavList.vue'
export default {
  components: {
    NavList
  }
};
</script>
