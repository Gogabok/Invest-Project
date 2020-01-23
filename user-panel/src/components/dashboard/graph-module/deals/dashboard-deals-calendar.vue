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
      <div class="calendar-line">
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-line">
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
            </div>
          </div>
        </div>
        <div class="calendar-line-item">
          <span class="date">1</span>
          <div class="rates">
            <div class="rates-up">
              <img :src="`./assets/common/arrow-up-white.svg`" alt="">
              <span>6</span>
            </div>
            <div class="rates-down">
              <img :src="`./assets/common/arrow-down-white.svg`" alt="">
              <span>16</span>
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
    }
  }),
  mounted() {
    this.updatingDate(calendarData)
  },
  methods: {
    updatingDate(data) {
      data.forEach(day => {
        day.date = new Date(day.eventDate).getDate()
        day.day = new Date(day.eventDate).getDay()
        day.month = new Date(day.eventDate).getMonth()
        day.year = new Date(day.eventDate).getFullYear()
        this.daysData[new Date(day.eventDate).getDay()].push(day)
      });
      this.fillingCalendar(data)
    },
    fillingCalendar (data) {
      let currentYear = new Date(data[0].eventDate).getFullYear()
      let currentMonth = new Date(data[0].eventDate).getMonth()
      let daysInMonth = new Date(currentYear, currentMonth, 0).getDate()
      Object.values(this.daysData).forEach(day => {
        let dayDates = []
        day.forEach((item, index) => {
          let itemDate = new Date(item.eventDate).getDate()
          // daysDates.push(itemDate)
          if(itemDate + 7 < daysInMonth) {
            day.splice(index + 1, 0, {})
          }
          console.log(day)
          // Генерировать месяц по индексу 0 от приходящих данных, вставлять в нужные даты инфу
        })
      })
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
    margin-bottom: 10px;
    display: flex;
    & .nav-item {
      color: #fff;
      font-weight: bold;
      font-size: 1em;
      border: 1px solid #92989E;
      border-collapse: collapse;
      text-align: center;
      padding: 10px 1px;
      width: calc(100% / 7)
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
    border: 1px solid #92989E;
    border-collapse: collapse;
    text-align: center;
    padding: 10px 1px;
  }
  .rates {
    display: flex;
    padding: 10px 0px;
    justify-content: center;
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