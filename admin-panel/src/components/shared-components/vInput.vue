<template>
  <label class="vInput" :for="$data._id">
    <span class="vInput-label" v-if="label">{{ label }}</span>
    <input @input="$emit('input', $event.target.value)" class="vInput-input" :placeholder="placeholder" type="text" :id="$data._id" v-if="$data._id">
    <span class="vInput-error" v-if="error"><v-icon class="icon" name="exclamation-triangle"></v-icon> {{ error }}</span>
  </label>
</template>

<script>
export default {
  name: "vInput",
  data: () => ({
    _id: null
  }),
  props: {
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: true,
      default: ''
    },
    error: {
      type: [String, Boolean],
      required: false
    }
  },
  mounted(){
    this.$data._id = _.uniqueId()
  }
 }
</script>

<style lang="scss" scoped>
  .vInput {
    display: flex;
    flex-direction: column;
    width: 100%;
    &-label {
      font-size: 1.8rem;
      color: #F3F4F4;
      font-weight: 600;
    }
    &-input {
      border: 1px solid #8C8F92;
      padding: 12px 12px;
      background: transparent;
      color: #F3F4F4;
      font-size: 1.8rem;
      margin: 10px 0px 5px 0px;
      width: 100%;
      &::placeholder {
        color: #707070;
      }
    }
    &-error {
      color: red;
      font-size: 1.3rem;
      & .icon {
        margin-right: 5px;
      }
    }
  }
</style>