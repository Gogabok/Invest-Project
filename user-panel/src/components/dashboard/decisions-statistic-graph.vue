<template>
  <div class="decisions-statistic-graph">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  name: 'desicionsStatisticGraph',
  extends: Line,
  data: () => ({
    
  }),
  props: [
    'data'
  ],
  computed: {
    color () {
      return this.data.data[this.data.data.length - 1] < 0 ? '#F55A50' : '#379A1D';
    }
  },
  mounted () {
    this.renderChart({
      labels: this.data.labels,
      datasets: [{
          data: this.data.data,
          borderColor: this.color,
          borderWidth: 3,
          lineTension: 0,
          fill: false,
          pointBorderWidth: 0,
          pointRadius: 0,
          spanGaps: false,
      }],
    },
    { 
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
      },
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          display: true,
          gridLines: {
            display: true,
            color: 'transparent',
            zeroLineColor: '#707070',
            zeroLineBorderDash: [2,5],
            zeroLineWidth: 2
          },
          ticks: {
            display: false,
          }
        }],
        xAxes: [{
          display: false,
        }]
      }
    }
    )
  }
}
</script>

<style lang="scss" scoped>
  .decisions-statistic-graph, canvas {
    max-height: 40px;
    max-width: 150px;
    width: 100%;
    height: 100%;
  }
</style>