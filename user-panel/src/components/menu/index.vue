<template>
  <div class="menu-app">
    <div v-if="!componentDetails">
      <div class="filters">
        <div class="item item-1">
          <div class="main">
            <p class="amount">0</p>
            <p class="percent">0%</p>
          </div>
          <p class="item-desc">Мой портфель</p>
        </div>
        <div :class="filter === 'ourChoice' ? 'activated' : ''" @click="filtering('ourChoice')" class="item item-2">
          <div class="main">
          </div>
          <p class="item-desc">Наш выбор</p>
        </div>
        <div :class="filter === 'checked' ? 'activated' : ''" @click="filtering('checked')" class="item item-3">
          <div class="main">
          </div>
          <p class="item-desc">Проверенные</p>
        </div>
        <div :class="filter === 'testing' ? 'activated' : ''" @click="filtering('testing')" class="item item-4">
          <div class="main">
          </div>
          <p class="item-desc">Тестируются</p>
        </div>
        <div :class="filter === 'exploring' ? 'activated' : ''" @click="filtering('exploring')" class="item item-5">
          <div class="main">
          </div>
          <p class="item-desc">Исследуются</p>
        </div>
        <div :class="filter === 'deleted' ? 'activated' : ''" @click="filtering('deleted')" class="item item-6">
          <div class="main">
          </div>
          <img ondragstart="return false" src="../../assets/menu/close-btn.svg" alt="">
        </div>
      </div>
      <div class="menu-folder">
        <div class="menu-folder-caption">
          <p class="title">Мой портфель</p>
          <p class="filter-title">Фильтр <img ondragstart="return false" src="../../assets/menu/arrow-down.svg" alt=""></p>
        </div>
        <transition-group name="fade-group-faster" mode="out-in">
          <div @click="routeToDetails(item)" class="menu-folder-item" v-for="(item, idx) in items" :key="item.title + idx + Math.random()">
            <div class="logo" :style="`background: ${colorOfLogoStatus(item)}`"></div>
            <div class="menu-folder-item-wrapper">
              <div class="item-main-info">
                <p class="item-main-info-title">{{ item.title }}</p>
                <p class="item-main-info-desc"><img src="../../assets/menu/item-icon.svg" alt=""> {{ item.type }}</p>
              </div>
              <div class="item-main-info-2">
                <p class="item-main-info-2-title">Доходность <span>~{{ item.income }}</span></p>
                <p class="item-main-info-2-desc" v-if="item.dateOfConnection">Подключен {{ item.dateOfConnection }}</p>
                <p class="item-main-info-2-desc" v-else>Не подключен</p>
              </div>
              <div class="item-main-info-2">
                <p class="item-main-info-2-title">Инвесторов: <span>{{ item.investors }}</span></p>
                <p class="item-main-info-2-desc">Независимое управление 
                  <img v-if="item.isUnConrolManagment" src="../../assets/menu/ok.svg" alt="">
                  <img v-else src="../../assets/menu/false.svg" alt="">
                </p>
              </div>
              <div class="item-main-info-3">
                <p class="item-main-info-3-title">Оценка риска</p>
                <div class="progress">
                  <span
                    :style="`width:${20 * item.risksProgress}%; border-color: ${colorRisksProgressBar(item)}`"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div v-else>
      <div class="bot-caption">
        <div class="bot-caption-title">
          <img @click="componentDetails = null" ondragstart="return false" src="../../assets/common/arrow-left.svg" alt="">
          <div class="title">
            <p class="title">{{ componentDetails.title }}</p>
            <p class="subtitle">{{ componentDetails.type }}</p>
          </div>
        </div>
        <div class="item activated bot-caption-status">
          <div key="bot-caption-status" :style="`background:${colorOfLogoStatus(componentDetails)}`" class="main"></div>
          <div class="item-desc">{{ statusTranslate(componentDetails) }}</div>
        </div>
        <div class="bot-caption-btns">
          <button class="bot-caption-btns-item bot-caption-btns-bordered">Независимое управление</button>
          <button class="bot-caption-btns-item bot-caption-btns-filled">Подключить</button>
        </div>
      </div>
      <div class="main-wrapper">
        <div class="main-wrapper-list">
          <p class="main-wrapper-list-title">Показатели доверия</p>
          <ul class="main-wrapper-list-ul">
            <div v-for="indicator in componentDetails.indicators" :key="indicator.text" class="main-wrapper-list-ul-item">
              <img ondragstart="return false" :src="require(`../../assets/common/menu-bot-${indicator.isOk ? 'ok' : 'close'}.svg`)" alt="">
              <p class="main-wrapper-list-ul-item-text">{{ indicator.text }}</p>
            </div>
          </ul>
        </div>
        <div class="main-wrapper-desc">
          <p class="main-wrapper-desc-subtitle">Этот проект был создан специально для любителей пирамид и сетевого маркетинга с целью которая строго 
          засекречена. Этот проект был создан специально для любителей пирамид и сетевого маркетинга с целью 
          которая строго засекречена.</p>
          <div class="preview">
            <img ondragstart="return false" src="../../assets/common/preview.png" alt="">
          </div>
        </div>
      </div>
      <div class="main-wrapper-list-blocks">
        <div class="left-side">
          <div class="left-side-block">
            <p class="left-side-block-title">Инвесторы</p>
            <p class="left-side-block-investors">{{ componentDetails.investors }}</p>
          </div>
          <div v-if="componentDetails.dateOfConnection" class="left-side-block">
            <p class="left-side-block-title">Подключен</p>
            <p class="left-side-block-connected">{{ componentDetails.dateOfConnection }}</p>
          </div>
          <div class="left-side-block href">
            <p class="left-side-block-title">Сайт</p>
            <a :href="componentDetails.site" target="_blank" class="left-side-block-href">{{ componentDetails.site }}</a>
          </div>
        </div>
        <div ref="blocksGraph" class="main-wrapper-list-blocks-graph">
          <span>СКОРО...</span>
        </div>
        <div class="main-wrapper-list-blocks-graphes">
          <div class="main-wrapper-list-blocks-graphes-1">
            <div :style="`height: ${progressBarHeight}px`" class="main-wrapper-list-blocks-graphes-1-line">
              <span :style="`height: calc(${20 * componentDetails.risksProgress}% - 4px); background: ${colorRisksProgressBar(componentDetails)}`" class="main-wrapper-list-blocks-graphes-1-line-progress"></span>
            </div>
            <span class="main-wrapper-list-blocks-graphes-1-label l-1"><span :style="`background: ${colorRisksProgressBar(componentDetails)}`"></span>Оценка риска</span>
            <span class="main-wrapper-list-blocks-graphes-1-label l-2">Очень низкий</span>
            <span class="main-wrapper-list-blocks-graphes-1-label l-3">Низкий</span>
            <span class="main-wrapper-list-blocks-graphes-1-label l-4">Умеренный</span>
            <span class="main-wrapper-list-blocks-graphes-1-label l-5">Высокий</span>
            <span class="main-wrapper-list-blocks-graphes-1-label l-6">Очень высокий</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuBotsDATA from "@/server/menu-bots.json"
