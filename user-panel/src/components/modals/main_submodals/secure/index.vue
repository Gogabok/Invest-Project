<template>
  <div class="secure-main-modal">
    <div class="main-modal-wrapper">
      <v-nav @selecting="selecting"></v-nav>
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import vNav from "@/components/modals/main_submodals/secure/nav"
import twoFa from "@/components/modals/main_submodals/secure/twoFa"
export default {
  name: 'secure-main-modal',
  components: {
    vNav, twoFa
  },
  data: () => ({
    activeComponent: 'twoFa'
  }),
  methods: {
    selecting(payload) {
      this.activeComponent = payload.link
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-modal-wrapper {
    width: 80%;
    margin: 0px auto;
  }
</style>