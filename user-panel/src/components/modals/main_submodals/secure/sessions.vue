<template>
  <div class="secure-main-modal-sessions">
    <div class="head">
      <p class="item">Дата входа</p>
      <p class="item">Браузер</p>
      <p class="item">IP-адрес</p>
      <p class="item">Локация</p>
    </div>
    <div class="body-table">
      <div class="row" v-for="item in items" :key="Math.random() + Math.random()">
        <p class="item">01.01.2021</p>
        <p class="item">Chrome (Win10)</p>
        <p class="item">17.11.278.18</p>
        <p class="item">Moscow, Russia</p>
      </div>
    </div>
    <div class="paginate-container session">
        <paginate
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          prev-link-class="prev-next-class"
          next-link-class="prev-next-class"
          :container-class="'pagination-wrapper'"
          :page-link-class="'pagination-item'"
          :disabled-class="'pagination-item-disabled'"
          :active-class="'pagination-item-active'"
          :no-li-surround="true"
          :page-range="3"
        ></paginate>
        <div class="dotted" />
    </div>
  </div>
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin";
export default {
  name: 'secure-main-modal-sessions',
  mixins: [paginationMixin],
  data: () => ({
    list: [
      // Нужно ли форматировать дату?
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      },
      {
        date: '01.01.2021',
        browser: 'Chrome (Win10)',
        ip: '17.11.278.18',
        location: 'Moscow, Russia'
      }
    ]
  }),
  created() {
    this.mixinOptions(10);
    this.setupPagination(this.list);
  },
}
</script>

<style lang="scss" scoped>
  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 2px solid #e4e4e4;
    padding: 10px 0px;
    & .item {
      width: calc(100% / 4);
      text-align: center;
      font-size: 1.1em;
      color: #000;
      font-weight: 600;
    }
  }
  .body-table {
    & .row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-bottom: 2px solid #e4e4e4;
      padding: 10px 0px;
      & .item {
        width: calc(100% / 4);
        text-align: center;
        font-size: .9em;
        color: #000;
        font-weight: 400;
      }
    }
    &::-webkit-scrollbar{
      background: #E4E4E4;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb{
      background: rgba(45, 45, 45, .7);
      border-radius: 5px;
    } 
  }
  .session {
    bottom: 0px;
    .dotted:after {
      color: #302D2B;
    }
  }
  @media screen and (max-width: 500px) {
    .head {
      border-bottom: 1px solid #e4e4e4;
      & .item {
        font-size: .9em;
      }
    }
    .body-table {
      & .row {
        border-bottom: 1px solid #e4e4e4;
        & .item {
          font-size: .8em;
        }
      }
    }
  }
</style>