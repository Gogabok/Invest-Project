<template>
  <div class="commission">
    <button @click="openMenu" class="commission-btn">
      <span v-show="!isOpen">20%</span>
      <img v-show="isOpen" class="commission-btn-ok" ondragstart="return false" src="../../assets/icons/ok-dark.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: 'commissin-btn',
  data: () => ({
    isOpen: false
  }),
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .commission {
    display: flex;
    align-items: center;
    &-btn {
      background: #F3F4F4;
      border: none;
      padding: 4px 9px 8px 9px;
      color: #555D6A;
      font-family: 'SegoeUI';
      font-weight: 700;
      font-size: 1.7rem;
      user-select: none;
      margin-right: 15px;
      transition-duration: .2s;
      &-ok {
        width: 18px;
        margin-top: -4px;
      transition-duration: .2s;
      }
    }
  }
</style>