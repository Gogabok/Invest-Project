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
    <div class="banners">
      <div class="item">
        <p class="title">Баннер 468х60</p>
        <div class="box"></div>
      </div>
      <div class="item">
        <transition name="scaleY" mode="out-in">
          <div v-show="isCopied" class="copied">
            Код скопирован в буфер обмена!
          </div>
        </transition>
        <p class="title">html-код <span @click="copyToClickboard">Копировать</span></p>
        <textarea v-model="textAreaValue"></textarea>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "refferals-modal",
  data: () => ({
    nav: [
      {
        title: "468x60",
        link: "large",
        isActive: false
      },
      {
        title: "200x40",
        link: "medium",
        isActive: false
      },
      {
        title: "100x100",
        link: "small",
        isActive: false
      }
    ],
    activeComponent: null,
    textAreaValue: '',
    isCopied: false
  }),
  mounted() {
    this.activeComponent = this.nav[0].link
  },
  watch: {
    activeComponent: function () {
      for(let i = 0; i < this.nav.length; i++) {
        this.nav[i].isActive = false
      }
      this.nav.find(item => item.link === this.activeComponent).isActive = true
    },
    isCopied: function () {
      if(this.isCopied) {
        setTimeout(() => {
          this.isCopied = false
        }, 2000);
      }
    }
  },
  methods: {
    selecting(payload) {
      this.activeComponent = payload.link
    },
    copyToClickboard () {
      navigator.clipboard.writeText(this.textAreaValue.toString())
      .then(resolve => {
        this.isCopied = true
      })
      .catch(error => {
        alert(error)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.extraInfo-modal-wrapper {
  padding: 20px 30px;
  width: 100%;
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
.banners {
  padding: 25px 0px;
  & .item {
    position: relative;
    & .title {
      color: #302D2B;
      font-size: 1.3em;
      font-weight: 600;
      margin: 10px 0px;
      max-width: 468px;
      display: flex;
      align-items: center;
      & span {
        margin-left: auto;
        color: #82807F;
        font-size: .7em;
        cursor: pointer;
        user-select: none;
      }
    }
    & .box {
      width: 468px;
      height: 60px;
      border: 2px solid #707070;
    }
    & textarea {
      width: 468px;
      border: 2px solid #707070;
      color: #302D2B;
      font-size: 1.3em;
    }
  }
}
.copied {
  position: absolute;
  top: -10px;
  left: 0px;
  background: #302d2b;
  color: #fff;
  padding: 8px 30px;
  border-radius: 12px;
  font-weight: 300;
  font-size: 1em;
  &:after {
    content: ''; 
    position: absolute;
    left: 50%; 
    bottom: -19px;
    border: 10px solid transparent;
    border-top: 10px solid #302d2b;
  }
}
</style>