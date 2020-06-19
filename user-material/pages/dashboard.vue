<template>
  <v-col class="px-5 py-0" cols="12">
    <v-col cols="12" lg="8">
      <v-container class="pa-0" fluid>
        <v-row align="center" no-gutters>
          <v-col cols="3" md="3">
            <img
              ondragstart="return false"
              src="../static/images/logo.svg"
              alt=""
              width="100%"
            />
          </v-col>
          <v-btn depressed class="success ml-5">Инвестировать</v-btn>
          <v-btn
            style="border-color: #379A1D; background: rgba(55, 154, 29, .1)"
            outlined
            class="ml-1"
            >Вывести деньги</v-btn
          >
          <v-spacer></v-spacer>
          <v-card class="card pr-0">
            <v-card-title class="body-1 py-3 pl-4 pr-0">
              woohoohooh@gmail.com
              <v-btn icon small class="mx-2">
                <v-icon color="rgba(184, 189, 196, .55)" dense
                  >more_vert</v-icon
                >
              </v-btn>
            </v-card-title>
          </v-card>
        </v-row>
        <v-row
          style="margin-top: 30px;"
          align="stretch"
          justify="space-between"
        >
          <v-col lg="4">
            <v-card
              outlined
              style="position: relative; height: 100%;"
              class="card"
            >
              <v-card-title class="font-weight-light subtitle-1 text-uppercase"
                >Инвестиции</v-card-title
              >
              <v-card-subtitle
                style="background: rgba(133, 170, 83, .1); max-width: 200px;"
                class="display-1 mt-0 mb-7 py-1"
              >
                $0.00
              </v-card-subtitle>
              <v-btn
                style="position: absolute; top: 10px; right: 10px;"
                icon
                small
              >
                <v-icon color="rgba(184, 189, 196, .55)" dense
                  >more_vert</v-icon
                >
              </v-btn>
            </v-card>
          </v-col>

          <v-col lg="4">
            <v-card
              outlined
              style="position: relative; height: 100%;"
              class="card"
            >
              <v-card-title class="font-weight-light subtitle-1 text-uppercase"
                >Дивиденды</v-card-title
              >
              <v-card-subtitle
                style="background: rgba(133, 170, 83, .1); max-width: 200px;"
                class="display-1 mt-0 mb-0 py-1"
              >
                $0.00
              </v-card-subtitle>
              <v-card-subtitle style="color: #6B894F;" class="mt-2 mb-5 py-1">
                От 5 до 15% в месяц
              </v-card-subtitle>
              <v-btn
                style="position: absolute; top: 10px; right: 10px;"
                icon
                small
              >
                <v-icon color="rgba(184, 189, 196, .55)" dense
                  >more_vert</v-icon
                >
              </v-btn>
            </v-card>
          </v-col>

          <v-col lg="4">
            <v-card
              outlined
              style="position: relative; height: 100%;"
              class="card"
            >
              <v-card-title class="font-weight-light subtitle-1 text-uppercase"
                >Партнерство</v-card-title
              >
              <v-card-subtitle
                style="background: rgba(133, 170, 83, .1); max-width: 200px;"
                class="display-1 mt-0 mb-7 py-1"
              >
                $0.00
              </v-card-subtitle>
              <v-btn
                style="position: absolute; top: 10px; right: 10px;"
                icon
                small
              >
                <v-icon color="rgba(184, 189, 196, .55)" dense
                  >more_vert</v-icon
                >
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: 'Dashboard'
}
</script>
