<template>
  <div class="main-navigation">
    <div class="list">
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
  props: ["activeNavItem"],
  data: () => ({
    nav: [
      {
        title: "Профиль",
        link: "profile",
        isActive: false
      },
      {
        title: "Безопасность",
        link: "secure",
        isActive: false
      },
      {
        title: "Настройки",
        link: "settings",
        isActive: false
      },
      {
        title: "Моб. приложение",
        link: "app",
        isActive: false
      }
    ]
  }),
  mounted() {
    this.nav.forEach(item => {
      if (item.link === this.activeNavItem) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  },
  methods: {
    selecting(payload) {
      this.nav.forEach(item => {
        if (item.link === payload.link) {
          if (!item.isActive) {
            this.$emit("selecting", payload)
            item.isActive = true;
          } else {
            return false;
          }
        } else {
          item.isActive = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-navigation {
  max-width: 230px;
  border-right: 2px solid #e4e4e4;
  width: 100%;
  & .list {
    padding: 20px 0px 20px 0px;
    & .item {
      padding: 20px 20px;
      width: 100%;
      cursor: pointer;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      transition: background 0.3s;
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
        background: #e4e4e4;
        font-weight: 600;
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