<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
      color="grey lighten-5"
    >
    <Aside />
    </v-navigation-drawer>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app flat="">
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <NavList />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :inset="footer.inset" app>
      <v-spacer></v-spacer>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavList from "@/components/GeneralComponents/NavList.vue";
import Aside from "@/components/Dashboard/General/Aside.vue";
export default {
  components: {
    NavList,
    Aside
  },
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: true,
      floating: false,
      mini: false
    },
    footer: {
      inset: true
    }
  })
};
</script>
