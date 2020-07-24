<template>
  <v-container>
    <div class="home_hero">
      <v-spacer></v-spacer>
      <div class="home_content">
        <h1>Make your own Playlist</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <v-btn large to="/dashboard">Generate now</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({})
};
</script>
