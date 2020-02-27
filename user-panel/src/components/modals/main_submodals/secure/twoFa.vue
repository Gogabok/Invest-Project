<template>
  <div class="secure-main-modal-twofa">
    <label :class="item.isActivate ? 'active' : ''" class="item" :for="item.techLink" v-for="item in inputs" :key="item.techLink">
      <p class="title">{{ item.title }}</p>
      <input :ref="item.techLink" @click="selecting(item)" v-model="activeInput" :checked="item.isActivate" :value="item.techLink" type="radio" :id="item.techLink" name="security-input" />
      <label :for="item.techLink"></label>
    </label>
    <div class="phoneSettings" v-if="phoneSettings.isShow">
      <div class="item">
        <p class="title">Авторизация</p>
        <div class="toggle-wrapper">
          <div :class="phoneSettings.isAuth ? 'active' : false" @click="authSelect(true)" class="toggle-wrapper-item">
            Да
          </div>
          <div :class="!phoneSettings.isAuth ? 'active' : false" @click="authSelect(false)" class="toggle-wrapper-item">
            Нет
          </div>
        </div>
      </div>
      <div class="item">
        <p class="title">Вывод денег</p>
        <div class="toggle-wrapper">
          <div :class="phoneSettings.isOutput ? 'active' : false" @click="outputSelect(true)" class="toggle-wrapper-item">
            Да
          </div>
          <div :class="!phoneSettings.isOutput ? 'active' : false" @click="outputSelect(false)" class="toggle-wrapper-item">
            Нет
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "secure-main-modal-twofa",
  data: () => ({
    inputs: [
      {
        title: "Отключено",
        techLink: "disabled",
        isActivate: false
      },
      {
        title: "Email",
        techLink: "email",
        isActivate: false,
        isAccepted: false
      },
      {
        title: "SMS",
        techLink: "phone",
        isActivate: false,
        isAccepted: false
      },
      {
        title: "Моб. приложение",
        techLink: "application",
        isActivate: false
      }
    ],
    phoneSettings: {
      isShow: false,
      isAuth: false,
      isOutput: true
    },
    activeInput: "disabled"
  }),
  mounted() {
    if(!isActiveInput) {
      this.activeInput = 'disabled'
    }
    let isActiveInput = this.inputs.find(item => item.techLink === this.activeInput)
    isActiveInput.isActivate = true
  },
  computed: {
    codeEmailSecureFa: function () {
      return this.$store.getters["modalStore/codes"].emailTwoFa
    },
    codePhoneSecureFa: function () {
      return this.$store.getters["modalStore/codes"].phoneTwoFa
    }
  },
  watch: {
    activeInput: function () {
      this.phoneSettings.isShow = this.activeInput === 'phone' ? true : false
    },
    codeEmailSecureFa: function () {
      let emailItem = this.inputs.find(item => item.techLink === 'email')
      emailItem.isAccepted = true
      emailItem.isActivate = true
      this.activeInput = emailItem.techLink
    },
    codePhoneSecureFa: function () {
      let phoneItem = this.inputs.find(item => item.techLink === 'phone')
      phoneItem.isAccepted = true
      phoneItem.isActivate = true
      this.activeInput = phoneItem.techLink
    },
  },
  methods: {
    authSelect (bool) {
      this.phoneSettings.isAuth = bool
    },
    outputSelect (bool) {
      this.phoneSettings.isOutput = bool
    },
    selecting(payload) {
      let oldVal = this.activeInput
      setTimeout(() => {
        this.activeInput = oldVal
      }, 0);
      this.inputs.forEach(item => {
        item.isActivate = false
        item.isAccepted = false
      })
      payload.isActivate = false
      if(payload.techLink === 'email') {
        this.$store.dispatch("modalStore/ADD_MODAL", 
          {
            link: 'codeVerification',
            info: {
              input: 'emailTwoFa',
              title: 'Введите цифры из Email!',
              desc: 'Введите четырехзначный код отправленный на Email.',
              code: '1234'
            }
          }
        )
      } else if(payload.techLink === 'phone') {
        this.$store.dispatch("modalStore/ADD_MODAL", 
          {
            link: 'codeVerification',
            info: {
              input: 'phoneTwoFa',
              title: 'Введите цифры из SMS!',
              desc: 'Это сообщение появилось в связи с вашей настройкой 2FA подтверждения выплаты через код из SMS',
              code: '1234'
            }
          }
        )
      } else if(payload.techLink === 'application') {
        this.$store.dispatch("modalStore/ADD_MODAL", 
          {
            link: 'codeVerification',
            info: {
              input: 'application',
              title: 'Установите приложение и авторизуйтесь!',
              desc: 'Для активации 2FA через моб. приложение перейдите в соответствующую вкладку и следуйте указанным инструкциям. Это наиболее надежный и удобный способ использования 2FA.'
            }
          }
        )
      } else if(payload.techLink === 'disabled') {
        setTimeout(() => {
          this.activeInput = payload.techLink
          payload.isActivate = true
        }, 0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.secure-main-modal-twofa {
  margin-top: 30px;
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
    border-bottom: 1px solid #e4e4e4;
    padding: 20px 20px;
    color: rgba(48, 45, 43, .5);
    transition-duration: .2s;
    &.active {
      color: rgba(48, 45, 43, 1);
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
      border: 2px solid #c8c8c8;
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
      background-color: #fff;
      border: 2px solid #379a1d;
    }
  }
}
.phoneSettings {
  max-width: 100%;
  border: 2px solid #E4E4E4;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 20px auto 10px auto;
  & .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: 5px 0px;
    & .title {
      color: #302D2B;
      font-weight: 400;
      font-size: 1.1em;
    }
    & .toggle-wrapper {
      display: flex;
      align-items: center;
      border: none;
      &-item {
        margin: 0px 0px;
        padding: 5px 5px;
        width: 50px;
        text-align: center;
        border: 2px solid #379A1D;
        font-size: 1em;
        color: #379A1D;
        font-weight: 600;
        background: transparent;
        cursor: pointer;
        transition-duration: .2s;
        &.active {
          background: #379A1D;
          color: #fff;
        }
      }
      &-item:first-child {
        // border-right: transparent;
        margin-right: -1px;
      }
    }
  }
}
</style>