<template>
  <div class="header-wrapper">
    <logo/>
    <navigation-component/>
  </div>
</template>

<script>
import logo from "@/components/header/logo"
import navigationComponent from "@/components/header/navigation"
export default {
  name: "mainHeader",
  components: {
    logo, navigationComponent
  }
}
</script>

<style lang="scss">
  .header-wrapper {
    padding: 30px 50px;
    display: flex;
    align-items: center;
  }
</style>