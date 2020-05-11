<template>
  <div class="menu-app">
    <div v-if="!componentDetails">
      <div class="filters">
        <div @click="filtering()" class="item item-1">
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
        <div class="bot-status">
          
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
    componentDetails: null
  }),
  created() {
    this.allData = menuBotsDATA
    this.items = this.allData
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
    padding: 0px 90px 0px 10px;
  }
  .menu-app {
    max-width: 1600px;
    margin: 0px auto;
  }
  .filters {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    & .item {
      width: 200px;
      user-select: none;
      margin: 30px 0px 0px 0px;
      cursor: pointer;
      transition-duration: .3s;
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
        & .main {
          border-radius: 80px;
          // border: 1px solid #9EA8B0;
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
    align-items: flex-start;
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
  }
</style>
