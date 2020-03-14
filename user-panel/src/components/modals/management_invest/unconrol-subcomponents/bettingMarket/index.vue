<template>
  <div class="cryptoMarket">
    <div class="text">
      <p class="title">Описание</p>
      <ul class="text-list">
        <li class="text-list-item">
          Работа на бирже <a href="https://www.betfair.com/" target="_blanl">BetFair</a> с автоматизацией через бота.
        </li>
        <li class="text-list-item">Работа с биржей напрямую по API, либо через телеграмм-бота.</li>
        <li class="text-list-item">Это решение - бестселлер благодаря уникальному соотношению
высокодоходности/надежности.</li>
      </ul>
    </div>
    <div class="text">
      <p class="title">Безопасность</p>
      <ul class="text-list">
        <li class="text-list-item">Денежный баланс на вашем аккаунте биржи, при работе через API.</li>
      </ul>
    </div>
    <div class="text">
      <p class="title">Диверсификация</p>
      <ul class="text-list">
        <li class="text-list-item">В пределах этого решения отсутствует: 1 бот/1 биржа/1 стратегия.</li>
      </ul>
    </div>
    <div class="footer-component">
      <p class="text-footer">Расширенная информация и статистика на сайте <a href="https://www.jetbot.io/" target="_blank">jetbot.io <img src="../../../../../assets/modals/icon-share.svg" alt=""></a></p>
      <button @click.prevent="select" class="output-submit">
        Маркетплейс
        <img ondragstart="return false;" src="../../../../../assets/common/arrow-right-white.svg" alt />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "stonksMarket",
  methods: {
    select () {
      this.$emit("selecting", {
        title: "МАРКЕТПЛЕЙС",
        link: "marketPlace",
        isActive: false,
        sublink: 'bettingMarket'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.cryptoMarket {
  & .output-submit {
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #379a1d;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px 10px 10px 20px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    position: absolute;
    right: -3px;
    transition-duration: .2s;
    text-transform: uppercase;
    &:hover {
      background: #1E640B;
    }
    & img {
      margin-left: 20px;
    }
  }
}
.text {
  margin: 15px 0px;
  padding: 20px;
  & .title {
    color: #3b4757;
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 10px;
  }
  &-list {
    list-style-type: disc;
    margin-left: 30px;
    &-item {
      color: #3b4757;
      font-size: 1.1em;
    }
  }
}
.footer-component {
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 40px 0px 40px 20px;
  border-top: 2px solid #E7EBF1;
  & .text-footer {
    width: 50%;
    font-size: 1em;
    color: #3B4757;
    font-weight: 300;
    & a {
      text-decoration: none;
      & img {
        width: 15px;
        margin-top: -3px;
        outline: none;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .cryptoMarket {
    & .output-submit {
      position: relative;
      right: 0px;
      border-radius: 10px;
    }
  }
}
@media screen and (max-width: 400px) {
  .footer-component {
    display: block;
    & .text-footer {
      width: 100%;
    }
    & button {
      margin-top: 10px !important;
    }
  }
}
</style>