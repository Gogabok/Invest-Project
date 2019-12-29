<template>
  <div class="dashboard-graph-module">
    <dashboard-graph></dashboard-graph>
  </div>
</template>

<script>
import dashboardGraph from '@/components/dashboard/dashboard-graph'

export default {
  name: 'dashboardM',
  components: {
    dashboardGraph
  }
}
</script>

<style lang="scss">
  .dashboard-graph-module {
    background: #24303C;
    margin: 20px 0px 0px 140px;
    position: relative;
    border-radius: 3px;
  }
</style>