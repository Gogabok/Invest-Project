<template>
  <button :class="VClass" class="v-nav-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-nav-btn',
  props: [ 'VClass' ]
}
</script>

<style lang="scss" scoped>
.v-nav-btn {
  padding: 8px 25px;
  font-weight: 400;
  border-radius: 3px;
  color: #fff;
  font-size: 1.5em;
  margin: 0px 7px;
  text-align: center;
  transition-duration: .5s;
}
.invest {
  background: rgba(55, 154, 29, .7);
  border: 1px solid #fff;
  &:hover {
    background: rgba(55, 154, 29, .1);
  }
}
.get {
  background: rgba(55, 154, 29, .1);
  border: 1px solid #379A1D;
  &:hover {
    border: 1px solid #fff; 
  }
}
</style>