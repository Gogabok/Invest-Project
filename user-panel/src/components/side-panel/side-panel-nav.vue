<template>
  <div class="side-panel-nav" ref="sidePanelNav">
    <div class="nav-item"
         v-for="item in nav"
         :key="item.title"
         :class="item.isActive ? 'active' : ''"
         @click="selectingNav(item)"
        >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-panel-nav',
  data: () => ({
    nav: [
      {
        title: 'Мои цели',
        component: 'targets',
        isActive: true
      },
      {
        title: 'Активность',
        component: 'activity',
        isActive: false
      },
    ]
  }),
  methods: {
    selectingNav (item) {
      this.nav.forEach(navItem => {
        navItem.isActive = false
      })
      item.isActive = true
      this.$emit("selecting", item)
    }
  },
  created() {
    let currentModule = this.nav.find(item => item.isActive)
    this.$emit("selecting", currentModule)
  },
}
</script>

<style lang="scss">
  .side-panel-nav {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #379A1D;
    &  .nav-item {
      width: 50%;
      padding: 35px 10px;
      font-size: 1.3em;
      color: #fff;
      text-align: center;
      user-select: none;
      cursor: pointer;
      border-bottom: 5px solid transparent;
      &.active {
        border-bottom: 5px solid #379A1D;
      }
    }
  }
  @media screen and (max-width: 1530px) {
    .side-panel-nav {
      &  .nav-item {
        padding: 20px 10px;
        font-size: 1.1em;
        transition-duration: .5s;
      }
    }
  }
</style>