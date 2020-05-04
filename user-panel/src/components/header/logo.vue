<template>
  <div class="logo">
    <p class="logo-title">INVEST<span>lab</span></p>
  </div>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="scss" scoped>
.logo {
  padding: 5px 0px 15px 70px;
  background: url("../../assets/header/logo.png") no-repeat;
  background-position: 0px 10px;
  position: relative;
  user-select: none;
  pointer-events: none;
  margin-right: 20px;
  margin-left: 17px;
  & .logo-title {
    font-size: 3em;
    font-weight: bold;
    color: #fff;
    user-select: none;
    pointer-events: none;
    & span {
      font-weight: 400;
    }
  }
}
@media screen and (max-width: 1530px) {
  .logo {
    margin-right: 5px;
  }
}
</style>
