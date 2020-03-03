<template>
  <div class="output-modal">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../../assets/modals/close.svg"
      alt
    />
    <div class="text-area">
      <div class="title">
        <img @click="back" ondragstart="return false;" src="../../../assets/common/arrow-left-grey.svg" alt />
        Вывод с баланса
      </div>
      <p class="desc">
        <span>Выводите</span> деньги в любой момент, здесь нет ожиданий завершения депозта. Также вывод
        возможен в систему платежей отличную от выбранной при пополнении счёта.
      </p>
    </div>
    <div class="methods">
      <div class="list">
        <div
          :class="item.isActive ? 'active' : ''"
          @click="selecting(item)"
          class="item"
          v-for="item in paymentMethods"
          :key="item.link"
        >
          <img ondragstart="return false;" :src="`./assets/common/method-${item.link}.svg`" alt />
        </div>
      </div>
      <div class="input-wrapper">
        <p class="input-title">Сумма пополнения</p>
        <label for="value-input" class="input">
          <input v-model="value" type="text" id="value-input" />
          <span>{{ currency }}</span>
        </label>
        <button :disabled="isBtnDisabled" @click.prevent="submit" class="output-submit">
          Далее
          <img ondragstart="return false;" src="../../../assets/common/arrow-right-white.svg" alt />
        </button>
      </div>
      <div v-show="currencyList.length > 1" class="input-values">
        <p v-for="item in currencyList" :key="item + Math.random()" :class="currency === item ? 'active' : ''" @click="valueSelecting(item)" class="value">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalOutputMethods",
  props: ["modal", "index"],
  data: () => ({
    paymentMethods: [
      {
        isActive: false,
        link: "advcash",
        currencyList: ['USD', 'RUB']
      },
      {
        isActive: false,
        link: "perfectMoney",
        currencyList: ['USD']
      },
      {
        isActive: false,
        link: "payeer",
        currencyList: ['USD']
      },
      {
        isActive: false,
        link: "btc",
        currencyList: ['BTC', 'ETH', 'LTC', 'TRX']
      }
    ],
    currency: "USD",
    value: ''
  }),
  computed: {
    isBtnDisabled() {
      let data = {
        value: this.value,
        currency: this.currency,
        method: this.paymentMethods.find(item => item.isActive) ? true : false
      }
      return Object.values(data).some(item => item.length <= 0)
    }, 
    currencyList () {
      return this.paymentMethods.find(item => item.isActive) ? this.paymentMethods.find(item => item.isActive).currencyList : false
    }
  },
  mounted() {
    this.paymentMethods[0].isActive = true
  },
  methods: {
    back () {
      this.$emit("deleteModal", { modal: this.modal, index: this.index });
      this.$store.dispatch("modalStore/ADD_MODAL", 
      {title: 'output', link: 'output'})
    },
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    },
    selecting(payload) {
      this.paymentMethods.forEach(item => {
        item.isActive = false;
      });
      this.currency = payload.currencyList[0]
      payload.isActive = true;
    },
    valueSelecting (value) {
      this.currency = value.toUpperCase()
    },
    submit() {
      let data = {
        value: this.value,
        currency: this.currency,
        method: this.paymentMethods.find(item => item.isActive).link
      }
      if(!Object.values(data).some(item => item.length <= 0)) {
        console.log(data)
      }
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
  & .text-area {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  & .methods {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  & .text-area {
    padding: 15px 20px;
    background: #f5f5f5;
    user-select: none;
    & .title {
      color: #3b4757;
      font-weight: 300;
      margin-bottom: 5px;
      font-size: 1.6em;
      & img {
        width: 25px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    & .desc {
      color: #3b4757;
      font-weight: 400;
      font-size: 1.1em;
      margin-left: 42.5px;
      & span {
        font-weight: 600;
      }
    }
  }
  & .methods {
    background: #fff;
    padding: 45px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 80vh;
    user-select: none;
    &::-webkit-scrollbar {
      background: #e4e4e4;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(45, 45, 45, 0.7);
      border-radius: 5px;
    }
    & .list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 20px;
      & .item {
        width: 350px;
        border: 5px solid rgba(112, 112, 112, 0.2);
        border-radius: 10px;
        transition-duration: 0.5s;
        cursor: pointer;
        position: relative;
        margin: 30px 0px;
        text-align: center;
        transform: scale(0.7);
        &.active {
          transform: scale(1);
        }
        &:hover {
          transform: scale(1);
        }
        & img {
          width: 100%;
          max-height: 100px;
        }
        &.btc img {
          width: 100%;
        }
      }
    }
  }
  & .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    & .output-submit {
      border: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
        background: rgba(55, 154, 29, 1);
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      padding: 10px 10px 10px 20px;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      transition-duration: .2s;
      & img {
        margin-left: 20px;
      }
      &:disabled {
        background: rgba(55, 154, 29, .5)
      }
    }
    & .input-title {
      font-size: 1.3em;
      color: #302d2b;
      margin: 0px 20px;
      margin-left: auto;
    }
    & .input {
      display: flex;
      align-items: center;
      padding: 5px 15px;
      border: 1px solid #c8c8c8;
      border-radius: 17px;
      font-size: 1.5em;
      font-weight: bold;
      & input {
        border: none;
        color: #302d2b;
        font-weight: 600;
      }
      & span {
        color: #379a1d;
        margin-left: 10px;
      }
    }
  }
  & .input-values {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0px 5px 0px;
    user-select: none;
    & .value {
      font-weight: 600;
      font-size: 1.3em;
      color: rgba(145, 145, 145, 0.7);
      margin: 0px 5px;
      cursor: pointer;
      text-transform: uppercase;
      transition-duration: .2s;
      &:hover {
        color: #379a1d;
      }
      &.active {
        color: #379a1d;
      }
    }
  }
}
.modal-close {
  position: absolute;
  right: -35px;
  top: -35px;
  cursor: pointer;
  user-select: none;
  z-index: 9999;
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 1100px) {
  .modal-close {
    right: 5px;
    top: -45px;
  }
  .output-modal {
    max-width: calc(100% - 20px);
    & .methods {
      & .list {
        flex-wrap: wrap;
        justify-content: center;
        & .item {
          margin: 5px 5px;
          transform: scale(0.7);
          width: calc(50% - 30px);
        }
      }
    }
  }
}
@media screen and (max-width: 780px) {
  .output-modal {
    & .input-wrapper {
      display: block;
      text-align: center;
      padding: 0px 20px;
      & .output-submit {
        position: relative;
        top: 40px;
        right: 0px;
        border-radius: 10px;
        & img {
          margin-left: 20px;
        }
      }
      & .input-title {
        margin: 10px 20px;
      }
      & .input {
        margin: 10px 0px;
        & input {
          width: 100%
        }
      }
    }
    & .input-values {
      position: relative;
      top: -50px;
      & .value {
        margin: 0px 30px;
      }
  }
  }
}
@media screen and (max-width: 500px) {
  .output-modal {
    & .methods {
    max-height: 40vh;
    padding: 15px 0px;
      & .list {
        & .item {
          width: 100%;
        }
      }
    }
    & .input-values {
      & .value {
        margin: 0px 10px;
      }
    }
  }
}
</style>