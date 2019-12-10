<template>
  <div class="home-content">
    <h1 class="title">Инвестирование <br/> в нейротехнологии</h1>
    <p class="text">Сервис полной автоматизации трейдинга 
    на основе нейросети с доверительным 
    или самостоятельным управлением
    </p>
    <div class="text-extra">
      <p>Добавлены новые решения для диверсификации.</p>
      <img src="@/assets/home/new.svg" alt="">
    </div>
    <div class="rank">
      <div class="rank-title">Excellent</div>
      <img class="rank-title-img" src="@/assets/home/stars.svg" alt="">
      <div class="current-star">
        <img src="@/assets/home/current-star.svg" alt="">
        <p>Trustpilot</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-content",
}
</script>

<style lang="scss" scoped>
  .home-content {
    user-select: none;
    & .title {
      font-family: "Exo 2", sans-serif;
      font-size: 4em;
      font-weight: bold;
      color: #fff;
    }
    & .text {
      font-size: 2em;
      color: #fff;
      font-family: "Exo 2", sans-serif;
      font-weight: 400;
      max-width: 650px;
      margin: 100px 0px;
    }
    & .text-extra {
      display: flex;
      align-items: center;
      & p {
        margin-right: 20px;
        color: #fff;
        font-weight: 400;
        font-size: 1.5em;
        font-family: "Exo 2", sans-serif
      }

      & img {
        user-select: none;
        pointer-events: none;
      }
    }
    & .rank {
      display: flex;
      align-items: center;
      margin-top: 100px;
      & .rank-title {
        color: #fff;
        font-size: 2em;
        font-family: "Exo 2", sans-serif;
        font-weight: Medium;
      }
      & .rank-title-img {
        margin: 0px 30px;
        user-select: none;
        pointer-events: none;
      }
      & .current-star {
        display: flex;
        align-items: center;
        & img {
          margin-right: 10px;
          user-select: none;
          pointer-events: none;
        }
        & p {
          color: #fff;
          font-family: "Exo 2", sans-serif;
          font-size: 1.2em;
        }
      }
    }
  }
</style>