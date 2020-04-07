<template>
  <div class="main-modal">
    <img
      ondragstart="return false;"
      @click="deleteModal(modal, index)"
      class="modal-close"
      src="../../../assets/modals/close.svg"
      alt
    />
    <div class="main-navigation">
      <div class="list">
        <div class="back" @click="back">
          <img ondragstart="return false;" src="@/assets/common/arrow-left-grey.svg" alt />
          Независимое управление
        </div>
        <div
          @click="selecting(item)"
          class="item"
          :class="item.isActive ? 'active' : ''"
          v-for="item in nav"
          :key="item.link"
        >
          {{ item.title }}
          <img
            ondragstart="return false;"
            v-show="item.isActive"
            src="@/assets/common/arrow-right-gray.svg"
            alt
          />
        </div>
      </div>
    </div>
    <!-- <transition mode="out-in" name="fade-faster"> -->
      <component @deleteModal="deleteModal" :sublink="nav.find(item => item.sublink)"  @selecting="selecting" class="main-modal-component" :is="activeNavItem"></component>
    <!-- </transition> -->
  </div>
</template>

<script>

import cryptoMarket from "@/components/modals/management_invest/unconrol-subcomponents/cryptoMarket";
import currencyMarket from "@/components/modals/management_invest/unconrol-subcomponents/currencyMarket";
import stockMarket from "@/components/modals/management_invest/unconrol-subcomponents/stockMarket";
import bettingMarket from "@/components/modals/management_invest/unconrol-subcomponents/bettingMarket";
import marketPlace from "@/components/modals/management_invest/unconrol-subcomponents/marketPlace";
export default {
  name: "managementUnConrol",
  props: ["modal", "index"],
  components: {
    cryptoMarket,
    currencyMarket,
    stockMarket,
    bettingMarket,
    marketPlace
  },
  data: () => ({
    activeNavItem: null,
    nav: [
      {
        title: "Крипторынок",
        link: "cryptoMarket",
        isActive: false
      },
      {
        title: "Валютный рынок",
        link: "currencyMarket",
        isActive: false
      },
      {
        title: "Фондовый рынок",
        link: "stockMarket",
        isActive: false
      },
      {
        title: "Букмекерский рынок",
        link: "bettingMarket",
        isActive: false
      },
      {
        title: "МАРКЕТПЛЕЙС",
        link: "marketPlace",
        isActive: false,
        sublink: 'cryptoMarket'
      }
    ]
  }),
  created() {
    if (this.modal) {
      this.activeNavItem = this.modal.subModal;
    }
  },
  mounted() {
    this.nav.forEach(item => {
      if (item.link === this.activeNavItem) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  },
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
    },
    selecting(payload) {
      this.nav.forEach(item => {
        if (item.link === payload.link) {
          if (!item.isActive) {
            this.activeNavItem = item.link;
            item.sublink = payload.sublink
            item.isActive = true
          } else {
            return false;
          }
        } else {
          item.isActive = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-modal {
  height: 100%;
  min-height: 620px;
  width: 100%;
  display: flex;
  align-items: stretch;
  // overflow: hidden;
  background: #fff;
  border: 3px solid #e4e4e4;
  // max-height: 700px;
  max-width: 1000px;
  border-radius: 5px;
  margin: 0px auto;
  position: relative;
}
.main-modal-component {
  overflow-y: auto;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-modal-component::-webkit-scrollbar {
  background: #e4e4e4;
  width: 8px;
}
.main-modal-component::-webkit-scrollbar-thumb {
  background: rgba(45, 45, 45, 0.7);
  border-radius: 5px;
}
.main-modal::-webkit-scrollbar {
  background: #e4e4e4;
  width: 8px;
}
.main-modal::-webkit-scrollbar-thumb {
  background: rgba(45, 45, 45, 0.7);
  border-radius: 5px;
}
.modal-close {
  position: absolute;
  right: -28px;
  top: -28px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  z-index: 9999;
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
@media screen and (max-width: 900px) {
  .main-modal {
    display: block;
    overflow: auto;
    position: static;
  }
  .main-modal-component {
    padding: 0px 10px 0px 10px;
    max-height: none;
    height: auto;
    width: 100%;
  }
}
@media screen and (max-width: 630px) {
  .main-modal-component {
    padding: 0px;
  }
}
.main-navigation {
  max-width: 300px;
  border-right: 2px solid #e4e4e4;
  background: #F5F5F5;
  // height: 100%;
  width: 100%;
  & .list {
    padding: 5px 0px 5px 0px;
    & .item {
      padding: 20px 20px;
      width: 100%;
      cursor: pointer;
      font-size: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      transition-duration: .1s;
      user-select: none;
      & img {
        width: 10px;
        pointer-events: none;
        user-select: none;
      }
      &:nth-child(2) {
        border-bottom: 2px solid #e4e4e4;
        border-top: 2px solid #e4e4e4;
      }
      &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        border-bottom: 2px solid #e4e4e4;
      }
      &.active {
        color: #379A1D;
        font-weight: 600;
      }
    }
    & .back {
      padding: 10px 10px;
      width: 100%;
      font-size: 1.2em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      transition-duration: .1s;
      user-select: none;
      cursor: pointer;
      & img {
        width: 20px;
        pointer-events: none;
        user-select: none;
        margin-right: 15px;
      }
    }
  }
}
@media screen and (max-width: 900px) {
    .main-navigation {
      max-width: 100%;
      height: auto;
      & .list {
        padding: 0px;
      }
    }
  }
@media screen and (max-width: 630px) {
  .main-navigation {
    border-width: 1px;
    & .list {
      & .item {
        font-size: 14px;
        padding: 10px;
        &:nth-child(2) {
          border-width: 1px;
        }
        &:nth-child(3) {
          border-width: 1px;
        }
        & img {
          width: 7px;
        }
      }
    }
  }
}
</style>