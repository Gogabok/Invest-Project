<template>
  <v-card class="graph-module-card card pa-4" outlined>
    <div class="btns-group">
      <v-row no-gutters>
        <v-col cols="6" sm="4" class="px-0">
          <v-btn-toggle
            v-model="current_option"
            mandatory
            borderless
            shaped
            class="option-btns"
          >
            <v-btn class="option-btn" align="center">
              <v-icon left dense>bar_chart</v-icon>
              <p class="body-2 text-capitalize my-0">Решения</p>
            </v-btn>

            <v-btn class="option-btn" align="center">
              <v-icon left dense>work</v-icon>
              <p class="body-2 text-capitalize my-0">Сделки</p>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </div>
    <component :is="current_option_in_table"></component>
  </v-card>
</template>
<script>
import decisions from '@/components/decisions'
export default {
  name: 'GraphModule',
  components: {
    decisions
  },
  data: () => ({
    current_option: 0
  }),
  computed: {
    current_option_in_table() {
      let option = 'decisions'
      if (this.current_option === 0) {
        option = 'decisions'
      }
      if (this.current_option === 1) {
        option = 'deals'
      }
      return option
    }
  }
}
</script>
<style lang="scss" scoped>
.graph-module-card {
  flex: 1;
  box-sizing: border-box !important;
  display: flex;
  flex-direction: column;
  & * {
    box-sizing: border-box !important;
  }
  & .option-btn {
    background: rgba(184, 189, 196, 0) !important;
    &-active {
      background: rgba(184, 189, 196, 0.1) !important;
    }
  }
  & .option-btns {
    background: rgba(184, 189, 196, 0) !important;
  }
}
</style>
