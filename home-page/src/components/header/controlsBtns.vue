<template>
  <div class="controls-wrapper">
    <div class="login" v-if="!isRegistrationBtnTransform">
      <button>Войти</button>
    </div>
    <label class="registration-transform-wrapper" for="email" v-else>
      <div class="registration-transform-item">
        <img src="../../assets/home/mail.svg" alt="">
        <input autocomplete="off" class="registration-transform-item-text" id="email" placeholder="Введите свой email">
      </div>
    </label>
    <div class="registration" @click="registrationTransformBtn">
      <button>Регистрация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "controls",
  data: () => ({
    isRegistrationBtnTransform: false
  }),
  methods: {
    registrationTransformBtn () {
      this.isRegistrationBtnTransform = !this.isRegistrationBtnTransform
    }
  }
}
</script>

<style lang="scss">
  .controls-wrapper {
    display: flex;
    align-items: center;
    .login {
      margin: 0px 7px;
      & button {
        background: none;
        border: none;
        color: #fff;
        font-family: "Exo 2", sans-serif;
        font-size: 1.2em;
        font-weight: 400;
      }
    }
    .registration {
      margin: 0px 7px;
      & button {
        background: #FFC200;
        border-radius: 94px;
        color: #3B4757;
        font-family: "Exo 2", sans-serif;
        font-size: 1.2em;
        font-weight: 400;
        border: none;
        padding: 10px 25px;
        transition-duration: .2s;
        z-index: 11;
        position: relative;
        &:hover {
          box-shadow: 0px 0px 10px 0px #FFC200;
          transition-duration: .2s;
        }
      }
    }
  }
  .registration-transform-item {
    display: flex;
    align-items: center;
    border: 2px solid #fff;
    border-right:none;
    border-top-left-radius: 94px;
    border-bottom-left-radius: 94px;
    padding: 9px 25px;
    z-index: 10;
    position: relative;
    right: -25px;
  }
  .registration-transform-item-text {
    font-family: "Exo 2", sans-serif;
    font-size: 1em;
    color: #fff;
    font-weight: 400;
    border: none;
    background: none;
    margin-left: 10px;
    -webkit-box-shadow: inset 0 0 0 50px transparent;
    // -webkit-text-fill-color: transparent;
    &::placeholder {
      font-family: "Exo 2", sans-serif;
      font-size: 1em;
      color: #fff;
      font-weight: 400;
    }
    &::-webkit-autofill {
      background: none;
    }
  }
</style>