export default {
  name: 'menu-main',
  data: () => ({
    items: null,
    allData: null,
    filter: null,
    componentDetails: null,
    progressBarHeight: null
  }),
  created() {
    this.allData = menuBotsDATA
    this.items = this.allData
    this.filtering('ourChoice')
  },
  mounted() {
    if(this.$refs.blocksGraph) {
      this.progressBarHeight = this.$refs.blocksGraph.clientHeight
    }
  },
  destroyed() {
    this.componentDetails = null
  },
  methods: {
    colorRisksProgressBar (item) {
      let color = ''
      if(item.risksProgress === 1) {
        color = '#75C561'
      } else if(item.risksProgress === 2) {
        color = '#B7C561'
      } else if(item.risksProgress === 3) {
        color = '#C5A761'
      } else if(item.risksProgress === 4) {
        color = '#C56161'
      } else if(item.risksProgress === 5) {
        color = '#E33434'
      }
      return color
    },
    colorOfLogoStatus (item) {
      let color = ''
      if(item.status === 'ourChoice') {
        color = '#75C561'
      } else if(item.status === 'checked') {
        color = '#619DC5'
      } else if(item.status === 'testing') {
        color = '#B7C561'
      } else if(item.status === 'exploring') {
        color = '#C5A761'
      } else if(item.status === 'deleted') {
        color = '#C56161'
      }
      return color
    },
    statusTranslate(item) {
      let w = ''
      if(item.status === 'ourChoice') {
        w = 'Наш выбор'
      } else if(item.status === 'checked') {
        w = 'Проверенные'
      } else if(item.status === 'testing') {
        w = 'Тестируются'
      } else if(item.status === 'exploring') {
        w = 'Исследуются'
      } else if(item.status === 'deleted') {
        w = 'Удаленные'
      }
      return w
    },
    filtering(data_filter) {
      this.filter = data_filter
      if(data_filter) {
        this.items = this.allData.filter(i => i.status === data_filter)
      } else {
        this.items = this.allData
      }
    },
    routeToDetails(item) {
      this.componentDetails = item
    }
  }
}
</script>

