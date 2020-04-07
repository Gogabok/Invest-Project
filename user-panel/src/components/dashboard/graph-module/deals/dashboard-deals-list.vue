<template>
  <div class="decisions-wrapper">
    <div class="graph-module-zone">
      <div class="decisions-wrapper-nav">
        <div 
            v-for="navItem in navigation"
            :key="navItem.title"
            class="nav-item">
              {{ navItem.title }}
        </div>
      </div>
      <!-- <transition-group tag="div" class="deals-wrapper-content" :style="`height: ${height}`" ref="dealsWrapperContent" name="fade-group"> -->
        <label
            v-for="(deal, index) in items"
            :key="deal.botName + index + Math.random()"
            class="content-item">
            <p class="content-item-text content-item-with-checkbox">
              {{ deal.deal_starts | prettyTime }}
            </p>
            <p class="content-item-text">
              {{ deal.deal_ends | prettyTime }}
            </p>
            <p class="content-item-text">
              {{ deal.botName }}
            </p>
            <p class="content-item-text">
              {{ deal.type }}
            </p>
            <p class="content-item-text content-item-profit" :class="deal.isProfit ? 'content-item-profit-up' : 'content-item-profit-down'">
              <span><img :src="`./assets/common/arrow-${deal.isProfit ? 'up' : 'down'}.svg`" alt=""></span>
              {{ deal.profit }}
            </p>
        </label>
      <!-- </transition-group> -->
    </div>
    <div class="paginate-container">
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
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin"
import dealsJsonDataAPI from "@/server/deals.json"
export default {
  name: "dashboard-deals-list",
  mixins: [paginationMixin],
  data: () => ({
    navigation: [
      {
        title: 'Начало'
      },
      {
        title: 'Завершение'
      },
      {
        title: 'Бот'
      },
      {
        title: 'Тип'
      },
      {
        title: 'Прибыль'
      },
    ],
    dealsData: null,
    height: null
  }),
  created() {
    this.dealsData = dealsJsonDataAPI
    this.mixinOptions(5)
    this.setupPagination(this.dealsData)
  },
  mounted() {
    this.height = this.$refs.dealsWrapperContent.clientHeight + 'px'
  },
  filters: {
    prettyTime: function (time) {
      let newTime = time
			let year = new Date(newTime).getFullYear()
			let month = new Date(newTime).getMonth() + 1
			let date = new Date(newTime).getDate()
			let hours = new Date(newTime).getHours()
			let minutes = new Date(newTime).getMinutes()

			let newMonth = month < 10 ? '0' + month : month
			let newDate = date < 10 ? '0' + date : date
			let newHours = hours < 10 ? '0' + hours : hours
			let newMinutes = 0
			if(minutes === '0') {
				newMinutes = '00'
			} else if (minutes < 10) {
				newMinutes = '0' + minutes
			} else {
				newMinutes = minutes
      }
      
      return `${newDate}.${newMonth}.${year} ${newHours}:${newMinutes}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .decisions-wrapper {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    min-height: 490px;
  }
  .decisions-wrapper-nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 30px;
    margin-bottom: 10px;
    & .nav-item {
      color: #fff;
      font-weight: bold;
      font-size: 1em;
      width: calc(100% / 6)
    }
  }
  .content-item {
    padding: 6px 30px;
    height: 60px;
    font-size: .9em;
    & .content-item-profit {
      font-weight: bold;
      & span {
        margin-right: 10px;
      }
      &.content-item-profit-up {
        color: #379A1D;
      }
      &.content-item-profit-down {
        color: #EF5350;
      }
    }
  }
  @media screen and (max-width: 1530px) {
    .decisions-wrapper-nav {
      padding: 0px 15px;
      margin-bottom: 5px;
      & .nav-item {
        font-size: 1em;
        width: calc((100% / 6) - 10px);
      }
    }
    .content-item {
      padding: 3px 15px;
      height: 60px;
      & .content-item-profit {
        font-size: 0.8em;
        & span {
          margin-right: 2px;
        }
      }
    }
  }
  @media screen and (max-width: 1250px) {
    .decisions-wrapper {
      max-height: 400px;
      min-height: 400px;
    }
  }
  @media screen and (max-width: 650px) {
    .decisions-wrapper-nav, .desicions-wrapper-content {
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