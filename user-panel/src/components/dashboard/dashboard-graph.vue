<template>
  <div class="dashboard-graph">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Vue from 'vue'
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data: () => ({
    
  }),
  mounted () {
    this.renderChart({
      labels: [10, 15, 20, 30],
      datasets: [{
          data: [
            {
              x: 1,
              y: 30
            },
            {
              x: 1,
              y: 10
            },
            {
              x: 1,
              y: 15
            },
          ],
          borderColor: '#379A1D',
          borderWidth: 4,
          pointBorderWidth: 5,
          pointBorderColor: '#fff',
          pointBackgroundColor: '#379A1D',
          pointRadius: 6,
          pointHitRadius: 11,
          backgroundColor: 'rgba(55, 154, 29, .05)',
          pointHoverRadius: 6,
          pointHoverBorderWidth: 5,
      }],
    },
    {
      scales: {
        yAxes: [{
          display: true,
          gridLines: {
            display: true,
            color: 'rgba(255, 255, 255, 0.4)',
            borderDash: [1, 10],
            drawTicks: false
          },
          ticks: {
            fontColor: "#fff",
            fontSize: 16,
            padding: 15,
            fontFamily: "Exo 2",
            callback: function(value, index, values) {
                return value + '%';
            }
          }
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: true,
            color: 'rgba(255, 255, 255, 0.4)',
            borderDash: [1, 10],
            drawTicks: false,
            drawBorder: true,
          },
          ticks: {
            fontColor: "#fff",
            fontSize: 16,
            padding: 15,
            fontFamily: "Exo 2"
          }
        }]
      }
    }
    )
  }
}
</script>

<style lang="scss">

</style>