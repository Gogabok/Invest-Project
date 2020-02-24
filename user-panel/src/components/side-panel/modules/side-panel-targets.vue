<template>
  <div class="side-panel-targets" ref="sidePanelModule">
    <div class="frame" ref="frame">
      <div class="circle">
        <div class="text-circle">
          <div class="text-dividend">
            <div class="title">Дивиденды</div>
            <div class="balance">$0.00</div>
          </div>

          <div class="dotted" />

          <div class="text-invested">
            <div class="balance">$0.00</div>
            <div class="title">Инвестировано</div>
          </div>
        </div>
        <svg class="main-circle">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#379A1D" />
              <stop offset="100%" stop-color="#1C4E0F" />
            </linearGradient>
          </defs>
          <circle class="bg" cx="150" cy="150" r="120" />
          <circle
            class="progress"
            cx="150"
            cy="150"
            r="120"
            ref="progressBar"
            stroke="url(#gradient)"
          />
        </svg>
      </div>
      <div class="targets-wrapper">
        <div class="targets-item" v-for="item in targets" :key="item.title + item.value">
          <svg viewBox="-50 -50 100 100" class="small-circle">
            <circle class="bg-small-circle" r="40" />
            <circle class="progress-small-circle" r="40" :ref="item.title + item.value" />
            <text
              x="50%"
              y="50%"
              dy=".3em"
              text-anchor="middle"
              class="progress-value"
            >{{ `${item.value}%` }}</text>
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
import targetsJsonDataAPI from "@/server/targets.json";

export default {
  name: "side-panel-targets",
  data: () => ({
    targets: null
  }),
  created() {
    // Получаем список целей и обрабатываем, занося их в this.targets,
    // полагаю, что лучше получение данных вынести в хук Created()
    this.targets = targetsJsonDataAPI;
  },
  mounted() {
    let fullLength = 2 * Math.PI * this.$refs.progressBar.r.baseVal.value;
    this.$refs.progressBar.style.strokeDashoffset = fullLength;
    this.$refs.progressBar.style.strokeDasharray = fullLength;
    this.getTargets();
    setTimeout(() => {
      this.$refs.frame ? this.$refs.frame.style.opacity = 1 : false
      
    }, 100);
    // Таймаут 300 просто для анимации
    setTimeout(() => {
      // Тут нужно получать данные юзера: от $$$ до %
      let ourCoef = 62; // % заполнения
      let forPercent = fullLength / 100;
      let result = fullLength - forPercent * ourCoef;
      if (this.$refs.progressBar) {
        this.$refs.progressBar.style.strokeDashoffset = result;
      }
    }, 300);
  },
  methods: {
    getTargets() {
      this.targets.forEach((item, index) => {
        let unicID = item.title + item.value;
        let fullLength = 2 * Math.PI * this.$refs[unicID][0].r.baseVal.value;
        this.$refs[unicID][0].style.strokeDashoffset = fullLength;
        this.$refs[unicID][0].style.strokeDasharray = fullLength;
        // Таймаут 300 просто для анимации
        setTimeout(() => {
          let forPercent = fullLength / 100;
          let result = fullLength - forPercent * item.value;
          if (this.$refs[unicID][0]) {
            this.$refs[unicID][0].style.strokeDashoffset = result;
          }
        }, 300);
      });
    }
  }
};
</script>

<style lang="scss">
.frame {
  width: 100%;
  opacity: 0;
  transition-duration: 1s;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  height: 100%;
}
.side-panel-targets {
  height: 100%;
}

.circle {
  position: relative;
  width: 300px;
  margin: 0px auto 0px auto;
}

.circle .main-circle {
  width: 100%;
  height: 300px;
}

.circle .bg {
  fill: none;
  stroke-width: 24px;
  stroke: #1f2932;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  & .text-dividend {
    color: #85aa53;
    text-transform: uppercase;
    font-weight: bold;
    & .title {
      font-size: 19px;
      margin-bottom: 10px;
    }
    & .balance {
      font-size: 36px;
    }
  }
  & .text-invested {
    color: #379a1d;
    text-transform: uppercase;
    margin-top: 15px;
    & .title {
      font-size: 16px;
      margin-top: 5px;
      font-weight: bold;
    }
    & .balance {
      font-size: 23px;
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
      color: #fff;
    }
  }
}

.targets-wrapper {
  margin: 10px 0px;
  max-height: 430px;
  overflow-y: auto;
  height: 100%;
}
.targets-wrapper::-webkit-scrollbar {
  background: rgba(30, 44, 61, 0.7);
  border-radius: 5px;
  width: 8px;
}
.targets-wrapper::-webkit-scrollbar-thumb {
  background: rgb(42, 59, 80);
  border-radius: 5px;
}
.targets-item {
  min-height: 80px;
  display: flex;
  align-items: flex-start;
  padding: 10px 35px;
  &:hover {
    background: rgba(184, 189, 196, 0.08);
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
    transform: translate(-50%, -50%);
    fill: #fff;
    font-size: 16px;
    font-weight: bold;
  }
}

.targets-wrapper .bg-small-circle {
  fill: none;
  stroke-width: 13px;
  stroke: rgba(133, 170, 83, 0.1);
}

.targets-wrapper .progress-small-circle {
  fill: none;
  stroke-width: 13px;
  stroke: rgba(133, 170, 83, 0.7);
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
@media screen and (max-width: 1250px) {
  .targets-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .targets-item {
    justify-content: center;
    max-width: 50%;
    padding: 0px;
    margin: 10px 0px;
  }
}

@media screen and (max-width: 650px) {
  .targets-wrapper {
    display: block;
    margin-top: 0px;
  }
  .targets-item {
    justify-content: flex-start;
    max-width: 100%;
    padding: 5px 0px 5px 10px;
    margin: 10px 0px;
    & .target-text {
      width: 100%;
      min-width: 160px;
      & .title {
        margin-bottom: 5px;
      }
    }
  }
}
</style>