<template>
  <button @click="$emit('click')" class="Btn">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .Btn {
    padding: 12px;
    color: #F3F4F4;
    border: 1px solid #F3F4F4;
    cursor: pointer;
    background: transparent;
    font-size: 1.8rem;
    margin-top: 24px;
  }
</style>