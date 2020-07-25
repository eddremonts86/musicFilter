<template>
  <v-card>
    <v-card-title class="grey lighten-3">Time Range </v-card-title>
    <v-card-text>
      <v-row v-if="verticalStyleProp">
        <v-col cols="12"><DateSelector :refrence-prop="deteFrom" /> </v-col>
        <v-col cols="12">
          <DateSelector :refrence-prop="dateTo" :label-prop="'To Date'"
        /></v-col>
      </v-row>

      <v-row v-else>
        <v-col sm="12" md="6" lg="6"><DateSelector :refrence-prop="deteFrom" /> </v-col>
        <v-col sm="12" md="6" lg="6">
          <DateSelector :refrence-prop="dateTo" :label-prop="'To Date'"
        /></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import DateSelector from "@/components/Dashboard/General/DateSelector.vue";
export default {
  props: {
    verticalStyleProp: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  components: { DateSelector }
};
</script>

<style></style>
