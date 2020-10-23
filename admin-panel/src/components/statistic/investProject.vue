<template>
  <div class="investProject">
    <div class="small-tables">
      <smallTable :clazz="`width20`" v-for="table in tables" :key="table.title" :data="table"></smallTable>
    </div>
  </div>
</template>

<script>
import smallTable from "@/components/shared-components/small-table"
export default {
  name: "StatisticSubMenuInvestProject",
  components: {
    smallTable
  },
  data: () => ({
    tables: [
      {
        title: "Пользователи",
        captionDesc: false,
        labels: [
          {
            name: "Всего",
            value: 0
          },
          {
            name: "С балансом",
            value: 0
          },
          {
            name: "По реферальной ссылке",
            value: 0
          },
          {
            name: "Новых за 30 дней",
            value: 0
          },
          {
            name: "Новых за 7 дней",
            value: 0
          },
          {
            name: "Новых за 24 часа",
            value: 0
          },
        ]
      }
    ]
  })
}
</script>


<style lang="scss" scoped>
  .small-tables {
    display: flex;
    align-items: flex-start;
  }
</style>