<template>
  <nav class="main-navigation">
    <ul class="nav-list">
      <li v-for="item in nav" :key="item.text" class="nav-list-item">{{ item.text }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'vue-nav',
  data: () => ({
    nav: [
      {
        text: 'Статистика',
        link: 'statistics'
      },
      {
        text: 'Начать движуху',
        link: 'start'
      },
      {
        text: 'Настройки',
        link: 'settings'
      },
      {
        text: 'Профиль',
        link: 'profile'
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
  .main-navigation {
    border-bottom: 1px solid #F3F4F4;
    & .nav-list {
      display: flex;
      align-items: center;
      &-item {
        padding: 15px 30px;
        border-bottom: 2px solid transparent;
        font-family: 'SegoeUI';
        font-weight: 700;
        color: #F3F4F4;
        &.active {
          border-color: #F3F4F4;
        }
      }
    }
  }
</style>