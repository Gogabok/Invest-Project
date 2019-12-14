<template>
  <div class="controls-wrapper">
    <transition name="wrapper-animation" mode="out-in">
      <div class="login width-wrapper" v-if="!isRegistrationBtnTransform" key="login">
        <button>Войти</button>
      </div>
      <div class="width-wrapper" key="registration" v-else>
        <label class="registration-transform-wrapper" for="email">
          <div class="registration-transform-item">
            <img src="../../assets/header/mail.svg" alt="">
            <input autocomplete="off" class="registration-transform-item-text" id="email" placeholder="Введите свой email">
          </div>
        </label>
      </div>
    </transition>
    <div class="registration" 
         :class="isRegistrationBtnTransform ? 'active-btn' : ''"
         @click="!isRegistrationBtnTransform ? registrationTransformBtn() : registerNewUser()">
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
    },
    registerNewUser() {
      alert('register')
    }
  }
}
</script>

<style lang="scss">
  .controls-wrapper {
    display: flex;
    align-items: center;
    width: 440px;
    justify-content: flex-end;
    & * {
        transition-duration: .5s;
      }
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
        font-weight: 600;
        border: none;
        padding: 10px 25px;
        transition-duration: .5s;
        z-index: 11;
        position: relative;
        &:hover {
          box-shadow: 0px 0px 10px 0px #FFC200;
        }
      }
    }
    & .active-btn button {
      background: #fff;
      transition-duration: .5s;
      &:hover {
        box-shadow: 0px 0px 10px 0px #F7F7F7;
      }
    }
  }
  .wrapper-animation-enter, .wrapper-animation-leave-to {
    opacity: 0;
  }
  .registration-transform-item {
    display: flex;
    align-items: center;
    border: 1px solid #fff;
    border-right:none;
    border-top-left-radius: 94px;
    border-bottom-left-radius: 94px;
    padding: 10px 25px;
    z-index: 10;
    position: relative;
    right: -25px;
    cursor: text;
    & img {
      width: 18px;
      height: 15px;
      position: relative;
      top: 1px;
    }
  }
  .registration-transform-item-text {
    font-family: "Exo 2", sans-serif;
    font-size: 1em;
    color: #fff;
    font-weight: 400;
    border: none;
    background: none;
    margin-left: 15px;
    &::placeholder {
      font-family: "Exo 2", sans-serif;
      font-size: 1em;
      color: #fff;
      font-weight: 400;
    }
  }
</style>