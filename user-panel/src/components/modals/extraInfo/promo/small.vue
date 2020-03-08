<template>
  <div class="banners">
      <div class="item">
        <p class="title">Баннер 100х100</p>
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
</template>

<script>
export default {
  data: () => ({
    textAreaValue: '',
    isCopied: false
  }),
  watch: {
    isCopied: function () {
      if(this.isCopied) {
        setTimeout(() => {
          this.isCopied = false
        }, 2000);
      }
    }
  },
  methods: {
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
}
</script>

<style lang="scss" scoped>
  .banners {
  padding: 25px 0px;
  & .item {
    position: relative;
    & .title {
      color: #302D2B;
      font-size: 1.3em;
      font-weight: 600;
      margin: 10px 0px;
      max-width: 300px;
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
      width: 300px;
      height: 300px;
      border: 2px solid #707070;
    }
    & textarea {
      width: 300px;
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
@media screen and (max-width: 550px) {
  textarea, .box {
    max-width: 300px;
    width: 100% !important;
  }
}
</style>