<template>
  <div class="commission">
    <input ref="commissionInput" :class="isOpen ? 'open' : false" v-model="value" class="commission-input" type="text">
    <button @click="openMenu" class="commission-btn">
      <span v-show="!isOpen">{{ value }}%</span>
      <img v-show="isOpen" class="commission-btn-ok" ondragstart="return false" src="../../assets/icons/ok-dark.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: 'commissin-btn',
  data: () => ({
    isOpen: false,
    value: 20
  }),
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen
      this.$refs.commissionInput.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
  .commission {
    display: flex;
      height: 34px;
    &-input {
      background: transparent;
      border: 1px solid #F3F4F4;
      font-family: 'SegoeUI';
      font-weight: 700;
      color: #fff;
      font-size: 1.7rem;
      width: 1px;
      text-align: center;
      transition-duration: .2s;
      opacity: 0;
      &.open {
        width: 75px;
        padding: 4px 9px 8px 9px;
        opacity: 1;
      }
    }
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
      min-width: 50px;
      &-ok {
        width: 18px;
        margin-top: -4px;
        transition-duration: .2s;
      }
    }
  }
</style>