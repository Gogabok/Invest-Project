<template>
  <div class="side-panel-targets">
    <div class="frame" ref="frame">
      <div>
        <div class="circle-big">
          <div class="text">
            2758<div class="small">kcal</div>
          </div>
          <svg>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#379A1D" />
                <stop offset="100%" stop-color="#1C4E0F" />
              </linearGradient>
            </defs>
            <circle class="bg" cx="150" cy="150" r="125"></circle>
            <circle class="progress" cx="150" cy="150" r="125" ref="progressBar" stroke="url(#gradient)"></circle>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-panel-targets",
  mounted() {
    let fullLength = 2 * Math.PI * this.$refs.progressBar.r.baseVal.value
    this.$refs.progressBar.style.strokeDashoffset = fullLength
    this.$refs.progressBar.style.strokeDasharray = fullLength
    setTimeout(() => {
      this.$refs.frame.style.opacity = 1
    }, 100)
    setTimeout(() => {
      // Тут нужно получать данные %
      let ourCoef = 62 // % заполнения
      let forPercent = fullLength / 100
      let result = fullLength - (forPercent * ourCoef)
      this.$refs.progressBar.style.strokeDashoffset = result
    }, 300);
  },
}
</script>

<style lang="scss">
.frame {
  width: 100%;
  opacity: 0;
  transition-duration: 1s;
}

.circle-big {
  position: relative;
  width: 300px;
  margin: 0px auto 0px auto;
}

.circle-big svg {
  width: 300px;
  height: 300px;
}

.circle-big .bg {
  fill: none;
  stroke-width: 24px;
  stroke: #1F2932;
}

.circle-big .progress {
  fill: none;
  stroke-width: 12px;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition-duration: 1s;
}

.circle-big .text {
  position: absolute;
  width: 100%;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  line-height: 22px;
}

</style>