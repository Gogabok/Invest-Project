<template>
  <div class="side-panel-activity" ref="sidePanelModule">
    <div class="activity-nav">
      <button 
       v-for="item in nav"
       class="activity-nav-item"
       :class="item.isActive ? 'active' : ''"
       :key="item.title"
       @click.prevent="activityNavSelector(item)"
       >
        {{ item.title }}
      </button>
    </div>
    <div class="activity-wrapper">
      <div class="activity-list" ref="activity">
        <div class="item" v-for="item in items" :key="item.desc + item.date + Math.random()">
          <div class="icon">
            <img src="/assets/common/activity-item-icon.svg" alt="">
          </div>
          <div class="icon-cloud">
            <img :src="item.isCloudFilled ? `/assets/common/activity-item-icon-cloud-filled.svg` : `/assets/common/activity-item-icon-cloud.svg`" alt="">
          </div>
          <div class="text">
            <p class="desc"><span class="date">{{ item.date | prettyDate }}</span> {{ item.desc }}</p>
            <p class="action">{{ item.action }}</p>
          </div>
        </div>
      </div>
      <div class="paginate-container paginate-container-activity">
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
          :page-range="3">
        </paginate>
        <div class="dotted"/>
      </div>
    </div>
  </div>
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin"
export default {
  name: "side-panel-activity",
  mixins: [paginationMixin],
  data: () => ({
    nav: [
        {
          title: 'Все',
          type: 'dashboardGraph',
          isActive: true
        },
        {
          title: 'Дивиденды',
          module: 'dividends',
          isActive: false
        },
        {
          title: 'Депозиты',
          module: 'deposits',
          isActive: false
        },
        {
          title: 'Выводы',
          module: 'outputting',
          isActive: false
        },
        {
          title: 'Партнерство',
          module: 'partnership',
          isActive: false
        }
      ],
      "list": [
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": true
        },
        {
          "date": 1577836800000,
          "desc": "отчет по Партнерской программе",
          "action": "Начисление комиссии $20.00",
          "isCloudFilled": false
        }
      ]
  }),
  created () {
    this.mixinOptions(8)
    this.setupPagination(this.list)
  },
  mounted () {
    console.log(this.$refs.activity.childNodes);
    
  },
  methods: {
    activityNavSelector (payload) {
      this.nav.forEach(item => {
        item.isActive = false
      })
      payload.isActive = true
      
    }
  },
  filters: {
    prettyDate: function (value) {
      let year = new Date(value).getFullYear()
      let month = ( new Date(value).getMonth() + 1 ) < 10 ? `0${new Date(value).getMonth() + 1}` : new Date(value).getMonth() + 1
      let date = new Date(value).getDate() < 10 ? `0${new Date(value).getDate()}` : new Date(value).getDate()
      return `${year}.${month}.${date}`
    }
  }
}
</script>

<style lang="scss">
  .activity-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
  }
  .side-panel-activity {
    height: 100%;
  }
  .activity-nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin: 10px;
    &-item {
      color: #fff;
      font-size: .9em;
      padding: 8px 8px;
      margin: 0px 0px;
      border-radius: 3px;
      border: none;
      background: transparent;
      &.active {
        background: rgba(184, 189, 196, .1);
      }
    }
  }
  .activity-list {
    padding: 20px;
    & .item {
      display: flex;
      align-items: center;
      margin: 15px 0px;
      & .icon {
        user-select: none;
        pointer-events: none;
      }
      & .icon-cloud {
        user-select: none;
        pointer-events: none;
        margin: 0px 20px;
      }
      & .text {
        color: #fff;
        & .desc {
          font-weight: 400;
          font-size: .9em;
        }
        & .action {
          font-weight: bold;
          font-size: 1em;
          text-transform: uppercase;
        }
      }
    }
  }
  .paginate-container-activity {
    & .pagination-item-active {
      background: #fff;
      color: #24303C;
    }
  }
</style>