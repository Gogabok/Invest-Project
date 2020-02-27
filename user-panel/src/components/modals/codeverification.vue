<template>
  <div class="main-codeverification">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../assets/modals/close-gray.svg"
      alt
    />
    <p class="title" v-if="info.title">
      <span class="error" v-show="isError">Ошибка!</span>
      {{ info.title }}
    </p>
    <p class="desc" v-if="info.desc">{{ info.desc }}</p>
    <div class="inputs">
      <input
        @keyup="changeInput($event, 1)"
        :value="inputs[0]"
        type="text"
        autocomplete="off"
        ref="input_1"
        class="item"
        maxlength="1"
      />
      <input
        @keyup="changeInput($event, 2)"
        :value="inputs[1]"
        type="text"
        autocomplete="off"
        ref="input_2"
        class="item"
        maxlength="1"
      />
      <input
        @keyup="changeInput($event, 3)"
        :value="inputs[2]"
        type="text"
        autocomplete="off"
        ref="input_3"
        class="item"
        maxlength="1"
      />
      <input
        @keyup="changeInput($event, 4)"
        :value="inputs[3]"
        type="text"
        autocomplete="off"
        ref="input_4"
        class="item"
        maxlength="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-codeverification",
  props: ["modal", "index"],
  data: () => ({
    info: null,
    inputs: ["", "", "", ""],
    isError: false
  }),
  created() {
    this.info = this.$store.state.modalStore.modals[
      this.index
    ].infoCodeVerification;
  },
  mounted() {
    setTimeout(() => {
      this.$refs['input_1'].focus();
    }, 1);
  },
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    },
    changeInput: function(event, input){
    	let val = event.target.value;
    	if(val.length >= 1) {
      	let next = this.$refs['input_' + (input+1)];
        if(next) {
        	next.focus();
        } else {
        	event.preventDefault();
        }
      }
      this.$set(this.inputs, input-1, val);
      let code = this.inputs.join('')
      if(code.length === 4) {
        if(code === this.info.code) {
          this.isError = false
          for(let i = 1; i < this.inputs.length + 1; i++) {
            this.$refs['input_' + i].readOnly = true
          }
          this.$store.dispatch("modalStore/SUCCESS_CODE_VALIDATION", {info: this.info, isSuccess: true})
          this.$emit("deleteModal", { modal: this.modal, index: this.index });
        } else {
          this.isError = true
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-codeverification {
  max-width: 700px;
  padding: 30px 50px;
  background: #fff;
  border-radius: 5px;
  border: 3px solid #e4e4e4;
  margin: 0px auto;
  position: relative;
  text-align: center;
  & .title {
    font-weight: 600;
    font-size: 1.3em;
    margin: 5px 0px;
    & .error {
      color: #DC3C24;
    }
  }
  & .desc {
    font-size: 1.1em;
    margin: 15px 0px;
  }
}
.modal-close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  user-select: none;
  z-index: 9999;
}
.inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  & .item {
    width: 50px;
    margin: 0px 10px;
    border: none;
    border-bottom: 2px solid #379a1d;
    text-align: center;
    // color: transparent;
    color: #379a1d;
    font-size: 2em;
    // text-shadow: 0 0 0 black;
  }
}
@media screen and (max-width: 700px) {
  .main-codeverification {
    max-width: calc(100% - 40px);
  }
}
</style>