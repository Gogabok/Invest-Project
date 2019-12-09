<template>
  <div class="logo">
    <p class="logo-title">NEWLOGO</p>
  </div>
</template>

<script>
export default {
  name: "logo"
}
</script>

<style lang="scss" scoped>
.logo {
  padding: 5px 0px 15px 87px;
  background: url("../../assets/header/logo.png") no-repeat;
  background-position: 0px 20px;
}
.logo-title {
  font-size: 62px;
  font-family: "Exo 2", sans-serif;
  font-weight: bold;
  color: #fff;
}
* {
  user-select: none;
  pointer-events: none;
}
</style>