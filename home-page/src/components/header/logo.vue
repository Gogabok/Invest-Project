<template>
  <div class="logo">
    <p class="logo-title">NEWLOGO</p>
    <p class="logo-desc">Startup from 01.01.2020</p>
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
  background-position: 0px 13px;
  position: relative;
}
.logo-title {
  font-size: 3.5em;
  font-family: "Exo 2", sans-serif;
  font-weight: bold;
  color: #fff;
}
.logo-desc {
  color: #fff;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  font-size: 20px;
  bottom: -20px;
  right: 40px;
  position: absolute;
}
* {
  user-select: none;
  pointer-events: none;
}
</style>