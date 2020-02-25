<template>
  <div class="profile-main-modal">
    <div class="main-modal-wrapper">
      <label for="user-name-input" class="input-container">
        <div class="img">
          <img ondragstart="return false;" src="../../../../assets/modals/icon-user.svg" alt="">
        </div>
        <input @input="userData.name.isExtraInfo = true" v-model="userData.name.value" autocomplete="off" id="user-name-input" name="name" type="text" placeholder="Ваше имя">
        <span v-show="userData.name.isExtraInfo && userData.name.value !== userData.name.oldValue" @click="save(`name`, userData.name.value)" class="save">Сохранить</span>
      </label>
      <label for="user-email-input" class="input-container">
        <div class="img">
          <img ondragstart="return false;" src="../../../../assets/modals/icon-mail.svg" alt="">
        </div>
        <input @input="userData.email.isExtraInfo = true" v-model="userData.email.value" autocomplete="off" id="user-email-input" name="email" type="text" placeholder="Ваш email">
        <span v-show="emailRegularTesting" @click="acceptEmail(`email`, userData.email.value)" class="accept">Подтвердить</span>
      </label>
      <label for="user-phone-input" class="input-container">
        <div class="img">
          <img ondragstart="return false;" src="../../../../assets/modals/icon-phone.svg" alt="">
        </div>
        <span v-show="String(userData.phone.value).length > 0" class="phone-plus">+</span>
        <input @input="validatingPhone" v-model="userData.phone.value" autocomplete="off" id="user-phone-input" name="phone" type="text" placeholder="Ваш телефон">
        <span v-show="phoneRegularTesting" @click="acceptPhone(`phone`, userData.phone.value)" class="accept">Подтвердить</span>
      </label>





      <label for="user-notification-input" class="input-container-text">
        <div class="text-wrapper">
          <p class="title">Получать уведомления о действиях на сервисе</p>
          <p class="desc">Email-уведомления о важных событиях.</p>
        </div>
        <input type="checkbox" id="user-notification-input" name="notify">
        <label for="user-notification-input"></label>
      </label>
      <label for="user-spam-input" class="input-container-text">
        <div class="text-wrapper">
          <p class="title">Получать сведения о предложениях и акциях</p>
          <p class="desc">Email-рассылки о маркетинговых мероприятиях.</p>
        </div>
        <input type="checkbox" id="user-spam-input" name="notify">
        <label for="user-spam-input"></label>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-main-modal',
  data: () => ({
    userData: {
      name: {
        oldValue: '',
        value: null,
        isExtraInfo: false
      },
      email: {
        oldValue: '',
        value: null,
        isExtraInfo: false
      },
      phone: {
        oldValue: '',
        value: null,
        isExtraInfo: false
      }
    }
  }),
  mounted() {
    Object.keys(this.userData).forEach(item => {
      this.userData[item].value = this.userData[item].oldValue
    })
  },
  computed: {
    emailRegularTesting() {
      let emailRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.userData.email.isExtraInfo && this.userData.email.value !== this.userData.email.oldValue) {
        return emailRegular.test(String(this.userData.email.value).toLowerCase())
      } else {
        return false
      }
    },
    phoneRegularTesting() {
      let phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
      if(this.userData.phone.isExtraInfo && this.userData.phone.value !== this.userData.phone.oldValue) {
        return phoneRegular.test(String(this.userData.phone.value).toLowerCase())
      } else {
        return false
      }
    },
  },
  methods: {
    // Хз нужен ли `input`
    save(input, data) {
      // отправляем данные инпута в базу данных
      if(input && data) {
        alert(`Новое значение поля '${input}' - ${data}` )
      } else {
        alert('Пожалуйста, заполните поле')
      }
    },
    acceptEmail() {
      alert("Вызывается модальное окно с подтверждением почты")
    },
    acceptPhone() {
      alert("Вызывается модальное окно с подтверждением телефона")
    },
    validatingPhone () {
      this.userData.phone.isExtraInfo = true
      this.userData.phone.value = this.userData.phone.value.replace(/[^\d]/g,'')
    }
  },
}
</script>

<style lang="scss" scoped>
  .input-container {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #E4E4E4;
    padding: 10px 0px;
    margin: 15px 0px;
    cursor: text;
    user-select: none;
    & .img {
      min-width: 50px;
      max-width: 50px;
      width: 100%;
      text-align: center;
    }
    & img {
      margin: 0px 10px;
    }
    & input {
      margin: 0px 10px;
      border: none;
      background: none;
      font-size: 1.2em;
      font-weight: 400;
      width: 100%;
      color: #302D2B;
      -webkit-box-shadow: inset 0 0 0 50px #fff;
      &::placeholder {
        color: rgba(112, 112, 112, .7);
      }
    }
    & span.accept {
      margin: 0px 10px;
      margin-left: auto;
      cursor: pointer;
      color: #DF4545;
      font-size: .9em;
    }
    & span.save {
      margin: 0px 10px;
      margin-left: auto;
      cursor: pointer;
      color: rgba(112, 112, 112, .7);
      font-size: .9em;
    }
    & span.phone-plus {
      font-size: 1.2em;
      color: #302D2B;
      width: 0px;
      margin-left: -5px;
      margin-right: 5px;
    }
  }
  .input-container-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    user-select: none;
    cursor: pointer;
    margin: 15px 0px;
    border-bottom: 2px solid #E4E4E4;
    padding: 10px 0px;
    & .text-wrapper {
      width: 100%;
      & .title {
        color: #302D2B;
        font-size: 1.2em;
      }
      & .desc {
        color: #302D2B;
        font-size: 1.1em;
      }
    }
    & input {
      margin: 0px 20px;
      visibility: hidden;
    }
    & label {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0%, -50%);
      -webkit-appearance: none;
      border: 3px solid #C8C8C8;
      background-color:#fff;
      white-space: nowrap;
      width:30px;
      height:30px;
      border-radius: 50%;
      transition: opacity .2s;
      &:after {
        opacity: 0;
        content: '';
        position: absolute;
        width: 14px;
        height: 7px;
        background: transparent;
        top: 7px;
        right: 5px;
        border: 3px solid #fff;
        border-radius: 1px;
        border-top: none;
        border-right: none;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        transition: opacity .2s;
      }
    }
    & input[type=checkbox]:checked + label:after {
      opacity: 1;
    }
    & input[type=checkbox]:checked + label {
      background-color:#379A1D;
      border: 1px solid #C8C8C8;
    }
  }
</style>