<template>
  <div id="app">
    <div class="main-app-container">
      <main-header/>
      <div class="view-app-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from "@/components/header/header"

export default {
  name: "App",
  components: {
    mainHeader
  }
}
</script>

<style lang="scss">
.main-app-container {
  height: 100vh;
  width: 100%;
  position: relative;
  background: #20272B;
  background-image: url("assets/common/main-bg.svg");
  background-position: calc(50% - 52px) -200px;
  background-size: 2000px;
  background-repeat: no-repeat;
}
</style>
