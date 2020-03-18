<template>
  <div class="output-modal">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../../assets/modals/close.svg"
      alt
    />
    <div class="text-area">
      <div class="title">
        <img
          @click="back"
          ondragstart="return false;"
          src="../../../assets/common/arrow-left-grey.svg"
          alt
        />
        Инвест-Клуб
      </div>
      <p class="desc">
        <span>Подпишитесь</span> сейчас на полезные информационные каналы проекта в YouTube и Telegram,
        получайте инструкции по настройке профитных ботов, обзоры проектов и расследованиях хайпов.
      </p>
    </div>
    <div class="methods">
      <a target="_blank" href="https://www.youtube.com/" class="item">Youtube</a>
      <a target="_blank" href="https://web.telegram.org/" class="item">Telegram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalManagementTrust",
  props: ["modal", "index"],
  methods: {
    back() {
      this.$emit("deleteModal", { modal: this.modal, index: this.index });
      this.$store.dispatch("modalStore/ADD_MODAL", {
        title: "invest",
        link: "invest"
      });
    },
    deleteModal(modal, index) {
      this.$emit("deleteModal", { modal, index });
    }
  }
};
</script>


<style lang="scss" scoped>
.output-modal {
  height: 100%;
  width: 100%;
  background: #fff;
  max-height: 700px;
  max-width: 1000px;
  border-radius: 5px;
  margin: 0px auto;
  position: relative;
  & .text-area {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  & .methods {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  & .text-area {
    padding: 15px 20px;
    background: #f5f5f5;
    user-select: none;
    & .title {
      color: #3b4757;
      font-weight: 300;
      margin-bottom: 5px;
      font-size: 1.6em;
      & img {
        width: 25px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    & .desc {
      color: #3b4757;
      font-weight: 400;
      font-size: 1.1em;
      margin-left: 42.5px;
      & span {
        font-weight: 600;
      }
      & span.underlined {
        font-weight: 400;
        color: #40ae76;
        text-decoration: underline;
      }
    }
  }
  & .methods {
    background: #fff;
    padding: 40px 0px 65px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 80vh;
    user-select: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &::-webkit-scrollbar {
      background: #e4e4e4;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(45, 45, 45, 0.7);
      border-radius: 5px;
    }
    & .item {
      width: calc(50% - 50px);
      border: 1px solid #707070;
      border-radius: 10px;
      padding: 120px 10px;
      text-decoration: none;
      color: #3b4757;
    }
  }
}
.modal-close {
  position: absolute;
  right: -25px;
  top: -25px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  z-index: 9999;
}
@media screen and (max-width: 1100px) {
  .modal-close {
    right: 5px;
    top: -45px;
  }
  .output-modal {
    max-width: calc(100% - 20px);
  }
}
@media screen and (max-width: 700px) {
  .output-modal {
    & .methods {
      flex-wrap: wrap;
      & .item {
        width: calc(100% - 40px);
        margin: 10px 0px;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .output-modal {
    & .methods {
      max-height: 40vh;
      padding: 15px 0px;
    }
  }
}
</style>