<template>
  <div class="languages">
    <p class="language-current">РУ</p>
    <img src="../../assets/header/triangle-languages.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "languages"
}
</script>

<style lang="scss" scoped>
  .languages {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(112, 112, 112, 0.25);
    border-radius: 50%;
    width: 75px;
    height: 75px;
    cursor: pointer;
    user-select: none;
    margin-left: 60px;
    & .language-current {
      color: #fff;
      font-family: "Exo 2", sans-serif;
      font-size: 1.2em;
      margin: 9px 0px;
      font-weight: bold;
    }
  }
</style>