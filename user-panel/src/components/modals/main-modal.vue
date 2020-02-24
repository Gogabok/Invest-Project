<template>
  <div class="main-modal">
    <main-nav :activeNavItem="activeNavItem"></main-nav>
  </div>
</template>

<script>
import mainNav from "@/components/modals/main_submodals/main-navigation"
export default {
  name: "modal-main",
  // Все возможные модальные окна нужно регать через Import и объект Components
  components: {
    mainNav
  },
  props: ["modal"],
  data: () => ({
    activeNavItem: null
  }),
  created() {
    if(this.modal) {
      this.activeNavItem = this.modal.subModal
    }
  },
}
</script>

<style lang="scss" scoped>
  .main-modal {
    height: 100%;
    width: 100%;
  }
</style>