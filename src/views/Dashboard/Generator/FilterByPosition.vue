<template>
  <Dashboard>
    <v-container class="PositionsView" fluid>
      <v-row>
        <v-col sm="12" md="3" lg="2" class="grey lighten-2 rounded-lg">
          <v-row>
            <v-col cols="12"><Awards /></v-col>
            <v-col cols="12"><Genre /></v-col>
            <v-col cols="12"><TimeRange /></v-col>
            <v-col cols="12"><PositionRange /></v-col>
          </v-row>
        </v-col>
        <v-col sm="12" md="9" lg="10">
          <v-row>
            <v-col cols="12"><MusicList /> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </Dashboard>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/layouts/Dashboard.vue";
import Awards from "@/components/Dashboard/Filters/Awards.vue";
import Genre from "@/components/Dashboard/Filters/Genre.vue";
import MusicList from "@/components/Dashboard/Filters/MusicList.vue";

import PositionRange from "@/components/Dashboard/General/PositionRange.vue";
import TimeRange from "@/components/Dashboard/General/TimeRange.vue";

export default {
  name: "PositionView",
  components: {
    Dashboard,
    Awards,
    Genre,
    MusicList,
    PositionRange,
    TimeRange
  }
};
</script>
