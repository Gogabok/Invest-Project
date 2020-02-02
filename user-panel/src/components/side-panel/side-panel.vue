<template>
  <div class="side-panel">
    <side-panel-nav></side-panel-nav>
  </div>
</template>

<script>

import sidePanelNav from "@/components/side-panel/side-panel-nav"

export default {
  name: 'side-panel',
  components: {
    sidePanelNav
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