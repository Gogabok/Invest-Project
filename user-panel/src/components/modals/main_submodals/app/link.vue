<template>
  <div class="secure-main-modal-link">
    <p class="desc">
      Скачайте приложение для удобного просмотра статистики
      с вашего мобильного устройства.
    </p>
    <p class="desc">
      При включенном 2FA, вы сможете подтверждать авторизацию
      и вывод денежных средств в один клик.
    </p>
    <div class="links">
      <div class="item google">
        <img ondragstart="return false;" src="../../../../assets/modals/googleStore.svg" alt="">
        <p class="text">
          Скачать в
          <span>Google play</span>
        </p>
      </div>
      <div class="item app">
        <img ondragstart="return false;" src="../../../../assets/modals/appStore.svg" alt="">
        <p class="text">
          Скачать в
          <span>AppStore</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "secure-main-modal-twofa"
};
</script>

<style lang="scss" scoped>
.secure-main-modal-link {
  margin-top: 30px;
  & .desc {
    font-size: 1.2em;
    color: #302d2b;
    margin-top: 10px;
  }
  & .links {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin: 40px 0px 20px 0px;
    & .item {
      border: 2px solid #D8DCDE;
      display: flex;
      align-items: center;
      user-select: none;
      transition-duration: .2s;
      background: transparent;
      cursor: pointer;
      &:hover {
        border: 2px solid #379A1D;
        background: rgba(55, 154, 28, .1);
      }
      &.google {
        & img {
          width: 50px;
        }
        padding: 0px 30px 5px 7px;
      }
      &.app {
        & img {
          width: 32px;
        }
        padding: 2.5px 25px 2.5px 25px;
      }
      & .text {
        font-size: 1.1em;
        text-transform: uppercase;
        color: #9FA3B0;
        margin-top: 5px;
        margin-left: 10px;
        & span {
          text-transform: none;
          font-weight: 600;
          display: block;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .secure-main-modal-link {
    & .links {
      display: block;
      & .item {
        margin: 20px 10px;
      }
    }
  }
}
</style>