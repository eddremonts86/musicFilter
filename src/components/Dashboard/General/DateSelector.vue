<template>
  <v-menu
    :key="refrenceProp"
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="labelProp"
        readonly
        v-bind="attrs"
        outlined
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" type="month" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    labelProp: {
      type: String,
      default: "From Date",
      required: true
    },
    refrenceProp: {
      type: String,
      required: true
    }
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false
  })
};
</script>
