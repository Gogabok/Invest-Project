<template>
  <table class="calendar">
    <thead class="calendar-nav">
      <tr>
        <td
          v-for="navItem in navigation"
          :key="navItem.title"
          class="nav-item">
            {{ navItem.title }}
        </td>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</template>

<script>
export default {
  name: "dashboard-deals-calendar",
  data: () => ({
    navigation: [
      {
        title: 'Понедельник'
      },
      {
        title: 'Вторник'
      },
      {
        title: 'Среда'
      },
      {
        title: 'Четверг'
      },
      {
        title: 'Пятница'
      },
      {
        title: 'Суббота'
      },
      {
        title: 'Воскресенье'
      }
    ],
  })
}
</script>

<style lang="scss" scoped>  
  .calendar {
    width: 100%;
    padding: 0px 30px;
  }
  .calendar-nav {
    margin-bottom: 10px;
    & .nav-item {
      color: #fff;
      font-weight: bold;
      font-size: 1em;
      border: 1px solid #92989E;
      border-collapse: collapse;
      text-align: center;
      padding: 10px 4px;
      width: calc(100% / 7)
    }
  }
</style>