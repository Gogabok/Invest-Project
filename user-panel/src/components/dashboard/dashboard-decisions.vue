<template>
  <div class="decisions-wrapper">
    <div class="decisions-wrapper-nav">
      <div 
          v-for="navItem in navigation"
          :key="navItem.title"
          class="nav-item">
            {{ navItem.title }}
      </div>
    </div>
    <div class="desicions-wrapper-content" :style="`height: ${height}`" ref="desicionsWrapperContent">
      <label
          v-for="(decision, index) in items"
          :key="decision.botName + index + Math.random()"
          class="content-item">
          <p class="content-item-text content-item-with-checkbox">
            <input v-model="decision.isActive" class="content-checkbox" type="checkbox" name="keyIndex">
            <span><span></span></span>
            {{ decision.botName }}
          </p>
          <p class="content-item-text">
            {{ decision.type }}
          </p>
          <p class="content-item-text">
            {{ decision.status }}
          </p>
          <p class="content-item-text">
            {{ decision.balance }}
          </p>
          <p class="content-item-text">
            {{ decision.profit }}
          </p>
          <div class="content-item-text">
            <decisions-statistic-graph
              :data="decision.statisticGraphData"
            />
          </div>
      </label>
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
import decisionsJsonDataAPI from "@/server/decisions.json"
import decisionsStatisticGraph from "@/components/dashboard/decisions-statistic-graph"
export default {
  name: 'dashboardDecisions',
  components: {
    decisionsStatisticGraph
  },
  mixins: [paginationMixin],
  data: () => ({
    navigation: [
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
      },
    ],
    decisionsData: null,
    height: null
  }),
  created() {
    this.decisionsData = decisionsJsonDataAPI
    this.mixinOptions(5)
    this.setupPagination(this.decisionsData)
  },
  mounted() {
    this.height = this.$refs.desicionsWrapperContent.clientHeight + 'px'
  },
}
</script>



<style lang="scss">
  .decisions-wrapper-nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 30px;
    margin-bottom: 10px;
    & .nav-item {
      color: #fff;
      font-weight: bold;
      font-size: 1.2em;
      width: calc(100% / 6)
    }
  }
  .content-item {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    & .content-item-text {
      font-weight: 400;
      color: #fff;
      font-size: 1.1em;
      width: calc(100% / 6);
      line-height: 16px;
    }
  }

  .content-checkbox {
    display: none;
  }
  .content-item-with-checkbox {
    display: flex;
    align-items: center;
  }
  .content-checkbox + span {
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    padding: 2px;
    transition-duration: .3s;
  }
  .content-checkbox:checked + span {
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    transition-duration: .3s;
  }
  .content-checkbox + span span {
    border-radius: 50%;
    display: block;
    width: 13px;
    height: 13px;
    background: transparent;
    transition-duration: .3s;
  }
  .pagination-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34px;
    width: 100%;
  }
  .prev-next-class {
    display: none;
  }
  .pagination-item {
    margin: 0px 0px;
    color: #fff;
    line-height: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1.5px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    outline: none;
    background: #24303C;
    transition-duration: .2s;
    position: relative;
    z-index: 10;
  }
  .pagination-item:focus {
    outline: none;
  }
  .pagination-item-disabled {
    display: none;
  }
  .pagination-item-disabled a {
    display: none;
  }
  .pagination-item-active {
    background: #379A1D;
    transition-duration: .2s;
  }
  .paginate-container {
    padding: 0px 30px;
    position: relative;
    margin: 10px 0px 0px 0px;
    overflow: hidden;
    width: inherit;
  }
  .paginate-container .dotted {
    width: calc(100% - 60px);
    overflow: hidden;
    position: absolute;
    top: 0;
    margin: 0px auto;
  }
  .paginate-container .dotted:after {
    content: "..............................................................................................................................................................................................................................................................................";
    letter-spacing: 10px;
    font-size: 20px;
    color:#fff;
  }
  // .content-checkbox:checked + span span {
  //   border-radius: 50%;
  //   display: block;
  //   width: 13px;
  //   height: 13px;
  //   background: #45F516;
  //   transition-duration: .3s;
  // }




</style>