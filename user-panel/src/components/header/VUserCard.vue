<template>
  <div class="v-user-card">
    <p class="v-user-name">woohoohooh@gmail.com</p>
    <div class="v-user-card-extraDots" @click="openMiniModal">
      <span class="v-user-card-extraDots-item"></span>
      <span class="v-user-card-extraDots-item"></span>
    </div>
    <transition name="scaleY" mode="out-in">
      <div class="card-modal" v-show="modal.isActive">
        <!-- {{ miniModals[modal].list[0].title }} -->
        <div class="list">
          <p
            @click="openModal(item)"
            class="item"
            v-for="item in modal.list"
            :key="item.link"
          >{{ item.title }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "v-user-card",
  data: () => ({
    modal: {
      isActive: false,
      list: [
        {
          title: "Редактировать",
          link: "main",
          sublink: "profile"
        },
        {
          title: "Выйти",
          link: "exit",
          sublink: "profile"
        }
      ]
    }
  }),
  methods: {
    openMiniModal () {
      this.modal.isActive = !this.modal.isActive
    },
    openModal (payload) {
      this.modal.isActive = false
      if(payload.link !== 'exit') {
        this.$store.dispatch("modalStore/ADD_MODAL", payload)
      } else {
        alert("User logout")
      }
    }
  },
};
</script>

<style lang="scss">
.v-user-card {
  padding: 12.5px 20px 12.5px 15px;
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
    right: 0px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    & .v-user-card-extraDots-item {
      display: block;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      margin: 4px auto;
      background: rgba(184, 189, 196, 0.5);
    }
  }
}
.card-modal {
  position: absolute;
  top: 30px;
  right: -50px;
  background: #2E3C3E;
  z-index: 999;
  border-radius: 3px;
  & .list {
    & .item {
      padding: 5px 15px;
      color: #fff;
      font-size: 1.1em;
      cursor: pointer;
      user-select: none;
      width: 100%;
      transition-duration: 0.3s;
      &:hover {
        background: #379a1d;
      }
    }
  }
}
@media screen and (max-width: 1530px) {
  .v-user-card {
    padding: 6.5px 20px 6.5px 5px;
  }
}
@media screen and (max-width: 991px) {
  .card-modal {
    right: 0px;
  }
}
</style>