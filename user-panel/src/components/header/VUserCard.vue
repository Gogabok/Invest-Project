<template>
  <div class="v-user-card">
    <p class="v-user-name">woohoohooh@gmail.com</p>
    <div class="v-user-card-extraDots">
      <span class="v-user-card-extraDots-item"></span>
      <span class="v-user-card-extraDots-item"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-user-card'
}
</script>

<style lang="scss">
  .v-user-card {
    padding: 20px 30px;
    background: rgba(184, 189, 196, 0.1);
    color: #fff;
    border-radius: 3px;
    margin-left: auto;
    position: relative;
    font-size: 1em;
    font-weight: 400;
    & .v-user-card-extraDots {
      position: absolute;
      top: 4px;
      right: 5px;
      width: 10px;
      height: 10px;
      cursor: pointer;
      & .v-user-card-extraDots-item {
        display: block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        margin: 4px 0px;
        background: rgba(184, 189, 196, 0.5);
      }
    }
  }
</style>