<template>
  <div class="dashboard">
    <div class="dashboard-user-area">
      <v-nav class="v-nav"></v-nav>
      <dashboard-cards class="common-dashboard-padding"></dashboard-cards>
      <dashboard-graph-module></dashboard-graph-module>
    </div>
  </div>
</template>

<script>
import VNav from '@/components/header/index';
import dashboardCards from '@/components/dashboard/dashboard-cards'
import dashboardGraphModule from '@/components/dashboard/dashboard-graph-module'

export default {
  name: 'dashboard',
  components: {
    VNav, dashboardCards, dashboardGraphModule
  },
};
</script>

<style lang="scss">
.dashboard-user-area {
  width: 65%;
  & .v-nav {
    padding-left: 50px !important;
  }
  & .common-dashboard-padding {
    padding-left: 140px;
  }
}
</style>
