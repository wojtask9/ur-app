<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-list
                subheader
                three-line
        >
          <v-subheader>Kontrole</v-subheader>

          <template v-for="item in wk.monthData.inspection" >
            <v-list-tile @click="toggle()" :key="item.id">
              <v-list-tile-action>

                <v-checkbox
                        v-model="notifications"
                ></v-checkbox>

              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-sub-title>{{item.text}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-divider></v-divider>

          <v-subheader>Zabiegi ochronne</v-subheader>
          <template v-for="item in wk.monthData.tretments" >
            <v-list-tile @click="toggle()" :key="item.id">
              <v-list-tile-action>

                <v-checkbox
                        v-model="notifications"
                ></v-checkbox>

              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-sub-title>{{item.text}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

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
          "monthData": {
            "month": 1,
            "inspection": [
              {
                "id": "id_1",
                "text": "sporządzanie przez OZLP zestawień zbiorczych z kart meldunkowych i kwestionariuszy występowania chorób lasu w celu przesłania ich do NZLP i IBL w terminie do 10 stycznia,"
              },
              {
                "id": "id_2",
                "text": "kontrola występowania korowca sosnowego,"
              },
              {
                "id": "id_3",
                "text": "dodatkowy zbiór jaj brudnicy mniszki i brudnicy nieparki, służący do uzupełniającej analizy zdrowotności w razie przewidywanej akcji zwalczania."
              }
            ],
            "tretments": [
              {
                "id": "id_4",
                "text": "korowanie drzewa iglastego pozyskanego w okresie jesienno-zimowym, które w o okresie wiosenno-letnim pozostanie w lesie, na składowiskach i w zakładach przemysłowych położonych w strefie zagrożenia,"
              },
              {
                "id": "id_5",
                "text": "wykładanie drzew pułapkowych na cetyńce, smoliki, tycza cieśle i kornika sześciozębnego,"
              },
              {
                "id": "id_6",
                "text": "wykładanie I serii drzew pułapkowych na kornika drukarza, jeżeli brak robotników lub inne okoliczności nie zezwalają na ich późniejsze wyłożenie"
              },
              {
                "id": "id_7",
                "text": "dokarmianie ptaków,"
              },
              {
                "id": "id_8",
                "text": "ochrona i przynęcanie dzików w drzewostanach zaatakowanych przez szkodniki i liściożerne. (ryc. 1-3)"
              }
            ]
          }
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
