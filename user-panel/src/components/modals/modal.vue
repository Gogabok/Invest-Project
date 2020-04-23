<template>
  <transition-group name="fade-group-faster" tag="div" class="modal-overlay">
    <div
      class="modal"
      v-for="(modal, index) in this.$store.state.modalStore.modals"
      :key="modal.component + index"
    >
      <transition name="fade" mode="out-in">
        <component
          @deleteModal="deleteModal"
          :modal="modal"
          :index="index"
          :is="`modal-${modal.component}`"
        ></component>
      </transition>
    </div>
    <div class="overlay" key="overlay"></div>
  </transition-group>
</template>

<script>
import modalMain from "@/components/modals/main-modal";
import modalCodeVerification from "@/components/modals/codeverification";
import modalOutput from "@/components/modals/output";
import modalInvest from "@/components/modals/invest";
import modalMainMethodsOutput from "@/components/modals/output/mainMethodsOutput";
import modalAutoMethodsOutput from "@/components/modals/output/autoMethodsOutput";
import modalSuccessMessage from "@/components/modals/successMessage";
import modalErrorMessage from "@/components/modals/errorMessage";
import modalManagementTrust from "@/components/modals/management_invest/trust";
import modalManagementUnControl from "@/components/modals/management_invest/unControl";
import modalManagementClub from "@/components/modals/management_invest/club";
import modalExtraInfo from "@/components/modals/extraInfo";
import store from "@/store";
export default {
  name: "main-modal",
  components: {
    modalMain,
    modalCodeVerification,
    modalOutput,
    modalMainMethodsOutput,
    modalAutoMethodsOutput,
    modalSuccessMessage,
    modalInvest,
    modalManagementTrust,
    modalManagementUnControl,
    modalErrorMessage,
    modalManagementClub,
    modalExtraInfo
  },
  mounted() {
    let textes = document.querySelectorAll(".dashboard")[0]
    textes.style.filter = "blur(1px)"

    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    document.getElementsByTagName("html")[0].style.paddingRight = "8px";
    if (document.body.clientWidth < 830) {
      document.getElementsByClassName("navigation")[0].style.width =
        "calc(100% - 8px)";
    }
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.addEventListener("mousedown", function(e) {
      if (e.target === overlay) {
        store.dispatch("modalStore/DELETE_ALL_MODALS");
      }
    });
  },
  destroyed() {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    document.getElementsByTagName("html")[0].style.paddingRight = "0px";
    document.getElementsByClassName("navigation")[0].style.width = "100%";
    let textes = document.querySelectorAll(".dashboard")[0]
    textes.style.filter = "blur(0px)"
  },
  methods: {
    deleteModal(payload) {
      this.$store.dispatch("modalStore/DELETE_MODAL", {
        modal: payload.modal,
        index: payload.index
      })
    }
  }
};
</script>


<style lang="scss" scoped>
.modal-overlay {
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(112, 112, 112, 0.7);
  z-index: 999;
  padding: 60px;
  filter: blur(200px);
}
.modal {
  // max-width: 1000px;
  // max-height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // width: 100%;
  // height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 9999;
}
.modal-wrapper {
  background: #fff;
  border: 3px solid #e4e4e4;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-height: 700px;
  max-width: 1000px;
}
.modal-wrapper::-webkit-scrollbar {
  background: #e4e4e4;
  width: 8px;
}
.modal-wrapper::-webkit-scrollbar-thumb {
  background: rgba(45, 45, 45, 0.7);
  border-radius: 5px;
}
@media screen and (max-width: 630px) {
  .modal-overlay {
    padding: 50px 0px 50px 0px;
  }
  .modal-close {
    top: 15px;
    right: 10px;
  }
  .modal-wrapper {
    max-height: 100%;
    overflow-y: auto;
  }
  .modal-overlay {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>