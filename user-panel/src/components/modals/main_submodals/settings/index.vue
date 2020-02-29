<template>
  <div class="settings-main-modal">
    <div class="main-modal-wrapper">
      <div class="item" v-for="(item, index) in selectors" :key="item.title">
        <p class="title">{{ item.title }}</p>
        <!-- Класс disabled всё выкл -->
        <div class="row">
          <div
            :style="item.isOpen ? 'border-bottom: none; padding-bottom: 2px;' : ''"
            class="list-wrapper disabled"
          >
            <p @click="item.isOpen = !item.isOpen" class="list-wrapper-item">
              {{ item.selected }}
              <img
                ondragstart="return false;"
                src="../../../../assets/common/arrow-down-grey.svg"
                alt
              />
            </p>
            <transition name="scaleY" mode="out-in">
              <div class="select" :style="`z-index:${999 - index}`" v-show="item.isOpen">
                <p
                  v-show="point !== item.selected"
                  @click="selecting(item, point)"
                  class="list-wrapper-item"
                  v-for="point in item.list"
                  :key="point"
                >{{ point }}</p>
              </div>
            </transition>
          </div>
          <p class="status">
            <span class="remove" @click="remove(item)" v-if="item.btn === 'remove' && item.title ==='Авторизация интерфейса'">Отвязать</span>
            <span class="save" @click="save(item)"  v-else-if="item.btn === 'save'">Сохранить</span>
            <span class="saved" v-else-if="item.btn === 'saved'">Сохранено</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings-main-modal",
  data: () => ({
    selectors: [
      // {
      //   title: "Язык интерфейса",
      //   isOpen: false,
      //   selected: "",
      //   list: ["Русский", "English", "Germany", "Turkey", "Francis", "Italiano"]
      // },
      // {
      //   title: "Авторизация интерфейса",
      //   isOpen: false,
      //   selected: "",
      //   oldSelected: '',
      //   isSaved: true,
      //   btn: 'remove',
      //   list: ["Не установлен", "Google"]
      // },
      // {
      //   title: "Способ автовывода",
      //   isOpen: false,
      //   selected: "",
      //   oldSelected: '',
      //   isSaved: true,
      //   btn: 'remove',
      //   list: ["Payeer", "Perfect Money", "Добавить способ"]
      // },
      {
        title: "Язык интерфейса",
        isOpen: false,
        selected: "",
        oldSelected: '',
        isSaved: true,
        btn: 'remove',
        list: ["[ В разработке ]"]
      },
      {
        title: "Авторизация интерфейса",
        isOpen: false,
        selected: "",
        oldSelected: '',
        isSaved: true,
        btn: 'remove',
        list: ["[ В разработке ]"]
      },
      {
        title: "Способ автовывода",
        isOpen: false,
        selected: "",
        oldSelected: '',
        isSaved: true,
        btn: 'remove',
        list: ["[ В разработке ]"]
      },
    ]
  }),
  mounted() {
    // получаем данные о выбранных селектах у юзера
    this.selectors.forEach(item => {
      item.oldSelected = item.list[0];
      item.selected = item.list[0];
    });
  },
  methods: {
    save (item) {
      item.isSaved = true;
      item.oldSelected = item.selected
      item.btn = 'saved'
    },
    remove (item) {
      item.isSaved = false;
      item.selected = item.list[0]
      item.btn = 'save'
    },
    selecting(item, selected) {
      item.selected = selected ? selected : item.selected;
      item.isOpen = !item.isOpen;
      if(selected !== item.oldSelected) {
        item.isSaved = false
        item.btn = 'save'
      } else {
        item.isSaved = true
        item.btn = 'remove'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-main-modal {
  overflow-y: visible !important;
}
.main-modal-wrapper {
  & .item {
    margin-bottom: 20px;
    & .row {
      display: flex;
      align-items: center;
      margin-top: 10px;
      & .status {
        font-size: 1em;
        margin-left: 20px;
        cursor: pointer;
        user-select: none;
        & .remove {
          color: #DF4545;
          border-bottom: 1px solid #DF4545;
        }
        & .save {
          color: #379A1D;
          border-bottom: 1px solid #379A1D;
        }
        & .saved {
          color: #379A1D;
          border-bottom: none;
          cursor: default;
        }
      }
    }
    & .title {
      font-size: 1.2em;
      font-weight: 600;
      color: #302d2b;
      user-select: none;
    }
    & .list-wrapper {
      border: 2px solid #707070;
      max-width: 200px;
      width: calc(100% - 4px);
      position: relative;
      background: #fff;
      &.disabled,  &.disabled + .status{
        cursor: default;
        opacity: .5;
        pointer-events: none;
        .status {
          display: none;
        }
        & img {
          display: none;
        }
      }
      & .select {
        position: absolute;
        border: 2px solid #707070;
        width: calc(100% + 4px);
        margin-left: -2px;
        border-top: none;
        background: #fff;
      }
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #302d2b;
        font-size: 1.1em;
        cursor: pointer;
        line-height: 1.7em;
        background: transparent;
        padding: 2px 10px;
        transition-duration: 0.2s;
        user-select: none;
        & img {
          margin-top: 3px;
          user-select: none;
        }
        &:hover {
          background: #379a1d;
          color: #fff;
        }
      }
    }
  }
}
</style>