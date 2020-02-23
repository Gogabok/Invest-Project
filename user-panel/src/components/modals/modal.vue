<template>
  <transition-group name="fade-group-faster" tag="div" class="modal-overlay">
    <div class="modal" v-for="(modal, index) in this.$store.state.modalStore.modals" :key="modal.component + index">
      <img ondragstart="return false;" @click="deleteModal(modal, index)" class="modal-close" src="../../assets/modals/close.svg" alt="">
      <div class="modal-wrapper">
        {{ modal }}
      </div>
    </div>
  </transition-group>
</template>

<script>
import store from '@/store'
export default {
  name: "main-modal",
  mounted() {
    document.getElementsByTagName('html')[0].style.overflow = "hidden"
    let overlay = document.getElementsByClassName("modal-overlay")[0]
    overlay.addEventListener("click", function (e) {
      if(e.target === overlay) {
        store.dispatch("modalStore/DELETE_ALL_MODALS")
      }
    })
  },
  destroyed() {
    document.getElementsByTagName('html')[0].style.overflowY = "scroll"
  },
  methods: {
    deleteModal (modal, index) {
      this.$store.dispatch("modalStore/DELETE_MODAL", {modal: modal, index: index})
    },
  }
}
</script>


<style lang="scss" scoped>
  .modal-overlay {
    overflow: hidden;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
  }
  .modal {
    max-width: 1000px;
    max-height: 700px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box
  }
  .modal-close {
    position: absolute;
    right: -20px;
    top: -10px;
    cursor: pointer;
    user-select: none;
  }
  .modal-wrapper {
    background: #fff;
    border: 3px solid #E4E4E4;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
</style>