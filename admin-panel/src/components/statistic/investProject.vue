<template>
  <div class="investProject">
    <div class="small-tables">
      <smallTable :clazz="dynamicTableClass(table)" v-for="table in tables" :key="table.title" :data="table"></smallTable>
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
      },
      {
        title: "Показатели",
        captionDesc: false,
        labels: [
          {
            name: "Инвестировано за все время",
            value: 0
          },
          {
            name: "Текущий баланс пользователей",
            value: 0
          },
          {
            name: "Дивидендов за все время",
            value: 0
          },
          {
            name: "Выплачено дивидендов",
            value: 0
          },
          {
            name: "Ожидание пополнения счета",
            value: 0
          },
          {
            name: "Ожидание вывода депозита",
            value: 0
          },
        ]
      },
      {
        title: "Баланс на кошельках",
        extraClass: 'values-underlined',
        captionDesc: '$5000',
        labels: [
          {
            name: "Яндекс.Деньги",
            value: '₽0'
          },
          {
            name: "QIWI",
            value: '₽0'
          },
          {
            name: "Банковская карта",
            value: '$0 / ₽0'
          },
          {
            name: "Payeer",
            value: '$0'
          },
          {
            name: "PerfectMoney",
            value: '$0'
          },
          {
            name: "AdvCash",
            value: '$0 / ₽0'
          },
        ]
      },
      {
        title: "Баланс на решениях",
        extraClass: 'values-underlined',
        captionDesc: '$5000',
        labels: [
          {
            name: "Binance",
            value: '₽0'
          },
          {
            name: "Forex",
            value: '₽0'
          },
          {
            name: "Fondbirj",
            value: '$0'
          },
          {
            name: "Betfair",
            value: '$0'
          },
          {
            name: "Maining 2.0",
            value: '$0'
          },
          {
            name: "Traiding",
            value: '$0'
          },
        ]
      },
    ]
  }),
  methods: {
    dynamicTableClass(table) {
      let new_class = 'width25'
      if(table.extraClass) {
        new_class += ` ${table.extraClass}`
      }
      return new_class
    }
  }
}
</script>


<style lang="scss" scoped>
  .small-tables {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 20px 0px;
  }
</style>