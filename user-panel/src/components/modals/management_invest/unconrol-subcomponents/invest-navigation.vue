<template>
  <div class="main-navigation">
    <div class="list">
      <div
        class="back"
        @click="back"
      >
        <img
          ondragstart="return false;"
          src="@/assets/common/arrow-left-grey.svg"
          alt
        />
        Независимое управление
      </div>
      <div
        @click="selecting(item)"
        class="item"
        :class="item.isActive ? 'active' : ''"
        v-for="item in nav"
        :key="item.link"
      >
        {{ item.title }}
        <img
          ondragstart="return false;"
          v-show="item.isActive"
          src="@/assets/common/arrow-right-gray.svg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeNavItem", "nav"],
  methods: {
    back () {
      this.$emit("back");
    },
    selecting(payload) {
      this.$emit("selecting", payload)
    }
  }
};
</script>

<style lang="scss" scoped>
.main-navigation {
  max-width: 230px;
  border-right: 2px solid #e4e4e4;
  // height: 100%;
  width: 100%;
  & .list {
    padding: 5px 0px 5px 0px;
    & .item {
      padding: 20px 20px;
      width: 100%;
      cursor: pointer;
      font-size: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      transition-duration: .1s;
      user-select: none;
      & img {
        width: 10px;
        pointer-events: none;
        user-select: none;
      }
      &:nth-child(2) {
        border-bottom: 2px solid #e4e4e4;
        border-top: 2px solid #e4e4e4;
      }
      &:nth-child(3) {
        border-bottom: 2px solid #e4e4e4;
      }
      &.active {
        color: #379A1D;
        font-weight: 600;
      }
    }
    & .back {
      padding: 10px 10px;
      width: 100%;
      font-size: 1.2em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      transition-duration: .1s;
      user-select: none;
      cursor: pointer;
      & img {
        width: 20px;
        pointer-events: none;
        user-select: none;
        margin-right: 15px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
    .main-navigation {
      max-width: 100%;
      height: auto;
      & .list {
        padding: 0px;
      }
    }
  }
@media screen and (max-width: 630px) {
  .main-navigation {
    border-width: 1px;
    & .list {
      & .item {
        font-size: 14px;
        padding: 10px;
        &:nth-child(2) {
          border-width: 1px;
        }
        &:nth-child(3) {
          border-width: 1px;
        }
        & img {
          width: 7px;
        }
      }
    }
  }
}
</style>