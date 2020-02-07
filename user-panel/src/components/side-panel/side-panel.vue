<template>
  <div class="side-panel">
    <side-panel-nav
      @selecting="modulesSelecting"
    ></side-panel-nav>
    <component :is="currentModule"></component>
  </div>
</template>

<script>

import sidePanelNav from "@/components/side-panel/side-panel-nav"
import sidePanelModuleTargets from "@/components/side-panel/modules/side-panel-targets"
export default {
  name: 'side-panel',
  components: {
    sidePanelNav, sidePanelModuleTargets
  },
  data: () => ({
    currentModule: null
  }),
  methods: {
    modulesSelecting (item) {
      this.currentModule = null
      let newComponent = item.component ? `side-panel-module-${item.component}` : null
      this.currentModule = newComponent
    }
  }
}
</script>

<style lang="scss">
  .side-panel {
    height: 100vh;
    background: #24303C;
  }
  .side-panel * {
    font-family: "Exo 2", sans-serif;
  }
</style>