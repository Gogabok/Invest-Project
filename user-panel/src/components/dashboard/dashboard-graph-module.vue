<template>
  <div class="dashboard-graph-module">
    <div class="toolbar">
      <div class="maintoolbar">
        <button 
         v-for="btn in mainToolbar"
         class="maintoolbar-item"
         :class="btn.isActive ? 'active' : ''"
         :key="btn.title"
         @click.prevent="moduleChanger(btn)"
         >
          {{ btn.title }}
        </button>
      </div>
      <div class="minitoolbar">
        <button 
          v-for="btn in miniToolbar[currentActiveMiniToolbar]"
          :key="btn.title + currentActiveMiniToolbar"
          class="minitoolbar-item"
          :class="btn.isActive ? 'active' : ''"
        >
          <div class="text">{{ btn.title }}</div>
        </button>
      </div>
    </div>
    <!-- <dashboard-graph></dashboard-graph> -->
    <component :is="currentActiveModule"></component>
  </div>
</template>

<script>
import dashboardGraph from '@/components/dashboard/dashboard-graph'

export default {
  name: 'dashboardM',
  components: {
    dashboardGraph
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
          module: 'decisions',
          isActive: false
        },
        {
          title: 'Сделки',
          module: '',
          isActive: false
        }
      ],
      miniToolbar: {
        dashboardGraphMiniToolbar: [
          {
            title: 'M',
            isActive: true
          },
          {
            title: 'Y',
            isActive: false
          },
          {
            title: 'All',
            isActive: false
          }
        ],
        decisionsMiniToolbar: [
          {
            title: 'B',
            isActive: true
          },
          {
            title: 'T',
            isActive: false
          },
          {
            title: 'All',
            isActive: false
          }
        ]
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
    padding: 20px 30px 20px 30px;
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
      & .text {
        color: #fff;
        font-size: 1em;
        line-height: 0px;
        width: 20px;
        height: 20px;
        max-width: 20px;
        max-height: 0px;
      }
      &.active {
        background: rgba(184, 189, 196, .1);
      }
    }
  }
</style>