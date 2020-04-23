<template>
  <div class="main-modal">
    <img ondragstart="return false;" @click="deleteModal(modal, index)" class="modal-close" src="../../assets/modals/close.svg" alt="">
    <div class="main-navigation">
      <div class="list">
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
    <transition name="fade-faster" mode="out-in">
      <div class="component-modal">
        <component :is="activeNavItem"></component>
      </div>
    </transition>
  </div>
</template>

<script>
import refferals from "@/components/modals/extraInfo/refferals"
import promo from "@/components/modals/extraInfo/promo"
export default {
  name: "extraInfo",
  components: {
    refferals,
    promo
  },
  props: ["modal", "index"],
  data: () => ({
    activeNavItem: null,
    nav: [
      {
        title: "Реферальная ссылка",
        link: "refferals",
        isActive: false
      },
      {
        title: "Промоматериалы",
        link: "promo",
        isActive: false
      }
    ]
  }),
  mounted() {
    if(this.modal.subModal) {
      this.nav.forEach(item => {
        if(item.link === this.modal.subModal) {
          item.isActive = true
          this.activeNavItem = item.link
        } else {
          item.isActive = false
        }
      })
    } else {
      this.nav[0].isActive = true
      this.activeNavItem = this.nav[0].link
    }
  },
  methods: {
    deleteModal(modal, index) {
      this.$emit("deleteModal", {modal, index})
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
  },
  // created() {
  //   if(this.modal) {
  //     this.activeNavItem = this.modal.subModal
  //   }
  // },
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
    max-height: 800px;
    height: 100%;
    width: 100%;
    max-width: 100%;
    
  }

  .component-modal {
    padding: 15px 20px;
    overflow-y: auto;
    min-height: 500px;
    max-height: 500px;
    height: 100%;
    width: 100%;
    max-width: 100%;
    &::-webkit-scrollbar{
      width: 8px;
    }
    &::-webkit-scrollbar-thumb{
      background: #ccc;
      border: none;
      border-radius: 0;
      opacity: .2;
    } 
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

.main-navigation {
  max-width: 230px;
  border-right: 2px solid #e4e4e4;
  // height: 100%;
  width: 100%;
  & .list {
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
        border-top: 2px solid #e4e4e4;
      }
      &.active {
        font-weight: 600;
        background: #E4E4E4;
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
@media screen and (max-width: 800px) {
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