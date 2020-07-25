<template>
  <v-card :key="keyProp">
    <v-card-title
      >{{ TableLabelProp }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Filter"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        :search="search"
        :item-key="keySortProp"
        :sort-by="keySortProp"
        :show-group-by="showGroupProp"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    showGroupProp: {
      type: Boolean,
      default: false,
      required: true
    },
    keySortProp: {
      type: String,
      default: "name",
      required: true
    },
    TableLabelProp: {
      type: String,
      default: "Music List",
      required: true
    },
    keyProp: {
      type: String,
      default: "MusicList",
      required: true
    }
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Song Title",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Position", value: "protein" },
        { text: "Artist", value: "calories" },
        { text: "Genre ", value: "Genre" },
        { text: "Year", value: "carbs" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          Genre: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          Genre: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          Genre: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          Genre: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          Genre: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          Genre: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          Genre: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          Genre: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          Genre: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          Genre: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  }
};
</script>
