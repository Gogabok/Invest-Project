<template>
  <div id="app">
    <!-- <div class="main-app-container"> -->
      <router-view/>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style lang="scss">
#app {
  // height: 100%;
  background: #20272B;
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
