<template>
  <div class="dashboard-card">
    <p class="dashboard-card-title"><slot></slot></p>
    <div class="v-dashboard-card-extraDots" @click="openMiniModal">
      <span class="v-dashboard-card-extraDots-item"></span>
      <span class="v-dashboard-card-extraDots-item"></span>
    </div>
    <div class="balance">
      ${{ balance }}
    </div>
    <div class="extraInfo">
      {{ extraInfo }}
    </div>
    <transition name="scaleY" mode="out-in">
      <div class="card-modal" v-show="miniModals[modal].isActive">
        <div class="list">
          <p @click="openModal(item)" class="item" v-for="item in miniModals[modal].list" :key="item.link + modal + item.sublink || Math.random()">
            {{ item.title }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dashboard-card',
  props: [
    'balance', 'extraInfo', 'modal'
  ],
  data: () => ({
    miniModals: {
      invest: {
        isActive: false,
        list: [
          {
            title: 'Внести депозит',
            link: 'ManagementTrust'
          },
          {
            title: 'Вывести деньги',
            link: 'mainMethodsOutput'
          }
        ]
      },
      dividend: {
        isActive: false,
        list: [
          {
            title: 'Автовывод',
            link: 'autoMethodsOutput'
          }
        ]
      },
      parther: {
        isActive: false,
        list: [
          {
            title: 'Реферальная ссылка',
            link: 'extraInfo',
            sublink: 'refferals'
          },
          {
            title: 'Промоматериалы',
            link: 'extraInfo',
            sublink: 'promo'
          }
        ]
      }
    }
  }),
  methods: {
    openMiniModal () {
      this.miniModals[this.modal].isActive = !this.miniModals[this.modal].isActive
    },
    openModal (payload) {
      this.miniModals[this.modal].isActive = false
      this.$store.dispatch("modalStore/ADD_MODAL", payload)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-card {
    padding: 20px 0px;
    background: #24303C;
    border-radius: 3px;
    position: relative;
    width: 100%;
    max-width: calc((100% / 3) - 15px);
    min-height: 120px;
    & .extraInfo {
      color: #6B894F;
      font-weight: 400;
      font-size: 1.2em;
      padding: 0px 30px;
    }
    & .balance {
      background: rgba(133, 170, 83, .1);
      color: #fff;
      font-size: 1.7em;
      font-weight: 400;
      // max-width: 40%;
      display: inline-block;
      padding: 8px 30px;
      margin: 12px 0px;
    }
    & .dashboard-card-title {
      color: #fff;
      font-size: 1.4em;
      font-weight: 400;
      padding: 0px 30px;
      text-transform: uppercase;
    }
    & .v-dashboard-card-extraDots {
      position: absolute;
      top: 8px;
      right: 0px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      & .v-dashboard-card-extraDots-item {
        display: block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        margin: 4px auto;
        background: rgba(184, 189, 196, 0.5);
      }
    }
  }
  .card-modal {
    position: absolute;
    top: 40px;
    right: -30px;
    background: #2E3C3E;
    z-index: 999;
    border-radius: 3px;
    & .list {
      & .item {
        padding: 8px 15px;
        color: #fff;
        font-size: 1.1em;
        cursor: pointer;
        user-select: none;
        width: 100%;
        transition-duration: .3s;
        &:hover {
          background: #379A1D;
        }
      }
    }
  }
  @media screen and (max-width: 1530px) {
    .dashboard-card {
      padding: 10px 0px;
      max-width: calc((100% / 3) - 5px);
      & .extraInfo {
        font-size: .9em;
        padding: 0px 15px;
      }
      & .balance {
        font-size: 1.3em;
        max-width: 60%;
        padding: 8px 15px;
        margin: 12px 0px;
      }
      & .dashboard-card-title {
        font-size: 1em;
        padding: 0px 15px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .card-modal {
      right: 0px;
      top: 41px;
    }
  }
  @media screen and (max-width: 650px) {
    .dashboard-card {
      width: 100%;
      max-width: 100%;
      margin: 7px 0px;
      & .balance {
        max-width: none;
        width: auto;
        display: inline-block;
        padding-right: 120px;
      }
    }
  }
</style>