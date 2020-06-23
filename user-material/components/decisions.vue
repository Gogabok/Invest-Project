<template>
  <v-simple-table fixed-header dark class="table-dashboard">
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="item in titles" :key="item.title" class="text-left">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: 'DecisionsModule',
  data: () => ({
    titles: [
      {
        title: 'Бот'
      },
      {
        title: 'Тип'
      },
      {
        title: 'Статус'
      },
      {
        title: 'Баланс'
      },
      {
        title: 'Доходность'
      },
      {
        title: 'Статистика'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.table-dashboard {
  margin-top: 15px;
  flex: 1;
  background-color: transparent !important;
  & thead th {
    background: transparent !important;
  }
}
</style>
