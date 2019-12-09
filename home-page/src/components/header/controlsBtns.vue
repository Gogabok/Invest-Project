<template>
  <div class="controls-wrapper">
    <div class="login">
      <button>Войти</button>
    </div>
    <div class="registration">
      <button>Регистрация</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "controls"
}
</script>

<style lang="scss">
  .controls-wrapper {
    display: flex;
    align-items: center;
    .login {
      margin: 0px 7px;
      & button {
        background: none;
        border: none;
        color: #fff;
        font-family: "Exo 2", sans-serif;
        font-size: 1.2em;
        font-weight: 400;
      }
    }
    .registration {
      margin: 0px 7px;
      & button {
        background: #FFC200;
        border-radius: 94px;
        color: #3B4757;
        font-family: "Exo 2", sans-serif;
        font-size: 1.2em;
        font-weight: 400;
        border: none;
        padding: 10px 25px;
        transition-duration: .2s;
        &:hover {
          box-shadow: 0px 0px 10px 0px #FFC200;
          transition-duration: .2s;
        }
      }
    }
  }
</style>