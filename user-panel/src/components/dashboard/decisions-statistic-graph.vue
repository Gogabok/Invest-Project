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
  mounted () {
    this.renderChart({
      labels: ['', '', '', '', '', '', ''],
      datasets: [{
          data: [0, 159, 75, -200, 20, 55, 40],
          borderColor: '#379A1D',
          borderWidth: 3,
          lineTension: 0,
          fill: false,
          pointBorderWidth: 0,
          pointRadius: 0
      }],
    },
    { 
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 15
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
          },
          ticks: {
            display: false,
          }
        }],
        xAxes: [{
          display: false,
          // offset: false
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