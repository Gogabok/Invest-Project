<template>
  <div class="menu-app">
    <div class="filters">
      <div class="item item-1">
        <div class="main">
          <p class="amount">0</p>
          <p class="percent">0%</p>
        </div>
        <p class="item-desc">Мой портфель</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-main'
}
</script>

<style lang="scss">
  .menu-app {
    max-width: 1600px;
    margin: 0px auto;
  }
  .filters {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    & .item {
      margin-top: 30px;
      width: 200px;
      user-select: none;
      & .main {
        height: 70px;
        display: flex;
        justify-content: space-between;
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        padding: 0px 15px 0px 20px;
        line-height: 2rem;
        color: #808791;
        & .amount {
          font-weight: 700;
        }
      }
      & .item-desc {
        text-align: center;
        font-size: 1.2rem;
        margin: 5px 0px;
      }
      &-1 {
        & .main {
          border-radius: 80px;
          // border: 1px solid #9EA8B0;
          box-shadow: 0px 0px 12px 0px #9EA8B0;
          background: #FFFFFF;
        }
      }
    }
  }
</style>
