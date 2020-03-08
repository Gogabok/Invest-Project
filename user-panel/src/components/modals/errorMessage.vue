<template>
  <div class="output-modal">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../assets/modals/close.svg"
      alt
    />
    <img ondragstart="return false;" class="okLogo" src="../../assets/common/errorOkModal.svg" alt />
    <p class="message">{{ message }}</p>
    <button @click="submit" class="btnSuccess">Подтвердить</button>
  </div>
</template>

<script>
export default {
  name: "modalSuccessMessage",
  props: ["modal", "index"],
  data: () => ({
    message: null,
    isEmailSuccessed: null
  }),
  created() {
    this.message = this.$store.getters["modalStore/modals"][this.index].message;
  },
  methods: {
    submit(modal, index) {
      this.$emit("deleteModal", { modal: this.modal, index: this.index });
      this.$store.dispatch("modalStore/ADD_MODAL", 
        {
          link: 'codeVerification',
          info: {
            input: 'emailInstructions',
            title: 'Запрос отправлен! Введите код из Email',
            desc: 'Введите четырехзначный код, отправленный на Email',
            code: '0000'
          }
        }
      )
    },
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
    color: #df4545;
    font-size: 1.3em;
    font-weight: 300;
    user-select: none;
  }
  & .btnSuccess {
    background: transparent;
    border: 1px solid #df4545;
    border-radius: 6px;
    color: #df4545;
    font-size: 1.2em;
    font-weight: 400;
    transition-duration: 0.2s;
    padding: 5px 35px;
    margin: 20px 0px 5px 0px;
    &:hover {
      background: #df4545;
      color: #fff;
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