<template>
  <div class="dashboard-graph">
    <div class="dashboard-graph-zone">
      <canvas ref="canvas"></canvas>
      <div :style="`bottom: ${topOfLeaf}px`" ref="leaf" class="leaf">
        4.5%
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
              y: 20,
              x: '12.20'
            },
          ],
  }),
  methods: {
    LeafCalc() {
      let canvasHeight = this.$refs.canvas.clientHeight + 20
      let lastPoint = this.points[this.points.length - 1]
      // let pxPerPoint = (canvasHeight / 100) * lastPoint.y
      let topOfLeaf = (canvasHeight / 100) * lastPoint.y
      console.log(topOfLeaf)
      if((canvasHeight / 2) < topOfLeaf) {
        topOfLeaf -= 30
      }
      this.topOfLeaf = topOfLeaf
    }
  },
  mounted () {
    this.renderChart({
      hoverMode: 'index',
      labels: this.labels,
      datasets: [{
          data: this.points,
          borderColor: '#379A1D',
          borderWidth: 5,
          pointBorderWidth: 3,
          pointBorderColor: '#fff',
          pointBackgroundColor: '#379A1D',
          pointRadius: 7,
          pointHitRadius: 9,
          backgroundColor: 'rgba(55, 154, 29, .08)',
          pointHoverRadius: 7,
          pointHoverBorderWidth: 3,
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
      legend: {
        display: false
      },
      tooltip: {
        // fontColor: "#D3D5D8",
        // fontFamily: "Exo 2"
      },
      scales: {
        yAxes: [{
          stacked: true,
          display: true,
          gridLines: {
            display: true,
            color: '#D3D5D8',
            borderDash: [1, 10],
            drawTicks: true,
          },
          ticks: {
            fontColor: "#D3D5D8",
            // fontSize: 16,
            padding: 5,
            // fontFamily: "Exo 2",
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
          color: '#D3D5D8',
          gridLines: {
            display: true,
            color: '#D3D5D8',
            borderDash: [1, 10],
            drawTicks: true,
            drawBorder: true,
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: "#D3D5D8",
            // fontSize: 16,
            padding: 10,
            // fontFamily: "Exo 2",
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
  .dashboard-graph-module {
    overflow: visible !important;
  }
  .dashboard-graph {
    // position: relative;
    width: 100%;
    // max-width: 1200px;
    margin: 0px auto;
    overflow: visible !important;
  }
  .dashboard-graph-zone {
    position: relative;
  }
  .leaf {
    position: absolute;
    right: -80px;
    color: #fff;
    width: 100px;
    height: 80px;
    background: url("../../assets/common/leaf.svg") 30%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: 600;
  }
  @media screen and (max-width: 1250px) {
    .dashboard-graph {
      overflow: auto !important;
    }
    .leaf {
      display: none;
    }
  }
  @media screen and (max-width: 652px) {
    .dashboard-graph-zone {
      width: 700px;
    }
    .dashboard-graph {
      overflow-x: auto;
      overflow: auto !important;
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