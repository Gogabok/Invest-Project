<template>
  <div class="statistic">
    <div class="container">
      <sub-menu @activeItemToggle="activeItemToggle" :headers="subMenuHeaders"></sub-menu>
    </div>
    <component v-if="activeComponent" :is="activeComponent.systemName"></component>
  </div>
</template>

<script>
import subMenu from '@/components/shared-components/submenu'

import investProject from "@/components/statistic/investProject"
export default {
  name: 'Statistic',
  components: {
    subMenu, investProject
  },
  data: () => ({
    subMenuHeaders: [
      {
        title: 'Инвестпроект',
        systemName: 'investProject',
        active: true
      },
      {
        title: 'Экономическая игра',
        systemName: 'economic',
        active: false
      },
      {
        title: 'Хайп',
        systemName: 'hype',
        active: false
      },
      {
        title: '+',
        systemName: 'addProject',
        active: false
      },
    ]
  }),
  methods: {
    activeItemToggle (item) {
      this.subMenuHeaders.find(i => i.active).active = false
      this.subMenuHeaders.find(i => i.title === item.title).active = true
    }
  },
  computed: {
    activeComponent() {
      return this.subMenuHeaders.find(item => item.active)
    }
  }
}
</script>
