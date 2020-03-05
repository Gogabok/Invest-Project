<template>
  <div class="output-modal">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../assets/modals/close.svg"
      alt
    />
    <img ondragstart="return false;" class="okLogo" src="../../assets/common/successOkModal.svg" alt="">
    <p class="message">{{ message }}</p>
    <div @click="deleteModal(modal, index)" class="btn-wrapper">
      <button class="btnSuccess">
        ок
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalSuccessMessage",
  props: ["modal", "index"],
  data: () => ({
    message: null
  }),
  created() {
    this.message = this.$store.getters["modalStore/modals"][this.index].message
  },
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    },
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
  text-align: center;
  & .okLogo {
    width: 120px;
    display: block;
    margin: 20px auto;
  }
  & .message {
    color: #3B4757;
    font-size: 1.3em;
    font-weight: 300;
    user-select: none;
  }
  & .btn-wrapper {
    border-radius: 6px;
    border: 2px solid rgba(55, 154, 29, 0.3);
    padding: 2px;
    display: inline-block;
    margin: 20px 0px 0px 0px;
    & .btnSuccess {
      text-transform: uppercase;
      border-radius: 6px;
      border: none;
      background: rgb(55, 154, 29);
      padding: 7px 45px;
      color: #fff;
      font-size: 1.6em;
      font-weight: 600;
      transition-duration: .2s;
      &:hover {
        background: #1E640B;
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
  }
  .modal-close {
    right: 5px;
    top: -45px;
  }
}
</style>