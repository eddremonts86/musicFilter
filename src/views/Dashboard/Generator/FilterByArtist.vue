<template>
  <Dashboard>
    <v-container class="PositionsView" fluid>
      <v-row>
        <v-col cols="12" class="grey lighten-2 rounded-lg">
          <v-row>
            <v-col cols="4"><Artist /></v-col>
            <v-col cols="4"><TimeRange :vertical-style-prop="false"/></v-col>
            <v-col cols="4"
              ><PositionRange :vertical-style-prop="false"
            /></v-col>
          </v-row>
        </v-col>

        <v-col sm="12" md="6" lg="6">
          <v-row>
            <v-col cols="12"><MusicList /> </v-col>
          </v-row>
        </v-col>

        <v-col sm="12" md="6" lg="6">
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
import MusicList from "@/components/Dashboard/Filters/MusicList.vue";
import Artist from "@/components/Dashboard/Filters/Artist.vue";
import PositionRange from "@/components/Dashboard/General/PositionRange.vue";
import TimeRange from "@/components/Dashboard/General/TimeRange.vue";

export default {
  name: "ArtistView",
  components: {
    Dashboard,
    MusicList,
    PositionRange,
    TimeRange,
    Artist
  }
};
</script>
