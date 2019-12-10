<template>
  <div class="home">
    <div class="home-wrapper">
      <home-content
                    class="home-content-wrapper"
      />
    </div>
  </div>
</template>

<script>
import homeContent from "@/components/home/content"
export default {
  name: 'home',
  components: {
    homeContent
  }
}
</script>

<style lang="scss">
  .home-wrapper {
    padding: 50px 50px 20px 50px;
    & .home-content-wrapper {
      max-width: 800px;
    }
  }
</style>
