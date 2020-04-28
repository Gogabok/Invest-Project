<template>
  <div class="calendar">
    <transition name="fade-faster" mode="out-in">
      <div class="graph-module-zone">
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
            <div :class="day.date ? `calendar-line-item ${ today === day.unformateDate ? `calendar-line-item-today` : ``}` : `calendar-line-item-empty`" v-for="day in line" :key="day.date + Math.random()">
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
    </transition>
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
    daysInMonth: null,
    startDay: null,
    today: `(${new Date().getFullYear()}, ${new Date().getMonth()}, ${new Date().getDate()})`
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
      this.daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
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
        let eventDate = new Date(day.eventDate).getDay() === 0 ? 6 : new Date(day.eventDate).getDay() - 1
        this.daysData[eventDate].forEach((item, index) => {
          if(item.date === day.date) {
            item.rates = day.rates
          }
        })
      })
      Object.values(this.daysData).forEach((item, index, arr) => {
        if(item[0].date === 1 || index >= this.startDay) {
        } else {
          item.unshift(new Object())
        }
      })
    },
    generateCalendar () {
      for(let i = 1; i <= this.daysInMonth; i++) {
        let day = {
          date: new Date(this.currentYear, this.currentMonth, i).getDate(),
          unformateDate: `(${new Date(this.currentYear, this.currentMonth, i).getFullYear()}, ${new Date(this.currentYear, this.currentMonth, i).getMonth()}, ${new Date(this.currentYear, this.currentMonth, i).getDate()})`
        }
        if(new Date(this.currentYear, this.currentMonth, i).getDay() === 0) {
          this.daysData[6].push(day)
          if(i === 1) {
            this.startDay = 6
          }
        } else {
          this.daysData[new Date(this.currentYear, this.currentMonth, i).getDay() - 1].push(day)
          if(i === 1) {
            this.startDay = new Date(this.currentYear, this.currentMonth, i).getDay() - 1
          }
        }
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
      font-size: .9em;
      
      text-align: center;
      padding: 10px 1px;
      width: calc(100% / 7);
      // margin: 0px 0px 0px -1px;
    }
  }
  .calendar-body {
    display: flex;
    align-items: flex-start;
  }
  .calendar-line {
    width: 100%;
    width: calc(100% / 7)
  }
  .calendar-line-item {
    color: #fff;
    font-weight: bold;
    font-size: 1em;
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: grey; stroke-width: 2;'/></svg>");
    text-align: center;
    padding: 10px 1px;
    margin: -1px 0px 0px 0px !important;
    position: relative;
    padding: 15px 0px 0px 0px;
    & .date {
      position: absolute;
      top: 5px;
      right: 5px;
      font-weight: 400;
    }
  }
  .calendar-line-item-empty {
    padding: 15px 0px 0px 0px;
    margin: -1px 0px 0px -1px;
    // margin: -1px 0px 1px 1px !important;
  }
  .calendar-line-item-today {
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: white; stroke-width: 2; stroke-dasharray: 25 15'/></svg>") !important;
    border: none !important;
  }
  .rates {
    display: flex;
    padding: 10px 0px;
    justify-content: center;
    height: 40px;
    & .rates-up, & .rates-down {
      display: flex;
      align-items: center;
      font-size: 1em;
      border-radius: 3px;
      margin: 0px 2px;
      padding: 3px 6px;
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
  @media screen and (max-width: 1530px) {
    .calendar-nav {
      & .nav-item {
        font-size: .8em;
      }
    }
  }
  @media screen and (max-width: 830px) {
    .rates {
    & .rates-up, & .rates-down {
      padding: 1px 2px;
      }
    }
  }
  @media screen and (max-width: 650px) {
    .calendar-nav, .calendar-body {
      width: 700px;
    }
    .content-item {
      width: 700px;
    }
    .graph-module-zone {
      overflow-x: scroll;
      padding-bottom: 10px;
    }
    .graph-module-zone::-webkit-scrollbar{
      background: rgba(30, 44, 61, 0.7);
      border-radius: 5px;
      height: 5px;
    }
    .graph-module-zone::-webkit-scrollbar-thumb{
      background: rgb(42, 59, 80);
      border-radius: 5px;
    }
  }
</style>