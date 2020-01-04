<template>
  <div class="dashboard-graph-module">
    <div class="toolbar">
      <div class="maintoolbar">
        <button class="maintoolbar-item active">Доходность</button>
        <button class="maintoolbar-item">Решения</button>
        <button class="maintoolbar-item">Сделки</button>
      </div>
      <div class="minitoolbar">
        <button class="minitoolbar-item active"><div class="text">M</div></button>
        <button class="minitoolbar-item"><div class="text">Y</div></button>
        <button class="minitoolbar-item"><div class="text">All</div></button>
      </div>
    </div>
    <dashboard-graph></dashboard-graph>
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
          title: 'Доходность'
        },
        {
          title: 'Решения'
        },
        {
          title: 'Сделки'
        }
      ],
      miniToolbar: [
        {
          title: 'M'
        },
        {
          title: 'Y'
        },
        {
          title: 'All'
        },
      ]
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