<template>
  <div class="dashboard">
    <div class="dashboard-user-area">
      <v-nav class="v-nav"></v-nav>
      <dashboard-cards class="dashboard-cards"></dashboard-cards>
    </div>
  </div>
</template>

<script>
import VNav from '@/components/header/index';
import dashboardCards from '@/components/dashboard/dashboard-cards'
export default {
  name: 'dashboard',
  components: {
    VNav, dashboardCards
  },
};
</script>

<style lang="scss">
.dashboard-user-area {
  width: 65%;
  & .v-nav {
    padding-left: 50px !important;
  }
  & .dashboard-cards {
    padding-left: 140px;
  }
}
</style>
