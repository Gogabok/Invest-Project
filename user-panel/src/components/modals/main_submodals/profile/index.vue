<template>
  <div class="profile-main-modal">
    <div class="main-modal-wrapper">
      <label for="user-name-input" class="input-container">
        <div class="img">
          <img ondragstart="return false;" src="../../../../assets/modals/icon-user.svg" alt />
        </div>
        <input
          @input="userData.name.isExtraInfo = true"
          v-model="userData.name.value"
          autocomplete="off"
          id="user-name-input"
          name="name"
          type="text"
          placeholder="Ваше имя"
          :disabled="userData.name.isSaved"
          maxlength="20"
        />
        <span
          v-show="userData.name.isExtraInfo && userData.name.value !== userData.name.oldValue && !userData.name.isSaved"
          @click="save(`name`, userData.name.value)"
          class="save"
        >Сохранить</span>
      </label>
      <label for="user-email-input" class="input-container">
        <div class="img">
          <img ondragstart="return false;" src="../../../../assets/modals/icon-mail.svg" alt />
        </div>
        <input
          @input="inputing('email')"
          v-model="userData.email.value"
          autocomplete="off"
          id="user-email-input"
          name="email"
          type="text"
          placeholder="Ваш email"
          :disabled="userData.email.isAccepted"
        />
        <span
          v-show="emailRegularTesting && !userData.email.isSaved && !userData.email.isAccepted"
          @click="save('email', userData.email.value)"
          class="save"
        >
          Сохранить
        </span>
        <span
          v-show="userData.email.isSaved && !userData.email.isAccepted"
          @click="acceptEmail(`email`, userData.email.value)"
          class="accept"
        >Подтвердить</span>
        <span class="ok" v-show="userData.email.isAccepted">
          <img ondragstart="return false;" src="../../../../assets/common/ok.svg" alt="">
        </span>
      </label>
      <label for="user-phone-input" class="input-container">
        <div class="img">
          <img ondragstart="return false;" src="../../../../assets/modals/icon-phone.svg" alt />
        </div>
        <span v-show="String(userData.phone.value).length > 0" class="phone-plus">+</span>
        <input
          @input="validatingPhone"
          v-model="userData.phone.value"
          autocomplete="off"
          id="user-phone-input"
          name="phone"
          type="text"
          placeholder="Ваш телефон"
          :disabled="userData.phone.isAccepted"
        />
        <span
          v-show="phoneRegularTesting && !userData.phone.isSaved && !userData.phone.isAccepted"
          @click="save('phone', userData.phone.value)"
          class="save"
        >
          Сохранить
        </span>
        <span
          v-show="userData.phone.isSaved && !userData.phone.isAccepted"
          @click="acceptPhone(`phone`, userData.phone.value)"
          class="accept"
        >Подтвердить</span>
        <span class="ok" v-show="userData.phone.isAccepted">
          <img ondragstart="return false;" src="../../../../assets/common/ok.svg" alt="">
        </span>
      </label>
      <label for="user-notification-input" class="input-container-text">
        <div class="text-wrapper">
          <p class="title">Получать уведомления о действиях на сервисе</p>
          <p class="desc">Email-уведомления о важных событиях.</p>
        </div>
        <input type="checkbox" id="user-notification-input" name="notify" />
        <label for="user-notification-input"></label>
      </label>
      <label for="user-spam-input" class="input-container-text">
        <div class="text-wrapper">
          <p class="title">Получать сведения о предложениях и акциях</p>
          <p class="desc">Email-рассылки о маркетинговых мероприятиях.</p>
        </div>
        <input type="checkbox" id="user-spam-input" name="notify" />
        <label for="user-spam-input"></label>
      </label>
      <a href="https://www.google.ru/" target="_blank" class="input-container-text notLabel">
        <div class="text-wrapper">
          <p class="title">Условия предоставления услуг</p>
          <p class="desc">Пользовательское соглашение, политика конфиденциальности и пр.</p>
        </div>
        <img class="share" ondragstart="return false;" src="../../../../assets/modals/icon-share.svg" alt />
      </a>
      <div @click="changePassword" class="input-container-text notLabel">
        <div class="text-wrapper">
          <p class="title">Изменить пароль</p>
          <p class="desc">Сброс или изменение пароля.</p>
        </div>
        <img
          class="right-arrow"
          ondragstart="return false;"
          src="../../../../assets/common/arrow-right-gray.svg"
          alt
        />
      </div>
      <div @click="deleteAccount" class="input-container-text notLabel">
        <div class="text-wrapper">
          <p class="title">Удалить свою учетную запись</p>
          <p class="desc">Начать удаление учетной записи.</p>
        </div>
        <img
          class="right-arrow"
          ondragstart="return false;"
          src="../../../../assets/common/arrow-right-gray.svg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-main-modal",
  data: () => ({
    userData: {
      name: {
        oldValue: "",
        value: null,
        isExtraInfo: false,
        isSaved: false,
      },
      email: {
        oldValue: "",
        value: null,
        isExtraInfo: false,
        isSaved: false,
        isAccepted: false
      },
      phone: {
        oldValue: "",
        value: null,
        isExtraInfo: false,
        isSaved: false,
        isAccepted: false
      }
    }
  }),
  mounted() {
    Object.keys(this.userData).forEach(item => {
      this.userData[item].value = this.userData[item].oldValue;
    });
  },
  computed: {
    emailRegularTesting() {
      let emailRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (
        this.userData.email.isExtraInfo &&
        this.userData.email.value !== this.userData.email.oldValue
      ) {
        return emailRegular.test(
          String(this.userData.email.value).toLowerCase()
        );
      } else {
        return false;
      }
    },
    phoneRegularTesting() {
      let phoneRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
      if (
        this.userData.phone.isExtraInfo &&
        this.userData.phone.value !== this.userData.phone.oldValue
      ) {
        return phoneRegular.test(
          String(this.userData.phone.value).toLowerCase()
        );
      } else {
        return false;
      }
    },
    codeEmail: function () {
      return this.$store.getters["modalStore/codes"].email
    },
    codePhone: function () {
      return this.$store.getters["modalStore/codes"].phone
    }
  },
  watch: {
    codeEmail: function () {
      this.userData.email.isAccepted = true
    },
    codePhone: function () {
      this.userData.phone.isAccepted = true
    }
  },
  methods: {
    inputing(input) {
      this.userData[input].isExtraInfo = true 
      this.userData[input].isSaved = false
    },
    // Хз нужен ли `input`
    save(input, data) {
      // отправляем данные инпута в базу данных
      if (input && data) {
        if("isSaved" in this.userData[input]) {
          this.userData[input].isSaved = true
          if(input === 'name') {

          }
        }
        console.log(`Новое значение поля '${input}' - ${data}`);
      } else {
        alert("Пожалуйста, заполните поле");
      }
    },
    deleteAccount () {
      this.$store.dispatch("modalStore/ADD_MODAL", 
        {
          link: 'codeVerification',
          info: {
            input: 'deleteAccount',
            title: 'Удаление учетной записи',
            desc: 'Сделав запрос на эл. почту отправится подтверждение. Удаление возможно при балансе менее $15.',
            btn: 'deleteAccount',
            code: '0000'
          }
        }
      )
    },
    changePassword () {
      this.$store.dispatch("modalStore/ADD_MODAL", 
        {
          link: 'codeVerification',
          info: {
            input: 'changePassword',
            title: 'Восстановление/Изменение пароля',
            desc: 'Сделав запрос на эл. почту отправится подтверждение, требуется перейти по ссылке в течении 24 часов.',
            btn: 'changePassword'
          }
        }
      )
    },
    acceptEmail() {
      this.$store.dispatch("modalStore/ADD_MODAL", 
        {
          link: 'codeVerification',
          info: {
            input: 'email',
            title: 'Запрос отправлен! Введите код из Email',
            desc: 'Введите четырехзначный код, отправленный на Email',
            code: '0000'
          }
        }
      )
    },
    acceptPhone() {
      this.$store.dispatch("modalStore/ADD_MODAL", 
        {
          link: 'codeVerification',
          info: {
            input: 'phone',
            title: 'Запрос отправлен! Введите код из SMS',
            desc: 'Введите четырехзначный код отправленный на телефон.',
            code: '1234'
          }
        }
      )
    },
    validatingPhone() {
      this.userData.phone.isExtraInfo = true;
      this.userData.phone.value = this.userData.phone.value.replace(
        /[^\d]/g,
        ""
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e4e4e4;
  padding: 15px 0px;
  cursor: text;
  user-select: none;
  & .img {
    min-width: 50px;
    max-width: 50px;
    width: 100%;
    text-align: center;
  }
  & .ok img {
    width: 25px;
    margin: 0px 22px;
    user-select: none;
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
    color: #302d2b;
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    &::placeholder {
      color: rgba(112, 112, 112, 0.7);
    }
    &[disabled] {
      opacity: 0.8;
      user-select: none;
      pointer-events: none;
      cursor: default;
    }
  }
  & span.accept {
    margin: 0px 10px;
    margin-left: auto;
    cursor: pointer;
    color: #df4545;
    font-size: 0.9em;
  }
  & span.save {
    margin: 0px 10px;
    margin-left: auto;
    cursor: pointer;
    color: rgba(112, 112, 112, 0.7);
    font-size: 0.9em;
  }
  & span.phone-plus {
    font-size: 1.2em;
    color: #302d2b;
    width: 0px;
    margin-left: -2px;
    margin-right: 2px;
  }
}
.input-container-text {
  &.notLabel {
    cursor: pointer;
    &:hover {
      background: #EEFAFC;
    }
    & img.share {
      margin-right: -5px;
    }
    & img.right-arrow {
      margin-right: 3px;
    }
  }
  text-decoration: none;
  outline: none;
  transition-duration: .2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  user-select: none;
  cursor: pointer;
  // margin: 15px 0px;
  border-bottom: 1px solid #e4e4e4;
  padding: 15px 20px;
  & .text-wrapper {
    width: 100%;
    & .title {
      color: #302d2b;
      font-size: 1.2em;
    }
    & .desc {
      color: #302d2b;
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
    right: 20px;
    transform: translate(0%, -50%);
    -webkit-appearance: none;
    border: 3px solid #c8c8c8;
    background-color: #fff;
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
    }
  }
  & input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
  & input[type="checkbox"]:checked + label {
    background-color: #379a1d;
    border: 1px solid #c8c8c8;
  }
}
.main-modal-wrapper .notLabel:last-child {
  border: none;
}
@media screen and (max-width: 630px) {
  .input-container {
    border-bottom: 1px solid #e4e4e4;
    padding: 7px 0px;
    margin: 10px 0px;
    & input {
      margin: 0px 3px;
      font-size: 1em;
    }
    & span.accept {
      margin: 0px 5px;
    }
    & span.save {
      margin: 0px 5px;
    }
    & span.phone-plus {
      font-size: 1em;
      margin-left: -6px;
      margin-right: 6px;
    }
  }
  .input-container-text {
    margin: 10px 0px;
    border-bottom: 1px solid #e4e4e4;
    padding: 7px 10px;
    &.notLabel {
      img {
        width: 20px;
        cursor: pointer;
        &.right-arrow {
          width: 10px;
          margin-right: 1px;
        }
      }
    }
    & .text-wrapper {
      & .title {
        font-size: 1em;
      }
      & .desc {
        font-size: 0.9em;
      }
    }
    & label {
      border: 1px solid #c8c8c8;
      width: 20px;
      height: 20px;
      right: 7px;
      &:after {
        width: 9px;
        height: 4px;
        top: 5px;
        right: 3.5px;
        border: 2px solid #fff;
        border-radius: 0px;
        border-top: none;
        border-right: none;
      }
    }
  }
}
</style>