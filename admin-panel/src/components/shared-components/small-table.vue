<template>
  <div :class="clazz" class="small-table">
    <div class="small-table-caption" v-if="data.title || data.captionDesc">
      <h2  v-if="data.title" class="small-table-title">{{ data.title }}</h2>
      <h3  v-if="data.captionDesc" class="small-table-caption-desc">{{ data.captionDesc }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "smallTable",
  props: {
    data: {
      type: Object,
      default: {
        title: 'Произошла ошибка'
      },
      required: true
    },
    clazz: String
  }
}
</script>

<style lang="scss" scoped>
  .width20 {
    max-width: 20%;
    width: 100%;
  }
  .small-table {
    // border: 1px solid #F3F4F4;
  }
</style>