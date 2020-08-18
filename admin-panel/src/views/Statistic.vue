<template>
  <div class="statistic">
    <div class="container">
      <sub-menu @activeItemToggle="activeItemToggle" :headers="subMenuHeaders"></sub-menu>
    </div>
  </div>
</template>

<script>
import subMenu from '@/components/shared-components/submenu'

export default {
  name: 'Statistic',
  components: {
    subMenu
  },
  data: () => ({
    subMenuHeaders: [
      {
        title: 'Инвестпроект',
        active: true
      },
      {
        title: 'Экономическая игра',
        active: false
      },
      {
        title: 'Хайп',
        active: false
      },
      {
        title: '+',
        active: false
      },
    ]
  }),
  methods: {
    activeItemToggle (item) {
      this.subMenuHeaders.find(i => i.active).active = false
      this.subMenuHeaders.find(i => i.title === item.title).active = true
    }
  }
}
</script>
