<template>
  <div class="logo">
    <p class="logo-title">NEWLOGO</p>
  </div>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="scss" scoped>
.logo {
  padding: 5px 0px 15px 87px;
  background: url("../../assets/header/logo.png") no-repeat;
  background-position: 0px 13px;
  position: relative;
  user-select: none;
  pointer-events: none;
  margin-right: 20px;
  & .logo-title {
    font-size: 3em;
    font-weight: bold;
    color: #fff;
    user-select: none;
    pointer-events: none;
  }
}
@media screen and (max-width: 1530px) {
  .logo {
    margin-right: 5px;
  }
}
</style>