<style lang="scss">
  .menu {
    padding: 0px 110px 0px 90px;
  }
  .menu-app {
    max-width: 1600px;
    margin: 0px auto;
  }
  .filters {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .menu-app {
    & .item {
    width: 200px;
    user-select: none;
    margin: 30px 0px 0px 0px;
    cursor: pointer;
    transition: margin .3s, height .3s;
    &.activated {
      margin-top: 0px;
      & .main {
        height: 85px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
      }
    }
    &:hover  .main {
      height: 85px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    &:hover {
      margin-top: 0px;
    }
    & .main {
      height:55px;
      display: flex;
      justify-content: space-between;
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      padding: 0px 15px 0px 20px;
      line-height: 2rem;
      color: #808791;
      border-radius: 8px;
      transition-duration: .3s;
      & .amount {
        font-weight: 700;
      }
    }
    & .item-desc {
      text-align: center;
      font-size: 1.2rem;
      margin: 5px 0px;
    }
    &-1 {
      transition-duration: 0s;
      & .main {
        border-radius: 80px;
        box-shadow: 0px 0px 12px 0px #9EA8B0;
        background: #FFFFFF;
      }
      &:hover {
        margin-top: 30px;
      }
      &:hover .main {
        border-radius: 80px;
        height: 55px;
      }
    }
    &-2 {
      & .main {
        background: #75C561;
      }
    }
    &-3 {
      & .main {
        background: #619DC5;
      }
    }
    &-4 {
      & .main {
        background: #B7C561;
      }
    }
    &-5 {
      & .main {
        background: #C5A761;
      }
    }
    &-6 {
      width: 60px;
      text-align: center;
      & .main {
        background: #C56161;
      }
      & img {
        margin: 6.5px auto;
        width: 20px;
      }
    }
  }
  }

  .menu-folder {
    margin-top: 50px;
    & .menu-folder-caption {
      display: flex;
      justify-content: space-between;
      user-select: none;
      border-bottom: 2px solid #808791;
      padding: 0px 0px 15px 0px;
      & .title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #808791;
      }
      & .filter-title {
        font-size: 1.2rem;
        font-weight: 300;
        color: #808791;
        & img {
          margin-left: 5px;
        }
      }
    }
    & .menu-folder-item {
      display: flex;
      align-items: center;
      padding: 20px 0px;
      user-select: none;
      border-bottom: 1px solid #E8ECEE;
      cursor: pointer;
      &-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      & .logo {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        margin-right: 20px;
      }
      & .item-main-info {
        width: 100%;
        max-width: 300px;
        &-title {
          font-size: 1.3rem;
          margin: 3px 0px;
          text-decoration: underline;
        }
        &-desc {
          font-size: 1.1rem;
          color: #808791;
          margin: 3px 0px;
          & img {
            margin-right: 5px;
            width: 18px;
            margin-bottom: 2px;
          }
        }
      }
      & .item-main-info-2 {
        width: 100%;
        max-width: 300px;
        &-title {
          font-size: 1.3rem;
          margin: 3px 0px;
          color: #808791;
          & span {
            color: #1F2932;
          }
        }
        &-desc {
          font-size: 1.1rem;
          color: #808791;
          margin: 3px 0px;
          & img {
            margin-left: 5px;
            width: 17px;
            margin-bottom: 4px;
          }
        }
      }
      & .item-main-info-3 {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-title {
          font-size: 1.3rem;
          margin: 3px 0px;
          color: #808791;
        }
        & .progress {
          width: 100%;
          border: 2px solid #ADB0B7;
          border-radius: 21px;
          padding: 2px;
          margin: 0px 0px 5px 0px;
          & span {
            display: block;
            width: 20%;
            border-width: 2px;
            border-style: solid;
            border-color: transparent;
            border-radius: 21px;
          }
        }
      }
    }
  }

  .bot-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    position: relative;
    &-title {
      display: flex;
      align-items: flex-start;
      margin: 20px 0px;
      & img {
        margin: 12px 20px 0px 0px;
        cursor: pointer;
      }
      & .title {
        & .title {
          font-family: 'Exo 2';
          font-weight: bold;
          font-size: 2.5rem;
          color: #3B4757;
        }
        & .subtitle {
          font-family: 'N-ui';
        }
      }
    }
    &-status {
      width: 200px;
      user-select: none;
      margin: 30px 0px 0px 0px;
      cursor: pointer;
      transition: height .3s;
      position: absolute;
      left: 50%;
      top: 0px;
      transform: translate(-50%, 0);
      &.activated {
        margin-top: 0px;
        & .main {
          height: 85px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
      }
      &:hover  .main {
        height: 85px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
      }
      &:hover {
        margin-top: 0px;
      }
      & .main {
        height:55px;
        display: flex;
        justify-content: space-between;
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        padding: 0px 15px 0px 20px;
        line-height: 2rem;
        color: #808791;
        border-radius: 8px;
        transition-duration: .3s;
        & .amount {
          font-weight: 700;
        }
      }
      & .item-desc {
        text-align: center;
        font-size: 1.2rem;
        margin: 5px 0px;
      }
    }
    &-btns {
      display: flex;
      align-items: flex-start;
      margin-left: auto;
      margin: 0px -14px;
      &-item {
        padding: 10px 15px;
        border: 1px solid #14AAF5;
        font-family: 'N-ui';
        font-size: 1.2rem;
        border-radius: 8px;
        margin: 0px 8px;
        transition-duration: .2s;
      }
      &-bordered {
        color: #14AAF5;
        background: transparent;
        &:hover {
          color: #fff;
          background: #14AAF5;
        }
      }
      &-filled {
        color: #fff;
        background: #14AAF5;
        &:hover {
          color: #14AAF5;
          background: transparent;
        }
      }
    }
  }
  .main-wrapper {
    margin-top: 40px;
    user-select: none;
    display: flex;
    &-desc {
      max-width: calc((100% / 12) * 9);
      width: 100%;
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      &-subtitle {
        max-width: 900px;
      }
      & .preview {
        width: 100%;
        margin-top: 20px;
        & img {
          width: 100%;
        }
      }
    }
    &-list {
      margin-right: 40px;
      max-width: calc(((100% / 12) * 3) - 40px);
      width: 100%;
      &-title {
        font-family: 'N-ui';
        font-weight: 600;
        color: #6F7782;
        font-size: 1.3rem;
      }
      &-ul {
        margin: 20px 0px 0px 10px;
        display: flex;
        flex-direction: column;
        &-item {
          display: flex;
          align-items: center;
          margin: 7.5px 0px;
          & img {
            margin-right: 15px;
          }
          &-text {
            font-family: 'N-ui';
            color: #6F7782;
            font-size: 1.2rem;
            margin: 0px;
          }
        }
      }
    }
  }
  .main-wrapper-list-blocks {
    margin-top: 30px;
    padding-bottom: 30px;
    display: flex;
    & .left-side {
      max-width: calc(((100% / 12) * 3) - 40px);
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: -7.5px 40px -7.5px 0px;
      &-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 2px solid #E2E7EE;
        padding: 12px 10px;
        margin: 7.5px 0px;
        height: 110px;
        &-href {
          color: #0084FF;
          text-decoration: underline;
          font-size: 1.25rem;
          line-height: 2.5rem;
          outline: none;
          &:visited {
            color: #0084FF;
            outline: none;
          }
          &:link {
            color: #0084FF;
            outline: none;
          }
          &:-webkit-any-link {
            color: #0084FF;
            outline: none;
          }
        }
        &-title {
          color: #3B4757;
          font-family: 'N-ui';
          font-size: 1.4rem;
        }
        &-investors {
          color: #0084FF;
          font-family: 'Exo 2';
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
        &-connected {
          color: #0084FF;
          font-family: 'Exo 2';
          font-size: 1.8rem;
          line-height: 2.5rem;
        }
      }
    }
    &-graph {
      max-width: calc(((100% / 12) * 8) - 40px);
      width: 100%;
      border-radius: 4px;
      border: 2px solid #E2E7EE;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      & span {
        font-size: 2rem;
        font-family: 'Exo 2';
        font-weight: 300;
        color: #0084FF;
        user-select: none;
      }
    }
    &-graphes {
      display: flex;
      flex-direction: column;
      &-1 {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        width: 190px;
        &-label {
          padding-left: 40px;
          padding-right: 15px;
          position: absolute;
          left: -5px;
          white-space: nowrap;
          background: #F3F3F2;
          border-radius: 20px;
          height: 30px;
          display: flex;
          align-items: center;
          user-select: none;

          font-family: 'N-ui';
          font-size: 1.1rem;

          &.l-1 {
            // bottom: 0px;
            top: 100%;
            font-family: 'N-ui';
            font-weight: bold;
            top: calc(100% - 25px);
            & span {
              position: absolute;
              left: 6px;
              top: 50%;
              transform: translate(0, -50%);
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #000;
            }
          }
          &.l-2 {
            top: calc(80% - 20px);
          }
          &.l-3 {
            top: calc(60% - 15px);
          }
          &.l-4 {
            top: calc(40% - 10px);
          }
          &.l-5 {
            top: calc(20% - 5px);
          }
          &.l-6 {
            top: 0%;
          }
        }
        &-line {
          flex: 1;
          width: 20px;
          border: 2px solid #ADB0B7;
          border-radius: 21px;
          overflow-y: hidden;
          position: relative;
          &-progress {
            position: absolute;
            width: 12px;
            border-radius: 21px;
            bottom: 2px;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
    }
  }
</style>
