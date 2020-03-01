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
        <img ondragstart="return false;" src="../../../assets/common/arrow-left-grey.svg" alt />
        Вывод с баланса
      </div>
      <p class="desc">
        <span>Выводите</span> деньги в любой момент, здесь нет ожиданий завершения депозта. Также вывод
        возможен в систему платежей отличную от выбранной при пополнении счёта.
      </p>
    </div>
    <div class="methods">
      <div class="list">
        <div :class="item.isActive ? 'active' : ''" @click="selecting(item)" class="item" v-for="item in paymentMethods" :key="item.link">
          <img ondragstart="return false;" :src='`./assets/common/method-${item.link}.svg`' alt="">
        </div>
        <!-- <div class="item">
          <img ondragstart="return false;" src="../../../assets/common/method-perfectMoney.svg" alt="">
        </div>
        <div class="item">
          <img ondragstart="return false;" src="../../../assets/common/method-payeer.svg" alt="">
        </div>
        <div class="item btc">
          <img ondragstart="return false;" src="../../../assets/common/method-btc.svg" alt="">
        </div> -->
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
        link: 'advcash',
      },
      {
        isActive: false,
        link: 'perfectMoney',
      },
      {
        isActive: false,
        link: 'payeer',
      },
      {
        isActive: false,
        link: 'btc',
      }
    ]
  }),
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    },
    selecting(payload) {
      this.paymentMethods.forEach(item => {
        item.isActive = false
      })
      payload.isActive = true
    }
  }
};
</script>


<style lang="scss" scoped>
.output-modal {
  height: 100%;
  width: 100%;
  background: #fff;
  border: 3px solid #e4e4e4;
  max-height: 700px;
  max-width: 1000px;
  border-radius: 5px;
  margin: 0px auto;
  position: relative;
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
    padding: 15px 20px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 40vh;
    &::-webkit-scrollbar{
      background: #E4E4E4;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb{
      background: rgba(45, 45, 45, .7);
      border-radius: 5px;
    } 
    & .list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .item {
        width: 350px;
        border: 5px solid rgba(112, 112, 112, 0.2);
        border-radius: 10px;
        transition-duration: .5s;
        cursor: pointer;
        position: relative;
        margin: 30px 0px;
        text-align: center;
        transform: scale(.7);
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
          transform: scale(.7);
          width: calc(50% - 30px);
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .output-modal {
    & .methods {
      & .list {
        & .item {
          width: 100%;
        }
      }
    }
  }
}
</style>