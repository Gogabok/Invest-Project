<template>
  <div class="navigation">
    <div class="hamburger-menu">
      <input v-model="isMenuOpen" type="checkbox" id="checkbox" class="checkbox visuallyHidden">
      <label for="checkbox">
          <div class="hamburger">
              <span class="bar bar1"></span>
              <span class="bar bar2"></span>
              <span class="bar bar3"></span>
              <span class="bar bar4"></span>
              <span class="bar bar5"></span>
          </div>
      </label>
    </div>
    <div class="navigation-wrapper" :style="menuStyle">
      <v-logo class="logo"></v-logo>
      <v-nav-btn class="btn btn-1" :VClass="'invest'">Инвестировать</v-nav-btn>
      <v-nav-btn class="btn btn-2" :VClass="'get'">Вывести деньги</v-nav-btn>
      <v-user-card class="userBtn">{{ userName }}</v-user-card>
    </div>
  </div>
</template>

<script>
import VLogo from "@/components/header/logo"
import VNavBtn from "@/components/header/VNavBtn"
import VUserCard from "@/components/header/VUserCard"
export default {
  name: 'navigation-component',
  components: {
    VLogo, VNavBtn, VUserCard
  },
  data: () => ({
    userName: 'woohoohooh@gmail.com',
    isMenuOpen: false
  }),
  computed: {
    menuStyle () {
      if(document.body.clientWidth > 830) {
        return `display: flex`
      } else {
        return this.isMenuOpen ? `display: flex` : ''
      }
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
  .navigation-wrapper {
    padding: 20px 0px;
    display: flex;
    align-items: center;
    & * {
      font-family: "Exo 2";
    }
  }
  @media screen and (max-width: 1530px) {
    .navigation-wrapper {
      padding: 5px 0px;
    }
  }

  .visuallyHidden {
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0;
  }

  .hamburger .bar {
    padding: 0;
    width: 30px;
    height: 3px;
    background-color: #fff;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
    transition: all 0.4s ease-in-out, transform 0.4s ease-in-out 0.4s;
  }

  .hamburger-menu {
    display: none;
  }

  .hamburger {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    & .bar1 {
      top: 0;
    }
    & .bar2 {
      top: 0;
      width: 1px;
      transform: rotate(90deg);
      left: 13.5px;
    }
    & .bar2, & .bar3 {
      top: 13.5px;
    }
    & .bar3 {
      right: 0;
      width: 1px;
      left: 13.5px;
    }
    & .bar4 {
      top: 13.5px;
      bottom: 0;
    }
    & .bar5 {
      bottom: 0px;
    }
  }

  .checkbox:checked + label > .hamburger > .bar1{
      top: 13.5px;
      background-color: transparent;
  }

  .checkbox:checked + label > .hamburger > .bar2{
      left: 0px;
      width: 30px;
      transform: rotate(45deg);
  }

  .checkbox:checked + label > .hamburger > .bar3{
      left: 0;
      width: 30px;
      transform: rotate(-45deg);
  }

  .checkbox:checked + label > .hamburger > .bar4{
      background-color: transparent;
  }

  .checkbox:checked + label > .hamburger > .bar5{
      bottom: 13.5px;
      background-color: transparent; 
  }
  @media screen and (max-width: 830px) {
    .hamburger-menu {
      display: flex;
      justify-content: flex-end;
    }
    .navigation {
      position: fixed;
      z-index: 1000;
      width: 100%;
      left: 0px;
      top: 0px;
      padding: 10px 20px !important;
      background: #20272B;
    }
    .navigation-wrapper {
      display: none;
      flex-wrap: wrap;
    }
    .common-dashboard-padding {
      padding-top: 0px !important;
      margin-top: 0px !important;
    }
    .logo {
      display: none;
    }
    .btn-1 {
      margin: 5px 5px 0px 0px !important;
    }
    .btn-2 {
      margin: 5px 0px 0px 0px !important;
    }
    .userBtn {
      margin-left: auto;
      margin-top: 5px;
    }
  }
  @media screen and (max-width: 650px) { 
    .navigation {
      padding: 10px 10px !important;
    }
  }
</style>