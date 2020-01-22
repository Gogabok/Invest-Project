<template>
  <div>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>          
import dealsList from '@/components/dashboard/graph-module/deals/dashboard-deals-list'
import dealsCalendar from '@/components/dashboard/graph-module/deals/dashboard-deals-calendar'
export default {
  name: "dashboard-deals",
  components: {
    dealsList, dealsCalendar
  },
  data: () => ({
    currentComponent: null,
  }),
  props: ["minitoolbar"],
  mounted: function () {
    this.$watch("minitoolbar", function () {
      this.minitoolbar.forEach(item => {
        if(item.isActive) {
          this.currentComponent = item.component
        }
      })
    }, {deep:true})
  }
}
</script>