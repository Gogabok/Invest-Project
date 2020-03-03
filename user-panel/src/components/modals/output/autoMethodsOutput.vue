<template>
  <div class="output-modal">
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
      <input type="range" v-model="rangeValue" />
      <p>{{ rangeValue }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalOutputAuto",
  props: ["modal", "index"],
  data: () => ({
    rangeValue: 25
  }),
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
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
  padding: 20px 30px;
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
    & input {
      width: calc(100% - 60px);
      display: block;
      margin: 60px auto 20px auto;
      height: 30px;
      -webkit-appearance: none;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 16px;
        cursor: pointer;
        animate: 0.2s;
        background: #C0C8CF;
        border-radius: 10px;
      }
      &::-webkit-slider-thumb {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
        height: 60px;
        width: 60px;
        border-radius: 100%;
        border: 9px solid #C0C8CF;
        background: #379a1d;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -20px;
      }
      &:focus::-webkit-slider-runnable-track {
        background: #C0C8CF;
      }
      &::-moz-range-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        animate: 0.2s;
        background: #C0C8CF;
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

@media screen and (max-width: 1100px) {
  .output-modal {
    & .modal-close {
      right: 5px;
      top: -45px;
    }
  }
}
</style>