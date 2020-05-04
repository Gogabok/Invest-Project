<template>
  <div class="side-panel" ref="sidePanel">
    <side-panel-nav
      
      ref="sidePanelNav"
      @selecting="modulesSelecting"
    ></side-panel-nav>
    <transition name="fade-faster" mode="out-in">
      <component ref="sidePanelModule" class="side-panel-height" :is="currentModule"></component>
    </transition>
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
    currentModule: null,
    height: {
      sidePanel: null,
      nav: null,
      module: null
    }
  }),
  methods: {
    modulesSelecting (item) {
      this.currentModule = null
      let newComponent = item.component ? `side-panel-module-${item.component}` : null
      this.currentModule = newComponent
    }
  },
  // updated() {
  //   if(this.$refs.sidePanelNav.$refs && document.body.clientWidth > 1250) {
  //     this.height.sidePanel = this.$refs.sidePanel.clientHeight
  //     this.height.nav = this.$refs.sidePanelNav.$refs.sidePanelNav.clientHeight
  //     this.height.module = this.$refs.sidePanel.clientHeight - this.height.nav
  //     console.log(this.$refs.sidePanelNav.$refs.sidePanelNav.clientHeight, this.$refs.sidePanelModule.$refs.sidePanelModule.clientHeight, this.$refs.sidePanel.clientHeight)
  //   }
  // },
}
</script>

<style lang="scss">
  .side-panel {
    min-height: 100vh;
    background: #24303C;
    height: 100%;
    // max-width: 991px !important;
    width: 100%;
  }
  .side-panel * {
    font-family: "Exo 2", sans-serif;
    box-sizing: content-box !important;
  }
  @media screen and (max-width: 1250px) {
    .side-panel {
      height: auto;
    }
  }
</style>