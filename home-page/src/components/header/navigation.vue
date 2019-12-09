<template>
  <div class="navigation">
    <nav class="navigation-wrapper">
      <ul class="navigation-list">
        <router-link 
                    tag="li"
                    class="navigation-list-item" 
                    v-for="item in nav" 
                    :key="item.link"
                    :to="item.link"
                    >
          {{ item.title }}
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation-component",
  data: () => ({
    nav: [
      {
        title: "Почему мы?",
        link: "/why-we"
      },
      {
        title: "Статистика",
        link: "/stats"
      },
      {
        title: "Цены",
        link: "/prices"
      },
      {
        title: "О нас",
        link: "/about"
      },
      {
        title: "Поддержка",
        link: "/support"
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
  .navigation-list {
    display: flex;
    align-items: center;
    margin-left: 60px;
    .navigation-list-item {
      color: #fff;
      margin: 0px 15px;
      font-size: 1.2em;
      font-family: "Exo 2", sans-serif;
      font-weight: medium;
      cursor: pointer;
      user-select: none;
    }
  }
</style>