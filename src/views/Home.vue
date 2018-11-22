<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div class="text-xs-center">
          <v-menu open-on-click bottom offset-y style="background-color:white">
            <v-btn
                    slot="activator"
                    color="primary"
                    dark

            >
              Choose Species of insect
            </v-btn>

            <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"

            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
<!--
            <v-list>
              <v-list-tile-title>Cetyniec większy</v-list-tile-title>
              <v-list-tile-title>Cetyniec mniejszy</v-list-tile-title>
              <v-list-tile-title>Borecznik rudy</v-list-tile-title>
              <v-list-tile-title>Borecznik sosnowiec</v-list-tile-title>
              <v-list-tile-title>Poproch cetyniak</v-list-tile-title>
            </v-list>
            -->
          </v-menu>
        </div>
         or select month
        <v-date-picker
                v-model="date"
                full-width
                landscape
                type="month"
                class="mt-3"
        ></v-date-picker>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
  module.exports = {
    data: () => ({
		items: [
			{ title: 'Cetyniec większy' },
			{ title: 'Cetyniec mniejszy' },
			{ title: 'Borecznik rudy' },
			{ title: 'Borecznik sosnowiec' },
      { title: 'Poproch cetyniak' }
		]
	})
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
