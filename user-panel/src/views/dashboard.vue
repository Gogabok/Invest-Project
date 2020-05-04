<template>
<div>
  <div class="dashboard">
    <div class="dashboard-user-area" ref="dashboardUserArea">
      <v-nav class="v-nav"></v-nav>
      <dashboard-cards class="common-dashboard-padding"></dashboard-cards>
      <!-- <dashboard-graph-module @heightComputed="heightCalculation"></dashboard-graph-module> -->
      <dashboard-graph-module></dashboard-graph-module>
    </div>
    <div class="side-panel-area">
      <side-panel></side-panel>
    </div>
    <div :class="isMenuShow ? 'close-mainMenu': 'hamburger-mainMenu'" @click="isMenuShow = !isMenuShow">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <transition name="slideDown" mode="out-in">
    <div class="menu" :class="isMenuShow ? 'show': 'hidden'" v-if="isMenuShow">
      <v-menu></v-menu>
    </div>
  </transition>
</div>
</template>

<script>
import VNav from "@/components/header/index";
import dashboardCards from "@/components/dashboard/dashboard-cards";
import dashboardGraphModule from "@/components/dashboard/dashboard-graph-module";
import sidePanel from "@/components/side-panel/side-panel";
import VMenu from "@/components/menu/index"
export default {
  name: "dashboard",
  components: {
    VNav,
    dashboardCards,
    dashboardGraphModule,
    sidePanel,
    VMenu
  },
  data: () => ({
    isMenuShow: false
  }),
  watch: {
    isMenuShow: function() {
      if (this.isMenuShow) {
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        document.getElementsByTagName("html")[0].style.paddingRight = "8px";
      } else {
        setTimeout(() => {
          document.getElementsByTagName("html")[0].style.overflowY = "scroll";
          document.getElementsByTagName("html")[0].style.paddingRight = "0px";
        }, 300);
      }
    }
  },
  methods: {
    // heightCalculation() {
    //   setTimeout(() => {
    //     let sideHeight = this.$refs.dashboardUserArea.clientHeight
    //     if(sideHeight > document.body.clientHeight && document.body.clientWidth > 830) {
    //       document.getElementsByClassName("main-app-container")[0].style.overflow = "auto"
    //     }
    //   }, 1000);
    // }
  }
};
</script>

<style lang="scss">
.dashboard {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.dashboard-user-area {
  width: calc(100% - 20%);
  & .v-nav {
    padding-left: 12px;
  }
  & .common-dashboard-padding {
    padding-left: 100px;
  }
}
.side-panel-area {
  padding: 0px 8px 0px 100px;
  max-width: 550px;
  width: 100%;
}
.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  width: 100%;
  margin-bottom: 10px;
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
  background: #24303c;
  transition-duration: 0.2s;
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
  background: #379a1d;
  transition-duration: 0.2s;
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
  color: #fff;
}
@media screen and (max-width: 1530px) {
  .paginate-container {
    padding: 0px 10px;
    & .dotted {
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

.hamburger-mainMenu {
  width: 45px;
  display: block;
  cursor: pointer;
  margin: 0px 20px;
  margin-top: 5px;
  height: 45px;
  z-index: 999;
  position: relative;
  transition-duration: 0.3s;
  & span {
    transition-duration: 0.3s;
    width: 45px;
    border: 1.5px solid #fff;
    border-radius: 3px;
    display: block;
    margin: 10px 0px;
  }
}
.close-mainMenu {
  width: 45px;
  display: block;
  cursor: pointer;
  margin: 0px 20px;
  margin-top: 5px;
  height: 45px;
  z-index: 9990;
  position: relative;
  margin-top: 15px;
  transition-duration: 0.3s;
  & span {
    transition-duration: 0.3s;
    width: 45px;
    border: 1.5px solid #a0a0a0;
    border-radius: 3px;
    display: block;
    margin: 10px 0px;
    &:nth-child(1) {
      transform: rotate(-45deg);
      margin-top: 10px;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
      margin-top: -12.5px;
    }
    &:nth-child(3) {
      opacity: 0;
      margin-top: -12.5px;
      transform: rotate(45deg);
    }
  }
}
.menu {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  // background: rgba(255, 255, 255, 1);
  // overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 998;
  transform: translateY(0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background: #ccc;
    border: none;
    border-radius: 0;
    opacity: .2;
  } 
}
@media screen and (max-width: 1250px) {
  .hamburger-mainMenu, .close-mainMenu, .menu {
    display: none;
  }
}
// animations

.slideDown-enter,
.slideDown-leave-to {
  transform: translateY(0px);
}
.slideDown-enter-active,
.slideDown-leave-active {
  transform: translateY(-100%);
}

.scaleY-enter,
.scaleY-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}
.scaleY-enter-active,
.scaleY-leave-active {
  transition-duration: 0.3s;
}

.scaleY-group-enter,
.scaleY-group-leave-to {
  opacity: 0;
  display: none;
  transform: scaleY(0);
  transform-origin: top;
}

.scaleY-group-enter-active,
.scaleY-group-leave-active {
  transition-duration: 0.5s;
}

.scaleY-group-leave-active {
  display: none !important;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
}

.fade-faster-enter,
.fade-faster-leave-to {
  opacity: 0 !important;
}
.fade-faster-enter-active,
.fade-faster-leave-active {
  transition-duration: 0.1s !important;
}

.fade-group-enter,
.fade-group-leave-to {
  opacity: 0;
}
.fade-group-enter-active,
.fade-group-leave-active {
  transition-duration: 2s;
}

.fade-group-leave-active {
  display: none !important;
}

.fade-group-faster-enter,
.fade-group-faster-leave-to {
  opacity: 0;
}
.fade-group-faster-enter-active,
.fade-group-faster-leave-active {
  transition-duration: 0.5s;
}

.fade-group-faster-leave-active {
  display: none !important;
}
</style>
