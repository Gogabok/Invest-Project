<template>
  <div class="secure-main-modal-nav">
    <p @click="selecting(item)" :class="item.isActive ? 'active' : ''" v-for="item in nav" :key="item.title" class="item">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'secure-main-modal-nav',
  data: () => ({
    nav: [
      {
        title: 'Ссылка на Store',
        link: 'VLink',
        isActive: false
      },
      {
        title: 'QR-код',
        link: 'qr',
        isActive: false
      }
    ]
  }),
  mounted() {
    this.nav[0].isActive = true
    this.$emit("selecting", this.nav[0])
  },
  methods: {
    selecting (payload) {
      this.nav.forEach(item => {
        item.isActive = false
      })
      payload.isActive = true
      this.$emit("selecting", payload)
    }
  },
}
</script>

<style lang="scss" scoped>
  .secure-main-modal-nav {
    display: flex;
    align-items: center;
    // width: 80%;
    margin: 0px auto;
    border-bottom: 2px solid #E7E7E7;
    & .item {
      width: 50%;
      text-align: center;
      padding: 15px 0px;
      cursor: pointer;
      font-size: 1.2em;
      font-weight: 400;
      border-bottom: 4px solid transparent;
      margin-bottom: -2px;
      transition: border .3s;
      user-select: none;
      &.active {
        font-weight: 600;
        color: #379A1D;
        border-bottom: 4px solid #379A1D;
      }
    }
  }
</style>