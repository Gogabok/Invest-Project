<template>
  <div class="submenu">
    <div @click="activeItemToggle(item)" :class="item.active ? 'active' : false" class="submenu-item" v-for="item in headers" :key="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'submenu',
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  methods: {
    activeItemToggle(item) {
      if(!item.active) {
        this.$emit('activeItemToggle', item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .submenu {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    &-item {
      margin: 0px 15px;
      color: #F3F4F4;
      font-family: 'SegoeUI';
      font-weight: 400;
      text-decoration: underline;
      font-size: 1.8rem;
      user-select: none;
      cursor: pointer;
      // transition-duration: .2s;
      &.active {
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
</style>