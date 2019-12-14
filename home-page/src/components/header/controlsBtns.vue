<template>
  <div class="controls-wrapper">
    <transition name="wrapper-animation" mode="out-in">
      <div class="login width-wrapper" 
           v-if="!inputTransform"
           key="login">
        <button @click="loginTransformBtn">Войти</button>
      </div>
      <div class="width-wrapper" key="registration" v-else>
        <label class="registration-transform-wrapper" 
               for="email"
               v-if="!login.isPutedEmail && !register.isPutedEmail"
               >
          <div 
              class="registration-transform-item" 
          >
            <img src="../../assets/header/mail.svg" alt="">
            <input 
                  autocomplete="off" 
                  class="registration-transform-item-text" 
                  id="email" 
                  name="email"
                  placeholder="Введите свой email"
                  value=""
                  key="email-input"
                  @input="emailValue($event.target)">
          </div>
        </label>
        <label 
              class="registration-transform-wrapper" 
              for="password" 
              v-else
        >
          <div 
                class="registration-transform-item"
            >
              <img src="../../assets/header/mail.svg" alt="">
              <input 
                    autocomplete="off" 
                    class="registration-transform-item-text" 
                    name="password"
                    id="password" 
                    placeholder="Введите свой пароль"
                    value=""
                    key="password-input"
                    @input="passwordValue($event.target)"
                    >
            </div>
        </label>
      </div>
    </transition>
    <transition name="wrapper-animation" mode="out-in">
      <div v-if="!login.isTransformed"
          class="registration" 
          :class="register.isTransformed ? 'active-btn' : ''"
          @click="!register.isTransformed ? registrationTransformBtn() : registerNewUser()">
        <button>Регистрация</button>
      </div>
      <div v-else
          class="registration" 
          :class="login.isTransformed ? 'active-btn' : ''"
          @click="loginUser">
        <button>Войти</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "controls",
  data: () => ({
    inputTransform: false,
    // isRegistrationBtnTransform: false,
    // isLoginBtnTransform: false,
    login: {
      isTransformed: false,
      isPutedEmail: false,
      email: '',
      password: ''
    },
    register: {
      isTransformed: false,
      isPutedEmail: false,
      email: '',
      password: ''
    }
  }),
  methods: {
    registrationTransformBtn () {
      this.register.isTransformed = !this.register.isTransformed
      this.inputTransform = !this.inputTransform
    },
    registerNewUser () {
      if(!this.register.isPutedEmail) {
        if(this.register.email) {
          this.register.isPutedEmail = true
        } else {
          alert("Пожалуйста, заполните поле 'Email'")
        }
      } else if(this.register.isPutedEmail && !this.register.password) {
        alert("Пожалуйста, заполните поле 'Пароль'")
      } else if(this.register.isPutedEmail && this.register.password) {
        console.log({
          User: {
            email: this.register.email,
            password: this.register.password
          }
        })
      }
    },
    loginTransformBtn () {
      this.login.isTransformed = !this.login.isTransformed
      this.inputTransform = !this.inputTransform
    },
    loginUser () {
      if(!this.login.isPutedEmail) {
        if(this.login.email) {
          this.login.isPutedEmail = true
        } else {
          alert("Пожалуйста, заполните поле 'Email'")
        }
      } else if(this.login.isPutedEmail && !this.login.password) {
        alert("Пожалуйста, заполните поле 'Пароль'")
      } else if(this.login.isPutedEmail && this.login.password) {
        console.log({
          User: {
            email: this.login.email,
            password: this.login.password
          }
        })
      }
    },
    emailValue (e) {
      this.login.isTransformed ? this.login.email = e.value : this.register.email = e.value
    },
    passwordValue (e) {
      this.login.isTransformed ? this.login.password = e.value : this.register.password = e.value
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
        transition-duration: .2s;
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
        padding: 10px 0px;
        width: 170px;
        transition-duration: .2s;
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