<template>
  <div class="app-main-modal">
    <div class="main-modal-wrapper">
      <v-nav @selecting="selecting"></v-nav>
      <transition name="scaleY" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import vNav from "@/components/modals/main_submodals/app/nav"
import VLink from "@/components/modals/main_submodals/app/link"
import qr from "@/components/modals/main_submodals/app/qr"
export default {
  name: 'app-main-modal',
  components: {
    vNav, VLink, qr
  },
  data: () => ({
    activeComponent: 'VLink'
  }),
  methods: {
    selecting (payload) {
      this.activeComponent = payload.link
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>