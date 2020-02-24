<template>
  <div id="app">
    <!-- <div class="main-app-container"> -->
      <router-view/>
    <!-- </div> -->
    <div class="modal-folder" v-if="this.$store.state.modalStore.modals.length > 0">
      <modal></modal>
    </div>
  </div>
</template>

<script>
import modal from "@/components/modals/modal"
export default {
  name: 'App',
  components: {
    modal
  }
};
</script>


<style lang="scss">
html {
  // overflow-y: scroll;
}
#app {
  // height: 100%;
  background: #20272B;
  & * {
    box-sizing: border-box;
    font-family: "Exo 2", sans-serif;
  }
}
.main-app-container {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  // position: relative;
  background: #20272B;
  // background-image: url("/assets/common/main-bg.svg");
  // background-position: calc(50% - 76px) -500px;
  // background-size: 2500px;
  // background-repeat: no-repeat;
  // overflow: hidden;
}
</style>
