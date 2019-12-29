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
      labels: ['02.20', '03.20', '04.20', '05.20'],
      datasets: [{
          data: [
            {
              y: 50,
              x: '02.20'
            },
            {
              y: 37,
              x: '03.20'
            },
            {
              y: 47,
              x: '04.20'
            },
            {
              y: 3 5,
              x: '05.20'
            },
          ],
          borderColor: '#379A1D',
          borderWidth: 6,
          pointBorderWidth: 6,
          pointBorderColor: '#fff',
          pointBackgroundColor: '#379A1D',
          pointRadius: 7,
          pointHitRadius: 13,
          backgroundColor: 'rgba(55, 154, 29, .05)',
          pointHoverRadius: 7,
          pointHoverBorderWidth: 6
      }],
    },
    { 
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          stacked: true,
          display: true,
          gridLines: {
            display: true,
            color: 'rgba(255, 255, 255, 0.4)',
            borderDash: [1, 10],
            drawTicks: false,
          },
          ticks: {
            fontColor: "#fff",
            fontSize: 16,
            padding: 15,
            fontFamily: "Exo 2",
            callback: function(value, index, values) {
                return value + '%';
            },
            min: 0,
            max: 100,
            stepSize: 25
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
            fontFamily: "Exo 2",
            
          }
        }]
      }
    }
    )
  }
}
</script>

<style lang="scss">
  .dashboard-graph {
    position: relative;
    left: -47px;
    width: calc(100% + 61.5px);
    bottom: -39.5px;
  }
</style>