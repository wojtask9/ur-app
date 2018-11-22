<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-data-iterator
                :items="wk.items"
                :rows-per-page-items="wk.rowsPerPageItems"
                :pagination.sync="wk.pagination"
                content-tag="v-layout"
                row
                wrap
        >
          <v-flex
                  slot="item"
                  slot-scope="props"

          >
            <v-card>
              <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>a:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.calories%10}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>b:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.fat%10 }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>c:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.carbs%10 }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>d:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.protein%10 }}</v-list-tile-content>
                </v-list-tile>

              </v-list>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
	module.exports = {
		data() {
			return {
				id: 0,
				msg: 'Hey Nic Raboy',
				wk: {
					rowsPerPageItems: [4, 8, 12],
					pagination: {
						rowsPerPage: 10
					},
					items: [
						{
							value: false,
							name: 'I-II',
							calories: 159,
							fat: 6.0,
							carbs: 24,
							protein: 4.0,
							sodium: 87,
							calcium: '14%',
							iron: '1%'
						},
						{
							value: false,
							name: 'III',
							calories: 159,
							fat: 6.0,
							carbs: 24,
							protein: 4.0,
							sodium: 87,
							calcium: '14%',
							iron: '1%'
						},
						{
							value: false,
							name: 'IV',
							calories: 237,
							fat: 9.0,
							carbs: 37,
							protein: 4.3,
							sodium: 129,
							calcium: '8%',
							iron: '1%'
						},
						{
							value: false,
							name: 'V',
							calories: 262,
							fat: 16.0,
							carbs: 23,
							protein: 6.0,
							sodium: 337,
							calcium: '6%',
							iron: '7%'
						},
						{
							value: false,
							name: 'VI',
							calories: 305,
							fat: 3.7,
							carbs: 67,
							protein: 4.3,
							sodium: 413,
							calcium: '3%',
							iron: '8%'
						},
						{
							value: false,
							name: 'VII',
							calories: 356,
							fat: 16.0,
							carbs: 49,
							protein: 3.9,
							sodium: 327,
							calcium: '7%',
							iron: '16%'
						},
						{
							value: false,
							name: 'VIII',
							calories: 375,
							fat: 0.0,
							carbs: 94,
							protein: 0.0,
							sodium: 50,
							calcium: '0%',
							iron: '0%'
						},
						{
							value: false,
							name: 'IX',
							calories: 392,
							fat: 0.2,
							carbs: 98,
							protein: 0,
							sodium: 38,
							calcium: '0%',
							iron: '2%'
						},
						{
							value: false,
							name: 'X',
							calories: 408,
							fat: 3.2,
							carbs: 87,
							protein: 6.5,
							sodium: 562,
							calcium: '0%',
							iron: '45%'
						},
						{
							value: false,
							name: 'XI-XII',
							calories: 452,
							fat: 25.0,
							carbs: 51,
							protein: 4.9,
							sodium: 326,
							calcium: '2%',
							iron: '22%'
						}
					]
				}
			}
		},
		created() {
			this.id = this.$route.params.id;
		},
		methods: {
			navigate() {
				this.$router.go(-1);
			},
			toggle: function () {
				console.log('toggle')
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
