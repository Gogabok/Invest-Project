<template>
  <div
    class="side-panel-activity"
    ref="sidePanelModule"
  >
    <div class="activity-nav" ref="activityNav">
      <button
        v-for="item in nav"
        class="activity-nav-item"
        :class="item.isActive ? 'active' : ''"
        :disabled="item.isActive"
        :key="item.title"
        @click.prevent="activityNavSelector(item)"
      >{{ item.title }}</button>
    </div>
    <div class="activity-wrapper">
      <transition-group tag="div" class="activity-list" ref="activity" name="fade-group-faster" 
    :style="`height: ${height.module === 'auto' ? height.module : height.module + 'px'}`">
        <div class="item" v-for="item in items" :key="item.desc + item.date + Math.random()">
          <div class="icon">
            <img src="../../../assets/common/activity-item-icon.svg" alt />
          </div>
          <div class="icon-cloud">
            <img
              :src="item.isCloudFilled ? require(`../../../assets/common/activity-item-icon-cloud-filled.svg`) : require(`../../../assets/common/activity-item-icon-cloud.svg`)"
              alt
            />
          </div>
          <div class="text">
            <p class="desc">
              <span class="date">{{ item.date | prettyDate }}</span>
              {{ item.desc }}
            </p>
            <p class="action">{{ item.action }}</p>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="paginate-container paginate-container-activity" ref="pagination">
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
  name: "side-panel-activity",
  mixins: [paginationMixin],
  data: () => ({
    height: {
      module: null
    },
    nav: [
      {
        title: "Все",
        type: "all",
        isActive: true
      },
      {
        title: "Дивиденды",
        type: "dividends",
        isActive: false
      },
      {
        title: "Депозиты",
        type: "deposits",
        isActive: false
      },
      {
        title: "Выводы",
        type: "outputting",
        isActive: false
      },
      {
        title: "Партнерство",
        type: "partnership",
        isActive: false
      }
    ],
    list: null
  }),
  async created() {
    await this.getData(this.nav.find(item => item.isActive));
    if (document.body.clientWidth > 1250) {
      this.mixinOptions(20);
      this.setupPagination(this.list);
    }
  },
  mounted() {
    if (document.body.clientWidth > 1250) {
      this.setHeight();
      window.addEventListener("resize", this.setHeight());
    } else {
      this.mixinOptions(10);
      this.setupPagination(this.list);
      setTimeout(() => {
        this.$refs.sidePanelModule.style.opacity = 1;
        this.height.module = "auto";
      }, 250);
    }
  },
  methods: {
    activityNavSelector(payload) {
      this.nav.forEach(item => {
        item.isActive = false;
      });
      payload.isActive = true;
      this.getData(payload);
    },
    getData(item) {
      return new Promise(resolve => {
        this.list = null;
        import(`@/server/activity/${item.type}.json`).then(data => {
          this.list = data.default;
          this.mixinOptions(20);
          this.setupPagination(this.list);
          resolve();
        });
      });
    },
    setHeight() {
      // Тут просто вычисления высоты side panel и адаптив под экран
      this.height.module = document.body.clientHeight - this.$refs.activityNav.clientHeight - 250;
      setTimeout(() => {
        this.$refs.sidePanelModule.style.opacity = 1;
      }, 1);
    }
  },
  filters: {
    prettyDate: function(value) {
      let year = new Date(value).getFullYear();
      let month =
        new Date(value).getMonth() + 1 < 10
          ? `0${new Date(value).getMonth() + 1}`
          : new Date(value).getMonth() + 1;
      let date =
        new Date(value).getDate() < 10
          ? `0${new Date(value).getDate()}`
          : new Date(value).getDate();
      return `${year}.${month}.${date}`;
    }
  }
};
</script>

<style lang="scss">
.activity-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: calc(100% - 150px);
  // height: calc(100% - 180px);
}
.side-panel-activity {
  height: calc(100% - 100px);
  opacity: 0;
  transition-duration: 1.5s;
  display: flex;
  flex-direction: column;
  // overflow: auto;
}
.activity-nav {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 10px;
  &-item {
    transition-duration: 0.5s;
    user-select: none;
    color: #fff;
    font-size: 0.9em;
    padding: 8px 8px;
    margin: 0px 0px;
    border-radius: 3px;
    border: none;
    background: transparent;
    &.active {
      background: rgba(184, 189, 196, 0.1);
    }
  }
}
.activity-list::-webkit-scrollbar {
  background: rgba(30, 44, 61, 0.7);
  border-radius: 5px;
  width: 8px;
}
.activity-list::-webkit-scrollbar-thumb {
  background: rgb(42, 59, 80);
  border-radius: 5px;
}
.activity-list {
  overflow-y: auto;
  padding: 20px;
  height: calc(100% - 110px);
  align-items: center;
  & .item {
    display: flex;
    align-items: center;
    margin: 0px 0px;
    padding: 10px 0px;
    & .icon {
      user-select: none;
      pointer-events: none;
      margin-left: auto;
    }
    & .icon-cloud {
      user-select: none;
      pointer-events: none;
      margin: 0px 20px;
      margin-right: auto;
    }
    & .text {
      color: #fff;
      display: block;
      margin: 0px auto;
      margin-left: 20px;
      & .desc {
        font-weight: 400;
        font-size: 0.9em;
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
  margin: auto 0px 20px 0px !important;
  // margin-bottom: 15px !important;
  & .pagination-item-active {
    background: #fff;
    color: #24303c;
  }
}
@media screen and (max-width: 1530px) {
  .activity-list {
    padding: 10px;
    & .item {
      padding: 15px 0px;
      justify-content: center;
      & .icon {
        & img {
          width: 35px;
        }
      }
      & .icon-cloud {
        margin: 0px 15px;
        & img {
          width: 35px;
        }
      }
      & .text {
        & .desc {
          font-size: 0.9em;
          margin-bottom: 5px;
        }
        & .action {
          font-size: 0.9em;
        }
      }
    }
  }
}

@media screen and (max-width: 1250px) {
  .activity-wrapper {
    padding-right: 5px;
  }
  .activity-list {
    padding: 10px;
    height: 500px;
    overflow-y: scroll;
  }
}

@media screen and (max-width: 450px) {
  .activity-nav {
    display: block;
    text-align: center;
    &-item {
      display: block;
      margin: 0px auto;
    }
  }
  .activity-list {
    padding: 5px;
    height: 350px;
    overflow-y: scroll;
    & .item {
      padding: 10px 0px 10px 10px;
      justify-content: flex-start;
      & .icon {
        & img {
          width: 30px;
        }
      }
      & .icon-cloud {
        margin: 0px 15px 0px 8px;
        & img {
          width: 30px;
        }
      }
      & .text {
        max-width: 100%;
        & .desc {
          font-size: 0.8em;
          margin-bottom: 5px;
        }
        & .action {
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>