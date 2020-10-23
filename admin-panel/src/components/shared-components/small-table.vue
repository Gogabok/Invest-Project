<template>
  <div :class="clazz" class="small-table">
    <div class="small-table-caption" v-if="data.title || data.captionDesc">
      <h2  v-if="data.title" class="small-table-caption-title">{{ data.title }}</h2>
      <h3  v-if="data.captionDesc" class="small-table-caption-desc">{{ data.captionDesc }}</h3>
    </div>
    <table class="small-table-labels">
      <tr v-for="label in data.labels" :key="label.name" class="small-table-labels-item">
        <td class="small-table-labels-item-name">{{ label.name }}</td>
        <td class="small-table-labels-item-value">{{ label.value }}</td>
      </tr>
    </table>
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
  .width25 {
    max-width: calc(25% - 40px);
    width: 100%;
    &.values-underlined .small-table-labels-item-value {
      text-decoration: underline;
    }
  }
  .small-table {
    // border: 1px solid #F3F4F4;
    margin: 0px 20px;
    &-caption {
      display: flex;
      align-items: center;
      &-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: #F3F4F4;
      }
      &-desc {
        font-size: 1.8rem;
        font-weight: 700;
        color: #F3F4F4;
        margin-left: auto;
      }
    }
    &-labels {
      border: 1px solid #8C8F92;
      border-bottom: none;
      margin-top: 10px;
      max-width: 100%;
      width: 100%;
      &-item {
        border-bottom: 1px solid #8C8F92;
        max-width: 100%;
        width: 100%;
        &-name {
          font-size: 1.8rem;
          font-weight: 400;
          color: #F3F4F4;
          padding: 10px 15px;
          border-right: 1px solid #8C8F92;
          word-wrap: break-word;
          max-width: 200px;
        }
        &-value {
          font-size: 1.8rem;
          font-weight: 400;
          color: #F3F4F4;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          word-wrap: break-word;
          max-width: 200px;
        }
      }
    }
  }
</style>