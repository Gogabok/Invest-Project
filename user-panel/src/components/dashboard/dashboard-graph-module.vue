<template>
  <div class="dashboard-graph-module">
    <div class="toolbar">
      <div class="maintoolbar">
        <transition-group name="fade" mode="out-in">
          <button 
          v-for="btn in mainToolbar"
          class="maintoolbar-item"
          :class="btn.isActive ? 'active' : ''"
          :key="btn.title"
          @click.prevent="moduleChanger(btn)"
          >
            {{ btn.title }}
          </button>
        </transition-group>
      </div>
      <transition-group tag="div" class="minitoolbar" name="fade-group">
        <button 
          v-for="btn in miniToolbar[currentActiveMiniToolbar]"
          :key="btn.title || btn.icon + currentActiveMiniToolbar"
          class="minitoolbar-item"
          :class="btn.isActive ? 'active' : ''"
          @click="miniToolbarHandler(btn, miniToolbar[currentActiveMiniToolbar])"
        >
          <div class="text" v-if="btn.title">{{ btn.title }}</div>
          <img class="text-img" :src="`./assets/common/${btn.icon}.svg`" v-else alt="">
        </button>
      </transition-group>
    </div>
    <transition name="scaleY" mode="out-in">
      <component :is="currentActiveModule" :minitoolbar="miniToolbar[currentActiveMiniToolbar]"></component>
    </transition>
  </div>
</template>

<script>
import dashboardGraph from '@/components/dashboard/dashboard-graph'
import dashboardDecisions from '@/components/dashboard/graph-module/dashboard-decisions'
import dashboardDeals from '@/components/dashboard/graph-module/dashboard-deals'

export default {
  name: 'dashboardM',
  components: {
    dashboardGraph, dashboardDecisions, dashboardDeals
  },
  data() {
    return {
      mainToolbar: [
        {
          title: 'Доходность',
          module: 'dashboardGraph',
          isActive: true
        },
        {
          title: 'Решения',
          module: 'dashboardDecisions',
          isActive: false
        },
        {
          title: 'Сделки',
          module: 'dashboardDeals',
          isActive: false
        }
      ],
      miniToolbar: {
        dashboardGraphMiniToolbar: [
          {
            title: 'M',
            isActive: true,
            component: 'graph-m'
          },
          {
            title: 'Y',
            isActive: false,
            component: 'graph-y'
          },
          {
            title: 'All',
            isActive: false,
            component: 'graph-all'
          }
        ],
        dashboardDecisionsMiniToolbar: [
          {
            title: 'B',
            isActive: true,
            component: 'decisions-b'
          },
          {
            title: 'T',
            isActive: false,
            component: 'decisions-t'
          },
          {
            title: 'All',
            isActive: false,
            component: 'decisions-all'
          }
        ],
        dashboardDealsMiniToolbar: [
          {
            icon: 'list-icon',
            isActive: true,
            component: 'deals-list'
          },
          {
            icon: 'calendar-icon',
            isActive: false,
            component: 'deals-calendar'
          },
        ],
      },
      currentActiveModule: 'dashboardGraph',
      currentActiveMiniToolbar: 'dashboardGraphMiniToolbar'
    }
  },
  methods: {
    moduleChanger(btn) {
      this.currentActiveModule = btn.module
      this.currentActiveMiniToolbar = btn.module + 'MiniToolbar'
      this.mainToolbar.forEach(button => {
        button.isActive = false
      })
      btn.isActive = true
    },
    miniToolbarHandler(item, minitoolbar) {
      minitoolbar.forEach(btn => {
        btn.isActive = false
      })
      item.isActive = true
    }
  }
}
</script>

<style lang="scss">
  .dashboard-graph-module {
    background: #24303C;
    margin: 20px 0px 0px 140px;
    position: relative;
    border-radius: 3px;
    padding: 20px 30px 10px 30px;
    transition-duration: .5s;
    & * {
      font-family: "Exo 2", sans-serif;
    }
  }
  .toolbar {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  .maintoolbar {
    display: flex;
    align-items: flex-start;
    &-item {
      color: #fff;
      font-size: 1.2em;
      padding: 10px 20px;
      margin: 0px 7px;
      border-radius: 3px;
      border: none;
      background: transparent;
      transition-duration: .3s;
      &.active {
        background: rgba(184, 189, 196, .1);
      }
    }
  }
  .minitoolbar {
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    &-item {
      width: 40px;
      height: 40px;
      padding: 15px;
      margin: 0px 7px;
      border-radius: 50%;
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: .3s;
      & .text {
        color: #fff;
        font-size: 1em;
        line-height: 0px;
        width: 20px;
        height: 20px;
        max-width: 20px;
        max-height: 0px;
      }
      & img {
        width: 20px;
        height: 20px;
        position: absolute;
        pointer-events: none;
      }
      &.active {
        background: rgba(184, 189, 196, .1);
      }
    }
  }
  @media screen and (max-width: 1530px) {
    .maintoolbar {
      &-item {
        font-size: 1em;
      }
    }
    .minitoolbar {
      &-item {
        & .text {
          font-size: .8em;
        }
        & img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .maintoolbar {
      &-item {
        font-size: .7em;
        padding: 5px;
        margin: 0px 2px;
      }
    }
    .minitoolbar {
      &-item {
        padding: 5px;
        width: 22px;
        height: 22px;
        margin: 0px 2px;
        & .text {
          font-size: .6em;
        }
        & img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
</style>