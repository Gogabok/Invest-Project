<template>
  <div v-if="submenu" class="StartSubmenu">
    <div class="StartSubmenu-wrapper">
      <div 
          @click="selectStep(idx++)" 
          :key="item.title" 
          v-for="(item, idx) in submenu" 
          :class="!item.title && item.submit ? 'ok' : ''"
          class="StartSubmenu-wrapper-item">
        <h2 class="StartSubmenu-wrapper-item-title" v-if="item.title">{{ ++idx }}. {{ item.title }}</h2>
        <div v-else-if="!item.title && item.submit" class="StartSubmenu-wrapper-item-icon">
          <img src="../../assets/icons/ok-grey-big.svg" ondragstart="return false" alt="">
        </div>
      </div>
      <div class="StartSubmenu-wrapper-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartSubmenu',
  props: {
    submenu: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectStep(step) {
      this.$router.push(`/start/step-${step}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .StartSubmenu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 0px;
    &-wrapper {
      display: flex;
      position: relative;
      &-line {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 0px;
        right: 0px;
        height: 3px;
        background: #8A8D8F;
        z-index: 1;
      }
      &-item {
        margin: 5px;
        padding: 5px 15px;
        border: 3px solid #8A8D8F;
        max-width: 250px;
        background: #20272B;
        cursor: pointer;
        position: relative;
        z-index: 2;
        &:first-child {
          margin-left: 0px;
        }
        &-title {
          font-family: "SegoeUi";
          font-weight: 600;
          font-size: 2rem;
          color: #8A8D8F;
        }
        &.ok {
          margin-right: 0ex;
        }
        &-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px;
          & img {
            max-width: 50px;
          }
        }
      }
    }
  }
</style>