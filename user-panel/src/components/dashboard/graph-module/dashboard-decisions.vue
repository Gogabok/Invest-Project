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
      <transition-group tag="div" class="desicions-wrapper-content" :style="`height: ${height}`" ref="desicionsWrapperContent" name="fade-group">
        <label
            v-for="(decision, index) in items"
            :key="decision.botName + index + Math.random()"
            class="content-item">
            <p class="content-item-text content-item-with-checkbox">
              <!-- <input v-model="decision.isActive" class="content-checkbox" type="checkbox" name="keyIndex"> -->
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
      </transition-group>
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
import decisionsStatisticGraph from "@/components/dashboard/graph-module/decisions-statistic-graph"
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
    height: null,
    currentComponent: null,
  }),
  props: ["minitoolbar"],
  created() {
    this.decisionsData = decisionsJsonDataAPI
    this.mixinOptions(5)
    this.setupPagination(this.decisionsData)

    this.updatingComponent()
    this.$watch("minitoolbar", function () {
      this.updatingComponent()
    }, {deep:true})
  },
  mounted() {
    this.height = this.$refs.desicionsWrapperContent.clientHeight + 'px'
  },
  methods: {
    updatingComponent () {
      this.minitoolbar.forEach(item => {
        if(item.isActive) {
          this.currentComponent = item.component
          this.updatingData(item.component)
        }
      })
    },
    updatingData(url) {
      // Запрос к базе при измененнии minitoolbar'а
    }
  }
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
  // .content-checkbox:checked + span span {
  //   border-radius: 50%;
  //   display: block;
  //   width: 13px;
  //   height: 13px;
  //   background: #45F516;
  //   transition-duration: .3s;
  // }

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
      padding: 9px 15px;
      & .content-item-text {
        font-size: .9em;
        width: calc((100% / 6) - 10px);
      }
    }
  }
  @media screen and (max-width: 650px) {
    .decisions-wrapper-nav, .desicions-wrapper-content {
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