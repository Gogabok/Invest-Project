<template>
  <div class="vue-searching">
    <label class="vue-searching-label" for="vue-searching">
      <input @blur="clearError" @keyup.enter="submit" :class="isEmpty ? 'notAnim' : false" v-model="value" class="vue-searching-input" type="text">
      <span v-if="!error" :class="isEmpty ? 'notDisplayed' : false" class="vue-searching-placeholder">{{ placeholder }}</span>
      <span if-else="error" :class="isEmpty ? 'notDisplayed' : false" class="vue-searching-placeholder error">{{ error }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Vue-Searching',
  props: {
    placeholder: {
      type: String,
      default: 'Найти'
    }
  }, 
  data: () => ({
    value: '',
    error: ''
  }),
  computed: {
    isEmpty() {
      return this.value.length > 0
    }
  },
  methods: {
    submit () {
      if(this.value.length <= 0) {
        this.error = 'Поле пустое'
      }
    },
    clearError () {
      this.error = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .vue-searching {
    width: 300px;
    position: relative;
    &:after {
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translate(0, -50%);
      content: '';
      width: 40px;
      height: 40px;
      background: url('../../assets/icons/search.svg') no-repeat center center;
      background-size: 50%;
      cursor: pointer;
    }
    &-label {
      width: 100%;
    }
    &-placeholder {
      position: absolute;
      left: 5px;
      padding: 0px 5px;
      top: 50%;
      transform: translate(0, -50%);
      color: #707070;
      font-family: 'SegoeUI';
      font-weight: 700;
      font-size: 1.5rem;
      pointer-events: none;
      display: flex;
      align-items: center;
      transition-duration: .2s;
      user-select: none;
      &.error {
        color: red;
        transition-duration: 0s;
      }
      &.notDisplayed {
        top: 0px;
        background: #20272B;
        font-size: 1rem;
      }
    }
    &-input {
      background: none;
      border: none;
      border-bottom: 1px solid #F4F4F4;
      padding: 5px 35px 5px 10px;
      width: 100%;
      color: #fff;
      font-family: 'SegoeUI';
      font-weight: 700;
      font-size: 1.5rem;
      height: 40px;
      &:focus {
        padding-top: 10px;
        border: 1px solid #F4F4F4;
        border-radius: 4px;
      }
      &.notAnim:focus {
        padding-top: 5px;
      }
      &.notAnim {
        border: 1px solid #F4F4F4;
        border-radius: 4px;
      }
    }
  }
  .vue-searching-input:focus + .vue-searching-placeholder {
    top: 0px;
    background: #20272B;
    font-size: 1rem;
  }
</style>