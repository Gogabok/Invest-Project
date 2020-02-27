<template>
  <div class="main-modal">
    <img ondragstart="return false;" @click="deleteModal(modal, index)" class="modal-close" src="../../assets/modals/close.svg" alt="">
    <main-nav @selecting="selecting" :activeNavItem="activeNavItem"></main-nav>
    <transition mode="out-in" name="fade-faster">
      <component class="main-modal-component" :is="activeNavItem"></component>
    </transition>
  </div>
</template>

<script>
// Навигация модального окна "Main"
import mainNav from "@/components/modals/main_submodals/main-navigation"

// Компоненты модального окна "Main"
import profile from "@/components/modals/main_submodals/profile"
import secure from "@/components/modals/main_submodals/secure"
import settings from "@/components/modals/main_submodals/settings"
import app from "@/components/modals/main_submodals/app"

export default {
  name: "modal-main",
  // Все возможные модальные окна нужно регать через Import и объект Components
  components: {
    mainNav, profile, secure, settings, app
  },
  props: ["modal", "index"],
  data: () => ({
    activeNavItem: null
  }),
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", {modal, index})
    },
    selecting (payload) {
      this.activeNavItem = payload.link
    },
    cons() {
      console.log(1)
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
    display: flex;
    align-items: stretch;
    // overflow: hidden;
    background: #fff;
    border: 3px solid #E4E4E4;
    max-height: 700px;
    max-width: 1000px;
    border-radius: 5px;
    margin: 0px auto;
    position: relative;
  }
  .main-modal-component {
    padding: 15px 20px;
    overflow-y: auto;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    
  }
  .main-modal-component::-webkit-scrollbar{
    background: #E4E4E4;
    width: 8px;
  }
  .main-modal-component::-webkit-scrollbar-thumb{
    background: rgba(45, 45, 45, .7);
    border-radius: 5px;
  } 
  .main-modal::-webkit-scrollbar{
    background: #E4E4E4;
    width: 8px;
  }
  .main-modal::-webkit-scrollbar-thumb{
    background: rgba(45, 45, 45, .7);
    border-radius: 5px;
  } 
  .modal-close {
    position: absolute;
    right: -40px;
    top: -35px;
    cursor: pointer;
    user-select: none;
    z-index: 9999;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 1100px) {
    .modal-close {
      top: -40px;
      right: 10px;
    }
  }
  @media screen and (max-width: 1000px) {
    .main-modal {
      max-width: calc(100% - 20px);
    }
  }
   @media screen and (max-width: 800px) {
    .main-modal {
      display: block;
      overflow: auto;
      position: static;
    }
    .main-modal-component {
      padding: 0px 10px 0px 10px;
      max-height: none;
      height:auto;
      width: 100%;
    }
  }
  @media screen and (max-width: 630px) {
    .main-modal-component {
      padding: 0px;
    }
  }
</style>