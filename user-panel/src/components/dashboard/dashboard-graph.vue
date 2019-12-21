<template>
  <div class="dashboard-graph">
    <vue-c3 :handler="handler"></vue-c3>
  </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
export default {
  name: 'graph',
  components: {
    VueC3
  },
  data: () => ({
    handler: new Vue()
  }),
  mounted () {
      const options = {
        line: {
          connectNull: true
        },
        padding: {
          top: 20,
          left: 50
        },
        data: {
          x: 'x',
          columns: [
            ['x', 1, 2, 3, 4],
            ['data1', 10, 20, 20, 70, 60, 30],
          ],
          type: 'spline',
        },
        axis: {
          y: {
            max: 100,
            min: 0,
            tick: {
              values: [0,15, 30, 50, 75, 100],
              format: function (d) { return d + '%'; }
            },
            padding: {
              top: 20,
              bottom: 0
            },
           
            // type: 'timeseries'
            
          },
          x: {
            tick: {
              fit: false
            },
            padding: {
              left: .05,
              right: .1
            },
          }
        },
        grid: {
          y: {
              show: true
          }
        }
      }
      this.handler.$emit('init', options)
    }
}
</script>

<style lang="scss">
.dashboard-graph, .dashboard-graph .c3 {
  max-width: 100%;
  height: 500px;
  margin-left: -23px;
}
.c3-line {
  stroke: #379A1D !important;
  stroke-width: 4px;
}
.c3-circle {
  stroke-width: 4px;
  stroke: #fff;
  fill: #379A1D !important;
  r: 5.5;
}
.c3-area {
  stroke: #fff !important;
  stroke-width: 12px;
}
.c3-axis {
  fill: none !important;
}

.c3 path, .c3 line {
  fill: none !important;
  stroke: #000 !important; }

.c3-axis path, .axis line {
    fill: none !important;
    stroke: #fff !important;
    stroke-width: 2px !important;
}
</style>