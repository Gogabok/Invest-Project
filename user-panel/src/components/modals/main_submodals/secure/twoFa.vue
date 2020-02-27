<template>
  <div class="secure-main-modal-twofa">
    <label :class="item.isActivate ? 'active' : ''" class="item" :for="item.techLink" v-for="item in inputs" :key="item.techLink">
      <p class="title">{{ item.title }}</p>
      <input @input="selecting(item)" :value="item.techLink" v-model="activeInput" type="radio" :id="item.techLink" name="security-input" />
      <label :for="item.techLink"></label>
    </label>
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
        isActivate: false
      },
      {
        title: "SMS",
        techLink: "sms",
        isActivate: false
      },
      {
        title: "Моб. приложение",
        techLink: "application",
        isActivate: false
      }
    ],
    activeInput: null
  }),
  methods: {
    selecting(payload) {
      console.log(payload)
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
</style>