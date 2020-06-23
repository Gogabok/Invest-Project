<template>
  <v-col class="row-dashboard px-5 py-0" cols="12">
    <v-col class="row-dashboard-flex" cols="12" lg="8">
      <v-container class="pa-0 row-dashboard-flex" fluid>
        <v-row class="row-dashboard-flex-autoheight" align="center" no-gutters>
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
          class="row-dashboard-flex-autoheight"
        >
          <v-col style="min-height: 175px;" lg="4">
            <v-card outlined class="ratio-inner">
              <div class="card ratio-content">
                <v-card-title class="font-weight-light headline text-uppercase"
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
              </div>
            </v-card>
          </v-col>

          <v-col style="min-height: 175px;" lg="4">
            <v-card outlined class="ratio-inner">
              <div class="card ratio-content">
                <v-card-title class="font-weight-light headline text-uppercase"
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
              </div>
            </v-card>
          </v-col>

          <v-col style="min-height: 175px;" lg="4">
            <v-card outlined class="ratio-inner">
              <div class="card ratio-content">
                <v-card-title class="font-weight-light headline text-uppercase"
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
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="graph-module" no-gutters>
          <graph-module></graph-module>
        </v-row>
      </v-container>
    </v-col>
  </v-col>
</template>
<script>
import graphModule from '@/components/graph-module'
export default {
  name: 'Dashboard',
  components: {
    graphModule
  }
}
</script>

<style lang="scss" scoped>
.row-dashboard * {
  box-sizing: border-box;
  max-height: 100%;
}
.ratio-inner {
  position: relative;
  height: 0;
  border: none;
  padding-top: 50%;
}
.ratio-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 175px;
}
.row-dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px !important;
  box-sizing: border-box;
  & .row-dashboard-flex {
    display: flex;
    flex-direction: column;
    flex: 1;
    &-autoheight {
      flex: 0;
    }
  }
}
.graph-module {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
</style>
