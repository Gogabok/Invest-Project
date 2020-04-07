<template>
  <div class="dashboard-graph">
    <div class="dashboard-graph-zone">
      <canvas ref="canvas"></canvas>
      <div :style="`bottom: ${topOfLeaf}px`" ref="leaf" class="leaf">
        1
      </div>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data: () => ({
    topOfLeaf: 0,
    labels: ['01.20', '02.20', '03.20', '04.20', '05.20', '06.20', '07.20', '08.20', '09.20', '10.20', '11.20', '12.20'],
    points: [
            {
              y: 50,
              x: '01.20'
            },
            {
              y: 70,
              x: '02.20'
            },
            {
              y: 30,
              x: '03.20'
            },
            {
              y: 70,
              x: '04.20'
            },
            {
              y: 30,
              x: '05.20'
            },
            {
              y: 10,
              x: '06.20'
            },
            {
              y: 80,
              x: '07.20'
            },
            {
              y: 10,
              x: '08.20'
            },
            {
              y: 60,
              x: '09.20'
            },
            {
              y: 39,
              x: '10.20'
            },
            {
              y: 10,
              x: '11.20'
            },
            {
              y: 25,
              x: '12.20'
            },
          ],
  }),
  methods: {
    LeafCalc() {
      let canvasHeight = this.$refs.canvas.height
      let lastPoint = this.points[this.points.length - 1]

      let topOfLeaf = ((canvasHeight + 80) / 100) * +lastPoint.y
      this.topOfLeaf = topOfLeaf
      console.log(topOfLeaf);
    }
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [{
          data: this.points,
          borderColor: '#379A1D',
          borderWidth: 3,
          pointBorderWidth: 3,
          pointBorderColor: '#fff',
          pointBackgroundColor: '#379A1D',
          pointRadius: 3.5,
          pointHitRadius: 6.5,
          backgroundColor: 'rgba(55, 154, 29, .1)',
          pointHoverRadius: 3.5,
          pointHoverBorderWidth: 3,
      }],
    },
    { 
      layout: {
        padding: {
            left: 5,
            right: 5,
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
          stacked: true,
          display: true,
          gridLines: {
            display: true,
            color: 'rgba(210, 212, 214, 1)',
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
          },
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: true,
            color: 'rgba(210, 212, 214, 1)',
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
    })
    let vm = this
    this.LeafCalc()
    window.onresize = function () {
      vm.LeafCalc()
    }
  }
}
</script>

<style lang="scss">
  .dashboard-graph {
    // position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
  }
  .dashboard-graph-zone {
    position: relative;
  }
  .leaf {
    position: absolute;
    right: 0px;
  }
  @media screen and (max-width: 652px) {
    .dashboard-graph-zone {
      width: 700px;
    }
    .dashboard-graph {
      overflow-x: auto;
    }
    .dashboard-graph::-webkit-scrollbar {
      background: rgba(30, 44, 61, 0.7);
      border-radius: 5px;
      height: 5px;
    }
    .dashboard-graph::-webkit-scrollbar-thumb {
      background: #2a3b50;
      border-radius: 5px;
    }
  }
</style>