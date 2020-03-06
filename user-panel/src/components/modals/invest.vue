<template>
  <div class="output-modal">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../assets/modals/close.svg"
      alt
    />
    <p class="title">Инвестировать</p>
    <div class="labels">
      <label class="item">
        <input
          v-model="activeInput"
          value="main"
          type="radio"
          id="output-input-1"
          name="output-input"
        />
        <label for="output-input-1"></label>
        <div class="text">
          <p class="title-label">Вывод с основного счета</p>
          <p class="desc-label">Вывод с инвестиционного счета</p>
        </div>
      </label>
      <label class="item">
        <input
          v-model="activeInput"
          value="auto"
          type="radio"
          id="output-input-2"
          name="output-input"
        />
        <label for="output-input-2"></label>
        <div class="text">
          <p class="title-label">Настроить автовыплаты</p>
          <p class="desc-label">Настройка автовывода дивидендов</p>
        </div>
      </label>
    </div>
    <button @click.prevent="select" class="output-submit">
      Далее
      <img ondragstart="return false;" src="../../assets/common/arrow-right-white.svg" alt />
    </button>
  </div>
</template>

<script>
export default {
  name: "modalInvest",
  props: ["modal", "index"],
  data: () => ({
    activeInput: "main"
  }),
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    },
    select () {
      this.$emit("deleteModal", { modal: this.modal, index: this.index });
      this.$store.dispatch("modalStore/ADD_MODAL", 
      {title: this.activeInput + 'MethodsOutput', link:  this.activeInput + 'MethodsOutput'})
    }
  }
};
</script>


<style lang="scss" scoped>
.output-modal {
  max-width: 400px;
  width: 100%;
  padding: 20px 0px;
  margin: 0px auto;
  background: #f5f5f5;
  border-radius: 7px;
  position: relative;
  & .title {
    font-size: 1.6em;
    font-weight: 600;
    color: #3b4757;
    text-align: center;
    margin-bottom: 20px;
    user-select: none;
  }
  & .output-submit {
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
    margin: 20px 0px 0px auto;
    transition-duration: .2s;
    &:hover {
      background: #1E640B;
    }
    & img {
      margin-left: 20px;
    }
  }
  & .labels {
    padding: 0px 15px;
    & .item {
      text-decoration: none;
      outline: none;
      transition-duration: 0.2s;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      user-select: none;
      cursor: pointer;
      padding: 10px 20px;
      color: rgba(48, 45, 43, 0.5);
      transition-duration: 0.2s;
      & .text {
        width: 100%;
        & .title-label {
          font-size: 1.2em;
          font-weight: 400;
          color: #3b4757;
          user-select: none;
        }
        & .desc-label {
          font-size: 0.9em;
          font-weight: 400;
          color: rgba(59, 71, 87, 0.5);
          user-select: none;
        }
      }
      & input {
        margin: 0px 20px;
        visibility: hidden;
      }
      & label {
        margin-right: 40px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translate(0%, -50%);
        -webkit-appearance: none;
        border: 2px solid #c8c8c8;
        white-space: nowrap;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        transition: opacity 0.2s;
        &:after {
          opacity: 0;
          content: "";
          position: absolute;
          width: 14px;
          height: 7px;
          background: transparent;
          top: 7px;
          right: 4px;
          border: 3px solid #379a1d;
          border-radius: 1px;
          border-top: none;
          border-right: none;
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
      & input[type="radio"]:checked + label:after {
        opacity: 1;
      }
      & input[type="radio"]:checked + label {
        background-color: #f5f5f5;
        border: 2px solid #379a1d;
      }
    }
  }
}
.modal-close {
  position: absolute;
  right: -25px;
  top: -25px;
  cursor: pointer;
  user-select: none;
  z-index: 9999;
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 600px) {
  .output-modal {
    max-width: auto;
    width: calc(100% - 30px);
    padding: 10px 0px;
    & .labels {
      padding: 0px 0px;
      & .item {
        padding: 15px 0px;
        padding-right: 10px;
        & input {
          margin-right: 30px;
        }
      }
    }
  }
  .modal-close {
    right: 5px;
    top: -45px;
  }
}
</style>