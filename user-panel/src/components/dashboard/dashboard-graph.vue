<template>
  <div class="dashboard-graph">
    <div class="dashboard-graph-zone">
      <canvas ref="canvas"></canvas>
      <div :style="`bottom: ${topOfLeaf}px`" ref="leaf" class="leaf">
        <img ondragstart="return false" src="../../assets/common/leaf.svg" alt="">
        <span>4,5%</span>
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
    labels: ['01.20', '02.20', '03.20', '04.20', '05.20'],
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
              y: 10,
              x: '03.20'
            },
            {
              y: 10,
              x: '04.20'
            },
            {
              y: 50,
              x: '05.20'
            },
            
          ],
  }),
  methods: {
    LeafCalc() {
      let canvasHeight = this.$refs.canvas.clientHeight - 55
      let lastPoint = this.points[this.points.length - 1]
      let topOfLeaf = ((canvasHeight / 100) * lastPoint.y)
      console.log((canvasHeight / 100) * lastPoint.y)
      this.$refs.leaf.style.opacity = 1
      this.topOfLeaf = 40 + topOfLeaf
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
          pointRadius: function (context) {
            let idx = context.dataIndex
            return idx < context.dataset.data.length - 1 ? 7 : 0
          },
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
      console.log(1)
      vm.LeafCalc()
    }
  }
}
</script>

<style lang="scss">
  .dashboard-graph-module {
    overflow: visible !important;
    @media screen and (min-width: 1251px) {
      margin-bottom: 50px !important;
    }
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
    @media screen and (min-width: 1251px) {
      margin: 0px -30px -44px -60px;
    }
  }
  .leaf {
    position: absolute;
    right: -62px;
    bottom: 40px;
    transition-duration: .7s;
    transition-timing-function: cubic-bezier(0,0,0.2,1);
    opacity: 0;
    width: 90px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: 600;
    & img {
      width: 130px;
      position: absolute;
      z-index: 99;
    }
    & span {
      color: #fff;
      z-index: 100;
      position: relative;
      top: -1px;
      left: -2px;
    }
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