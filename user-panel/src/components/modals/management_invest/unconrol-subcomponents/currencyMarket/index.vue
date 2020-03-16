<template>
  <div class="cryptoMarket">
    <div class="text">
      <p class="title">Описание</p>
      <ul class="text-list">
        <li class="text-list-item">
          Торговля на бирже Forex с автоматизацией по копированию сделок.
        </li>
        <li class="text-list-item">Наиболее простой вариант, но с рисками (маржинальная торговля).</li>
      </ul>
    </div>
    <div class="text">
      <p class="title">Безопасность</p>
      <ul class="text-list">
        <li class="text-list-item">Проверенные временем брокеры с периодом работы ~10 лет.</li>
        <li class="text-list-item">Деньги находятся в ваших собственных аккаунтах на счетах брокеров.</li>
      </ul>
    </div>
    <div class="text">
      <p class="title">Диверсификация</p>
      <ul class="text-list">
        <li class="text-list-item">Используется 2 лучших бота (в доверительном управлении более 20).</li>
        <li class="text-list-item">Распределение бюджета на 2 брокеров.</li>
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
  name: "CryptoMarket",
  methods: {
    select () {
      this.$emit("selecting", {
        title: "МАРКЕТПЛЕЙС",
        link: "marketPlace",
        isActive: false,
        sublink: 'currencyMarket'
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
@media screen and (max-width: 900px) {
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