<template>
  <div class="secure-main-modal-qr">
    <p class="desc">
      Для установки приложения вы можете сканировать QR-код.
    </p>
    <div class="qrs">
      <div class="qr">
        <p class="qr-title">Google Play</p>
        <img ondragstart="return false;" src="../../../../assets/modals/googleStoreQr.svg" alt="">
      </div>
      <div class="qr">
        <p class="qr-title">App Store</p>
        <img ondragstart="return false;" src="../../../../assets/modals/appStoreQr.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'secure-main-modal-qr',
}
</script>

<style lang="scss" scoped>
  .secure-main-modal-qr {
    margin-top: 30px;
    user-select: none;
    & .desc {
      font-size: 1.2em;
      color: #302d2b;
      margin-top: 10px;
      text-align: center;
    }
    & .qrs {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 30px 0px 10px 0px;
      & .qr {
        text-align: center;
        width: 50%;
        &-title {
          color: #379A1D;
          font-size: 1.3em;
          margin: 20px 0px;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 440px){
    .secure-main-modal-qr {
    margin-top: 30px;
    user-select: none;
      & .desc {
        font-size: 1.2em;
        color: #302d2b;
        margin-top: 10px;
        text-align: center;
      }
      & .qrs {
        display: block;
        & .qr {
          margin: 10px auto;
        }
      }
    }
  }
</style>