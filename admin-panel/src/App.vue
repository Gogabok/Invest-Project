<template>
  <div id="app" class="bg-color">
    <vue-nav></vue-nav>
    <router-view/>
  </div>
</template>

<script>
import vueNav from "@/components/shared-components/vue-nav"
export default {
  name: 'App',
  components: {
    vueNav
  },
  data: () => ({

  })
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.fullPage {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
