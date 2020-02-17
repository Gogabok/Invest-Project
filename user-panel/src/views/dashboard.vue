<template>
  <div class="dashboard">
    <div class="dashboard-user-area" ref="dashboardUserArea">
      <v-nav class="v-nav"></v-nav>
      <dashboard-cards class="common-dashboard-padding"></dashboard-cards>
      <dashboard-graph-module :height="height" @heightComputed="heightComputed" :style="styleModule"></dashboard-graph-module>
    </div>
    <div class="side-panel-area">
      <side-panel></side-panel>
    </div>
  </div>
</template>

<script>
import VNav from '@/components/header/index';
import dashboardCards from '@/components/dashboard/dashboard-cards'
import dashboardGraphModule from '@/components/dashboard/dashboard-graph-module'
import sidePanel from '@/components/side-panel/side-panel'

export default {
  name: 'dashboard',
  components: {
    VNav, dashboardCards, dashboardGraphModule, sidePanel
  },
  data: () => ({
    styleModule: null,
    height: null
  }),
  mounted() {
    let sideHeight = this.$refs.dashboardUserArea.clientHeight
    if(sideHeight > document.body.clientHeight && document.body.clientWidth > 830) {
      let newModuleHeight = sideHeight - this.height - 20
      this.styleModule = {
        "max-height": `${newModuleHeight}px`
      }
    }
  },
  methods: {
    heightComputed(value) {
      console.log(value);
      
      this.height = value
    }
  }
};
</script>

<style lang="scss">
.dashboard {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & * {
    box-sizing: border-box;
  }
}
.dashboard-user-area {
  width: 60%;
  & .v-nav {
    padding-left: 50px ;
  }
  & .common-dashboard-padding {
    padding-left: 140px;
  }
}
.side-panel-area {
  padding: 0px 60px;
  max-width: 620px;
  width: 100%;
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
@media screen and (max-width: 1530px) {
  .paginate-container {
    padding: 0px 10px;
    & .dotted  {
      width: calc(100% - 20px);
      &:after {
        letter-spacing: 7px;
      }
    }
  }
  .dashboard-user-area {
    width: 100%;
    & .v-nav {
      padding-left: 10px;
    }
    & .common-dashboard-padding {
      padding-left: 10px;
      margin-top: 10px;
    }
    & .dashboard-graph-module {
      margin-left: 10px;
      margin-top: 5px;
    }
  }
  .side-panel-area {
    width: 100%;
    padding: 0px 10px 0px 5px;
  }
}
@media screen and (max-width: 1250px) {
  .dashboard {
    flex-wrap: wrap;
    height: auto;
  }
  .main-app-container {
    height: auto;
  }
  .dashboard-user-area {
    width: 100%;
    max-width: 991px;
    padding: 0px 20px;
    margin: 0px auto;
    & .v-nav {
      padding: 10px 0px;
    }
    & .common-dashboard-padding {
      padding: 10px 0px;
    }
    & .dashboard-graph-module {
      margin: 10px 0px;
    }
  }
  .side-panel-area {
    width: 100%;
    max-width: 991px;
    padding: 0px 20px;
    margin: 10px auto 0px auto;
    & * {
      box-sizing: content-box !important;
    }
  }
}
@media screen and (max-width: 830px) {
  .common-dashboard-padding {
    margin-top: 50px !important;
  }
  .dashboard-graph-module {
    padding: 10px 5px;
  }
}

@media screen and (max-width: 650px) {
  .dashboard-user-area {
    padding: 0px 10px;
  }
  .dashboard-graph-module {
    margin-top: 0px !important;
  }
  .side-panel-area {
    margin-top: 0px;
    padding: 0px 10px;
    max-width: 635px;
  }
}




// animations 

.scaleY-enter, .scaleY-leave-to {
  opacity: 0;
  transform: scaleY(0); 
  transform-origin: top;
}
.scaleY-enter-active, .scaleY-leave-active {
  transition-duration: .3s;
}

.scaleY-group-enter, .scaleY-group-leave-to {
  opacity: 0;
  display: none;
  transform: scaleY(0); 
  transform-origin: top;
}

.scaleY-group-enter-active, .scaleY-group-leave-active {
  transition-duration: .3s;
}

.scaleY-group-leave-active {
  display: none !important;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition-duration: .5s;
}

.fade-group-enter, .fade-group-leave-to {
  opacity: 0;
}
.fade-group-enter-active, .fade-group-leave-active {
  transition-duration: 2s;
}

.fade-group-leave-active {
  display: none !important;
}
</style>
