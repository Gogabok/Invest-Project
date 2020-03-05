<template>
  <button @click="selecting(VClass)" :class="VClass" class="v-nav-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-nav-btn',
  props: [ 'VClass' ],
  methods: {
    selecting(payload) {
      this.$store.dispatch("modalStore/ADD_MODAL", 
      {title: payload, link: payload})
    }
  }
}
</script>

<style lang="scss" scoped>
.v-nav-btn {
  padding: 11.5px 25px;
  font-weight: 400;
  border-radius: 3px;
  color: #fff;
  font-size: 1em;
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
.output {
  background: rgba(55, 154, 29, .1);
  border: 1px solid #379A1D;
  &:hover {
    border: 1px solid #fff; 
  }
}

@media screen and (max-width: 1530px) {
  .v-nav-btn {
    margin: 0px 3px;
    padding: 4px 12px;
  }
}
</style>