<template>
  <div class="header-wrapper">
    <logo/>
    <navigation-component/>
    <controls
      class="controls"
    />
    <languages/>
  </div>
</template>

<script>
import logo from "@/components/header/logo"
import navigationComponent from "@/components/header/navigation"
import controls from "@/components/header/controlsBtns"
import languages from "@/components/header/languages"
export default {
  name: "mainHeader",
  components: {
    logo, navigationComponent, controls, languages
  }
}
</script>

<style lang="scss">
  .header-wrapper {
    padding: 30px 50px;
    display: flex;
    align-items: center;
  }
  .controls {
    margin-left: auto;
  }
</style>