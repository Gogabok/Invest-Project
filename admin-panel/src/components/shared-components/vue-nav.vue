<template>
  <nav class="main-navigation">
    <ul class="nav-list">
      <router-link tag="li" :to="`/${item.link}`" exact v-for="item in nav" :key="item.text" class="nav-list-item" active-class="active">{{ item.text }}</router-link>
    </ul>
    <div class="searching">
      <vue-commission-btn></vue-commission-btn>
      <vue-searching :placeholder="`Найти пользователя`"></vue-searching>
    </div>
  </nav>
</template>

<script>
import vueSearching from '@/components/shared-components/searching'
import vueCommissionBtn from '@/components/shared-components/commission-btn'
export default {
  name: 'vue-nav',
  components: {
    vueSearching, vueCommissionBtn
  },
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 50px;
    & .nav-list {
      display: flex;
      align-items: center;
      &-item {
        padding: 20px 30px;
        border-bottom: 2px solid transparent;
        font-family: 'SegoeUI';
        font-weight: 700;
        color: #F3F4F4;
        user-select: none;
        transition-duration: .2s;
        cursor: pointer;
        font-size: 1.8rem;
        &.active {
          border-color: #F3F4F4;
        }
      }
    }
  }
  .searching {
    display: flex;
    align-items: center;
  }
</style>