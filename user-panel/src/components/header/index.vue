<template>
  <div class="navigation">
    <div class="navigation-wrapper">
      <v-logo></v-logo>
      <v-nav-btn :VClass="'invest'">Инвестировать</v-nav-btn>
      <v-nav-btn :VClass="'get'">Вывести деньги</v-nav-btn>
      <v-user-card>{{ userName }}</v-user-card>
      <div class="hamburger-menu">
        <input type="checkbox" id="checkbox" class="checkbox visuallyHidden">
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
    userName: 'woohoohooh@gmail.com'
  })
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
    height: 4px;
    background-color: maroon;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute; 
    transition: all 0.4s ease-in-out, transform 0.4s ease-in-out 0.4s;
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
</style>