<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div class="text-xs-center">

        </div>

        <v-date-picker
                v-model="date"
                full-width
                landscape
                :reactive="true"
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
      date: null,
      items: [
        { title: 'Cetyniec większy' },
        { title: 'Cetyniec mniejszy' },
        { title: 'Borecznik rudy' },
        { title: 'Borecznik sosnowiec' },
        { title: 'Poproch cetyniak' }
      ]
    }),
    watch: {
      date(val) {
        console.log(val);
        this.$router.push('/calendar/'+val)
      }
    }
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
