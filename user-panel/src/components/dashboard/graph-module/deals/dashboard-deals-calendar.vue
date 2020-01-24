<template>
  <div class="calendar">
    <div class="calendar-nav">
      <div
        v-for="navItem in navigation"
        :key="navItem.title"
        class="nav-item">
          {{ navItem.title }}
      </div>
    </div>
    <div class="calendar-body">
      <div class="calendar-line" v-for="(line, index) in Object.values(daysData)" :key="index + Math.random()">
        <div class="calendar-line-item" v-for="day in line" :key="day.date + Math.random()">
          <span class="date">{{ day.date }}</span>
          <div class="rates">
            <div class="rates-up" v-if="day.rates">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>{{ day.rates.up }}</span>
            </div>
            <div class="rates-down" v-if="day.rates">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>{{ day.rates.down }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import calendarData from "@/server/calendar.json"
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
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    daysData: {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
    currentMonth: null,
    currentYear: null,
    daysInMonth: null
  }),
  mounted() {
    // Нужно получать данные за весь год массивом из 12 элементов - по месяцам. 
    // После этого засунуть его в Pagination.mixin и разделить на 12 страниц соответственно
    // + Предполагаю, что нужно сделать выбор года, после ввода которого, будет происходить запрос к базе

    this.getData(calendarData)
    this.updatingDate(calendarData)
    this.generateCalendar()
    this.fillingCalendar(calendarData)
  },
  methods: {
    getData(data) {
      this.currentYear = new Date(data[0].eventDate).getFullYear()
      this.currentMonth = new Date(data[0].eventDate).getMonth()
      this.daysInMonth = new Date(this.currentYear, this.currentMonth, 0).getDate()
    },
    updatingDate(data) {
      data.forEach(day => {
        day.date = new Date(day.eventDate).getDate()
        day.day = new Date(day.eventDate).getDay()
        day.month = new Date(day.eventDate).getMonth()
        day.year = new Date(day.eventDate).getFullYear()
      });
    },
    fillingCalendar (data) {
      data.forEach(day => {
        this.daysData[new Date(day.eventDate).getDay()].forEach((item, index) => {
          if(item.date === day.date) {
            item.rates = day.rates
          }
        })
      })
      Object.values(this.daysData).forEach((item, index, arr) => {
        if(arr[index] < arr[index - 1]) {
          arr[index].push(new Object())
        }
      })
      console.log(this.daysData)
    },
    generateCalendar () {
      for(let i = 1; i <= this.daysInMonth; i++) {
        let day = {
          date: new Date(this.currentYear, this.currentMonth, i).getDate()
        }
        this.daysData[new Date(this.currentYear, this.currentMonth, i).getDay()].push(day)
      }
    }
  }
}
</script>

<style lang="scss" scoped>  
  .calendar {
    width: 100%;
    padding: 0px 0px;
    & * {
     user-select: none; 
    }
  }
  .calendar-nav {
    display: flex;
    & .nav-item {
      color: #fff;
      font-weight: bold;
      font-size: 1em;
      border: 1px solid #92989E;
      border-collapse: collapse;
      text-align: center;
      padding: 10px 1px;
      width: calc(100% / 7);
      margin: -1px 0px 0px -1px;
    }
  }
  .calendar-body {
    display: flex;
    align-items: flex-end;
  }
  .calendar-line {
    width: 100%;
    width: calc(100% / 7)
  }
  .calendar-line-item {
    color: #fff;
    font-weight: bold;
    font-size: 1em;
    border: 1px solid #92989E;
    border-collapse: collapse;
    text-align: center;
    padding: 10px 1px;
    margin: -1px 0px -1px -1px !important;
  }
  .rates {
    display: flex;
    padding: 10px 0px;
    justify-content: center;
    height: 20px;
    & .rates-up, & .rates-down {
      display: flex;
      align-items: center;
      font-size: 1.1em;
      border-radius: 3px;
      margin: 0px 2px;
      padding: 2px 2px;
      & img {
        margin-right: 2px;
      }
    }
    & .rates-up {
      background: #379A1D;
    }
    & .rates-down {
      background: #EF5350;
    }
  }
  .calendar-line-item {
    position: relative;
    padding: 15px 0px 0px 0px;
    & .date {
      position: absolute;
      top: 5px;
      right: 5px;
      font-weight: 400;
    }
  }
</style>