<template>
  <div class="home">
    <div class="home-wrapper">
      <home-content
                    class="home-content-wrapper"
      />
      <home-circle/>
    </div>
  </div>
</template>

<script>
import homeContent from "@/components/home/content"
import homeCircle from "@/components/home/circle"
export default {
  name: 'home',
  components: {
    homeContent, homeCircle
  }
}
</script>

<style lang="scss">
  .home-wrapper {
    padding: 50px 50px 20px 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    & .home-content-wrapper {
      max-width: 800px;
    }
  }
</style>
