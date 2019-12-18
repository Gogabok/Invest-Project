<template>
  <div class="navigation">
    <div class="navigation-wrapper">
      <v-logo></v-logo>
      <v-nav-btn :VClass="'invest'">Инвестировать</v-nav-btn>
      <v-nav-btn :VClass="'get'">Вывести деньги</v-nav-btn>
      <v-user-card>{{ userName }}</v-user-card>
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
</style>