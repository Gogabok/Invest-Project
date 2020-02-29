<template>
  <div class="secure-main-modal">
    <div class="main-modal-wrapper">
      <v-nav @selecting="selecting"></v-nav>
      <transition name="scaleY" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import vNav from "@/components/modals/main_submodals/secure/nav"
import twoFa from "@/components/modals/main_submodals/secure/twoFa"
import sessions from "@/components/modals/main_submodals/secure/sessions"
export default {
  name: 'secure-main-modal',
  components: {
    vNav, twoFa, sessions
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
  @media screen and (max-width: 630px) {
    .main-modal-wrapper {
      width: 100%;
    }
  }
</style>