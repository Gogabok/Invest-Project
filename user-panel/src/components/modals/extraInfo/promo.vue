<template>
  <div class="extraInfo-modal-wrapper">
    <div class="promo-nav">
      <div
        @click="selecting(item)"
        class="item"
        :class="item.isActive ? 'active' : false"
        v-for="item in nav"
        :key="item.title + item.link"
      >{{ item.title }}</div>
    </div>
    <transition name="fade-faster" mode="out-in">
      <component :is="activeComponent"></component>
    </transition>
    <p class="text">Работая по партнерской программе вы соглашаетесь с <a href="https://www.google.ru/" target="_blank">условиями <img src="../../../assets/modals/icon-share.svg" alt=""></a></p>
  </div>
</template>


<script>
import largeBanner from "@/components/modals/extraInfo/promo/large"
import mediumBanner from "@/components/modals/extraInfo/promo/medium"
import smallBanner from "@/components/modals/extraInfo/promo/small"
export default {
  name: "refferals-modal",
  components: {
    largeBanner,
    mediumBanner,
    smallBanner
  },
  data: () => ({
    nav: [
      {
        title: "468x60",
        link: "largeBanner",
        isActive: false
      },
      {
        title: "200x40",
        link: "mediumBanner",
        isActive: false
      },
      {
        title: "100x100",
        link: "smallBanner",
        isActive: false
      }
    ],
    activeComponent: null,
    textAreaValue: "",
    isCopied: false
  }),
  mounted() {
    this.activeComponent = this.nav[0].link;
  },
  watch: {
    activeComponent: function() {
      for (let i = 0; i < this.nav.length; i++) {
        this.nav[i].isActive = false;
      }
      this.nav.find(item => item.link === this.activeComponent).isActive = true;
    },
    isCopied: function() {
      if (this.isCopied) {
        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
      }
    }
  },
  methods: {
    selecting(payload) {
      this.activeComponent = payload.link;
    },
    copyToClickboard() {
      navigator.clipboard
        .writeText(this.textAreaValue.toString())
        .then(resolve => {
          this.isCopied = true;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.extraInfo-modal-wrapper {
  padding: 20px 30px;
  width: 100%;
}
.text {
  color: #302d2b;
  font-size: 1.1em;
  margin: 15px 0px;
  &.bold {
    font-weight: 600;
  }
  & a {
    text-decoration: none;
    display: inline-block;
  }
  & img {
    width: 15px;
    margin-left: 5px;
  }
}
.promo-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  & .item {
    padding: 15px 5px;
    width: calc(100% / 3);
    color: #302d2b;
    font-size: 1.1em;
    text-align: center;
    user-select: none;
    cursor: pointer;
    border-bottom: 2px solid #e7e7e7;
    &.active {
      border-bottom: 6px solid #379a1d;
      color: #379a1d;
      font-weight: 600;
    }
  }
}
</style>