<template>
  <div class="main-modal">
    <img ondragstart="return false;" @click="deleteModal(modal, index)" class="modal-close" src="../../assets/modals/close.svg" alt="">
    <main-nav :activeNavItem="activeNavItem"></main-nav>
  </div>
</template>

<script>
import mainNav from "@/components/modals/main_submodals/main-navigation"
export default {
  name: "modal-main",
  // Все возможные модальные окна нужно регать через Import и объект Components
  components: {
    mainNav
  },
  props: ["modal", "index"],
  data: () => ({
    activeNavItem: null
  }),
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", {modal, index})
    }
  },
  created() {
    if(this.modal) {
      this.activeNavItem = this.modal.subModal
    }
  },
}
</script>

<style lang="scss" scoped>
  .main-modal {
    height: 100%;
    width: 100%;
    
  }
  .modal-close {
    position: absolute;
    right: -40px;
    top: -35px;
    cursor: pointer;
    user-select: none;
    z-index: 9999;
  }
  @media screen and (max-width: 630px) {
    .modal-close {
      top: -40px;
      right: 5px;
    }
  }
</style>