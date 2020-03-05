<template>
  <div class="output-modal">
    <div class="wrapper">
      <img
        ondragstart="return false;"
        @click="deleteModal(modal, index)"
        class="modal-close"
        src="../../../assets/modals/close.svg"
        alt
      />
      <div class="text">
        <p class="title">Активируйте автовыплаты</p>
        <p
          class="desc"
        >— После накопления минимальной суммы выплаты деньги отправляются на основной способ вывода.</p>
      </div>
      <div class="input-range">
        <p class="input-range-title">На баланс</p>
        <input type="range" @input="filtrationRangeValue" v-model="rangeValue" />
        <p class="input-range-title">На вывод</p>
      </div>
      <div class="input-values">
        <p class="input-values-title">
          На баланс
          <span>{{ balanceValue }}</span>
        </p>
        <p class="input-values-title">
          На вывод
          <span>{{ outputValue }}</span>
        </p>
      </div>
      <div class="minimal-output">
        <p class="title">Минимальная выплата</p>
        <input
          :style="widthValue"
          type="text"
          @input="ValueFiltration"
          v-model="minimalOutputValue"
        />
        <p class="title"></p>
      </div>
    </div>
    <button :disabled="isBtnActive" @click.prevent="save" class="output-submit">
      Далее
      <img ondragstart="return false;" src="../../../assets/common/arrow-right-white.svg" alt />
    </button>
  </div>
</template>

<script>
export default {
  name: "modalOutputAuto",
  props: ["modal", "index"],
  data: () => ({
    rangeValue: 25,
    minimalOutputValue: null
  }),
  computed: {
    outputValue() {
      return `${this.rangeValue}%`;
    },
    balanceValue() {
      return `${100 - this.rangeValue}%`;
    },
    widthValue() {
      return {
        width: `${(this.minimalOutputValue.length + 1) * 16}px`
      };
    },
    isBtnActive() {
      let symbol = "$";
      let val = this.minimalOutputValue.replace(symbol, "")
      return val < 10 ? true : false
    }
  },
  created() {
    this.minimalOutputValue = `$${10}`;
  },
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    },
    ValueFiltration() {
      let symbol = "$";
      this.minimalOutputValue = this.minimalOutputValue.replace(/[^\d]/g, "");
      let str = this.minimalOutputValue.replace(symbol, "");
      this.minimalOutputValue = symbol + str;
    },
    filtrationRangeValue () {
      if(this.rangeValue <= 10) {
        this.rangeValue = 10
      } else if(this.rangeValue >= 90) {
        this.rangeValue = 90
      }
    },
    save() {
      this.$emit("deleteModal", { modal: this.modal, index: this.index });
      this.$store.dispatch("modalStore/ADD_MODAL", {
        title: "saved",
        link: "saved",
        message: "Автовыплаты подключены!"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.output-modal {
  height: 100%;
  width: 100%;
  background: #fff;
  max-height: 700px;
  max-width: 1000px;
  border-radius: 5px;
  margin: 0px auto;
  position: relative;
  padding-bottom: 20px;
  & .wrapper {
    padding: 20px 30px;
  }
  & .modal-close {
    position: absolute;
    right: -35px;
    top: -35px;
    cursor: pointer;
    user-select: none;
    z-index: 9999;
    width: 20px;
    height: 20px;
  }
  & .text {
    text-align: center;
    & .title {
      font-size: 1.6em;
      font-weight: 600;
      color: #3b4757;
      margin: 10px 0px;
    }
    & .desc {
      font-size: 1.1em;
      font-weight: 400;
      color: #379a1d;
      margin: 10px 0px;
    }
  }
  & .input-range {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 60px 0px;
    &-title {
      font-size: 1.3em;
      color: #3b4757;
      font-weight: 300;
      width: 100px;
    }
    & input {
      max-width: calc(100% - 240px);
      width: 100%;
      display: block;
      // margin: 60px auto 20px auto;
      // height: 30px;
      -webkit-appearance: none;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        animate: 0.2s;
        background: #c0c8cf;
        border-radius: 10px;
      }
      &::-webkit-slider-thumb {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
        height: 60px;
        width: 60px;
        border-radius: 100%;
        border: 9px solid #c0c8cf;
        background: #379a1d;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -20px;
      }
      &:focus::-webkit-slider-runnable-track {
        background: #c0c8cf;
      }
      &::-moz-range-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        animate: 0.2s;
        background: #c0c8cf;
        border-radius: 10px;
      }
      &::-moz-range-thumb {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
        border: 5px solid #fff;
        height: 17px;
        width: 17px;
        border-radius: 100%;
        background: #4985b5;
        cursor: pointer;
      }
    }
  }
}

.input-values {
  display: flex;
  align-items: center;
  justify-content: space-around;
  &-title {
    font-size: 1.6em;
    color: #3b4757;
    font-weight: 300;
    display: flex;
    align-items: center;
    & span {
      margin: 0px 20px;
      font-size: 4em;
      font-weight: 600;
    }
  }
}

.minimal-output {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px 20px 0px;
  & .title {
    font-size: 1.6em;
    font-weight: 400;
    color: #3b4757;
    margin-right: 15px;
  }
  & input {
    border: none;
    border-bottom: 3px solid #c0c8cf;
    text-align: center;
    font-size: 1.8em;
    color: #3b4757;
  }
}

.output-submit {
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: #379a1d;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  padding: 10px 10px 10px 20px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin: 0px 0px 0px auto;
  & img {
    margin-left: 20px;
  }
  &[disabled] {
    opacity: 0.8;
    user-select: none;
    pointer-events: none;
    cursor: default;
  }
}

@media screen and (max-width: 1100px) {
  .output-modal {
    & .modal-close {
      right: 5px;
      top: -45px;
    }
  }
}
</style>