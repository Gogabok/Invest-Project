<template>
  <div class="main-modal">
    <img ondragstart="return false;" @click="deleteModal(modal, index)" class="modal-close" src="../../../assets/modals/close.svg" alt="">
    <main-nav @back="back" @selecting="selecting" :activeNavItem="activeNavItem"></main-nav>
    <transition mode="out-in" name="fade-faster">
      <component class="main-modal-component" :is="activeNavItem"></component>
    </transition>
  </div>
</template>

<script>
import mainNav from "@/components/modals/management_invest/unconrol-subcomponents/invest-navigation"
export default {
  name: 'managementUnConrol',
  props: ["modal", "index"],
  components: {
    mainNav
  },
  data: () => ({
    activeNavItem: null
  }),
  created() {
    if(this.modal) {
      this.activeNavItem = this.modal.subModal
    }
  },
  methods: {
    back () {
      this.$emit("deleteModal", { modal: this.modal, index: this.index });
      this.$store.dispatch("modalStore/ADD_MODAL", 
      {title: 'invest', link: 'invest'})
    },
    deleteModal(modal, index) {
      this.$emit("deleteModal", {modal, index})
    },
    selecting (payload) {
      this.activeNavItem = payload.link
    },
  }
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
    .main-modal {
      max-height: 75vh;
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