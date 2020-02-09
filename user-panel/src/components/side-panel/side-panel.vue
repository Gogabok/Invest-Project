<template>
  <div class="side-panel" ref="sidePanel">
    <side-panel-nav
      ref="sidePanelNav"
      @selecting="modulesSelecting"
    ></side-panel-nav>
    <component ref="sidePanelModule" :is="currentModule"></component>
  </div>
</template>

<script>

import sidePanelNav from "@/components/side-panel/side-panel-nav"
import sidePanelModuleTargets from "@/components/side-panel/modules/side-panel-targets"
import sidePanelModuleActivity from "@/components/side-panel/modules/side-panel-activity"
export default {
  name: 'side-panel',
  components: {
    sidePanelNav, sidePanelModuleTargets, sidePanelModuleActivity
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
  },
  mounted () {
    setInterval(() => {
      console.log(this.$refs.sidePanelNav.$refs.sidePanelNav.clientHeight, this.$refs.sidePanelModule.$refs.sidePanelModule.clientHeight, this.$refs.sidePanel.clientHeight)
    }, 500);
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