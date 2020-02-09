<template>
  <div class="side-panel-targets" ref="sidePanelModule">
    <div class="frame" ref="frame">
      <div class="circle">
          <div class="text-circle">
            <div class="text-dividend">
              <div class="title">
                Дивиденды
              </div>
              <div class="balance">
                $0.00
              </div>
            </div>

            <div class="dotted"/>

            <div class="text-invested">
              <div class="balance">
                $0.00
              </div>
              <div class="title">
                Инвестировано
              </div>
            </div>
          </div>
          <svg class="main-circle">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#379A1D" />
                <stop offset="100%" stop-color="#1C4E0F" />
              </linearGradient>
            </defs>
            <circle class="bg" cx="180" cy="180" r="150"></circle>
            <circle class="progress" cx="180" cy="180" r="150" ref="progressBar" stroke="url(#gradient)"></circle>
          </svg>
      </div>
      <div class="targets-wrapper">
        <div class="targets-item" v-for="item in targets" :key="item.title + item.value">
          <svg viewBox="-50 -50 100 100" class="small-circle">
            <circle class="bg-small-circle" r="40"></circle>
            <circle class="progress-small-circle" r="40" :ref="item.title + item.value"></circle>
            <text x="50%" y="50%" dy=".3em" text-anchor="middle" class="progress-value">
              {{ `${item.value}%` }}
            </text>
          </svg>
           <div class="target-text">
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import targetsJsonDataAPI from "@/server/targets.json"

export default {
  name: "side-panel-targets",
  data: () => ({
    targets: null
  }),
  created() {
    // Получаем список целей и обрабатываем, занося их в this.targets,
    // полагаю, что лучше получение данных вынести в хук Created()
    this.targets = targetsJsonDataAPI
  },
  mounted() {
    
    let fullLength = 2 * Math.PI * this.$refs.progressBar.r.baseVal.value
    this.$refs.progressBar.style.strokeDashoffset = fullLength
    this.$refs.progressBar.style.strokeDasharray = fullLength
    this.getTargets()
    setTimeout(() => {
      this.$refs.frame.style.opacity = 1
    }, 100)
    // Таймаут 300 просто для анимации
    setTimeout(() => {
      // Тут нужно получать данные юзера: от $$$ до %
      let ourCoef = 62 // % заполнения
      let forPercent = fullLength / 100
      let result = fullLength - (forPercent * ourCoef)
      this.$refs.progressBar.style.strokeDashoffset = result
    }, 300);
  },
  methods: {
    getTargets () {
      this.targets.forEach((item, index) => {
        let unicID = item.title + item.value
        let fullLength = 2 * Math.PI * this.$refs[unicID][0].r.baseVal.value
        this.$refs[unicID][0].style.strokeDashoffset = fullLength
        this.$refs[unicID][0].style.strokeDasharray = fullLength
        // Таймаут 300 просто для анимации
        setTimeout(() => {
          let forPercent = fullLength / 100
          let result = fullLength - (forPercent * item.value)
          this.$refs[unicID][0].style.strokeDashoffset = result
        }, 300);
      })
    }
  }
}
</script>

<style lang="scss">
.frame {
  width: 100%;
  opacity: 0;
  transition-duration: 1s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.side-panel-targets {
  height: 100%;
}

.circle {
  position: relative;
  width: 360px;
  margin: 0px auto 0px auto;
}

.circle .main-circle {
  width: 100%;
  height: 360px;
}

.circle .bg {
  fill: none;
  stroke-width: 24px;
  stroke: #1F2932;
}

.circle .progress {
  fill: none;
  stroke-width: 12px;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition-duration: 1s;
}

.circle .text-circle {
  position: absolute;
  width: 100%;
  text-align: center;
  margin: auto;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  user-select: none;
  & .text-dividend {
    color: #85AA53;
    text-transform: uppercase;
    font-weight: bold;
    & .title {
      font-size: 20px;
      margin-bottom: 10px;
    }
    & .balance {
      font-size: 40px;
    }
  }
  & .text-invested {
    color: #379A1D;
    text-transform: uppercase;
    margin-top: 15px;
    & .title {
      font-size: 17px;
      margin-top: 10px;
      font-weight: bold;
    }
    & .balance {
      font-size: 25px;
      font-weight: 400;
    }
  }
  & .dotted {
    width: 50%;
    overflow: hidden;
    margin: 0px auto;
    &:after {
      content: "........................";
      letter-spacing: 10px;
      font-size: 20px;
      color:#fff;
    }
  }
}

.targets-wrapper {
  margin: 10px 0px;
  max-height: 420px;
  overflow-y: auto;
  height: 100%;
}

.targets-item {
  min-height: 80px;
  display: flex;
  align-items: flex-start;
  padding: 10px 35px;
  &:hover {
    background: rgba(184, 189, 196, .08);
    user-select: none;
  }
}

.targets-item .small-circle {
  height: 100%;
  min-height: 80px;
  & .progress-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    fill:#fff;
    font-size: 16px;
    font-weight: bold;
  }
}

.targets-wrapper .bg-small-circle {
  fill: none;
  stroke-width: 13px;
  stroke: rgba(133, 170, 83, .1);
}

.targets-wrapper .progress-small-circle {
  fill: none;
  stroke-width: 13px;
  stroke: rgba(133, 170, 83, .7);
  stroke-linecap: round;
  transition-duration: 1s;
  transform: rotate(-90deg);
}

.target-text {
  color: #fff;
  margin-left: 15px;
  max-width: 60%;
  & .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
  }
  & .desc {
    font-weight: 400;
    font-size: 16px;
  }
}

</style>