<template>
  <div class="cryptoMarket">
    <div class="nav">
      <div
        class="item"
        @click="select(item)"
        :class="item.isActive ? 'active' : ''"
        v-for="item in nav"
        :key="item.title"
      >
        <p class="title">{{ item.title }}</p>
        <p class="percent">
          <span>{{ item.percent }}</span> /комиссия
        </p>
        <p class="desc" v-show="item.desc ? item.desc : false">{{ item.desc }}</p>
      </div>
    </div>
    <transition mode="out-in" name="fade-faster">
      <component :is="`${activeSublink}MarketPlace`"></component>
    </transition>
    <div class="footer-component">
      <p class="text-footer">
        Расширенная информация и статистика на сайте
        <a
          href="https://www.jetbot.io/"
          target="_blank"
        >
          jetbot.io
          <img src="../../../../../assets/modals/icon-share.svg" alt />
        </a>
      </p>
      <button class="output-submit" @click="submit">
        Подключить
        <img
          ondragstart="return false;"
          src="../../../../../assets/common/arrow-right-white.svg"
          alt
        />
      </button>
    </div>
  </div>
</template>

<script>
import cryptoMarketMarketPlace from "@/components/modals/management_invest/unconrol-subcomponents/marketPlace/crypto";
import currencyMarketMarketPlace from "@/components/modals/management_invest/unconrol-subcomponents/marketPlace/currency";
import stockMarketMarketPlace from "@/components/modals/management_invest/unconrol-subcomponents/marketPlace/stock";
import bettingMarketMarketPlace from "@/components/modals/management_invest/unconrol-subcomponents/marketPlace/betting";
export default {
  name: "CryptoMarket",
  components: {
    cryptoMarketMarketPlace,
    currencyMarketMarketPlace,
    stockMarketMarketPlace,
    bettingMarketMarketPlace
  },
  props: ["sublink"],
  data: () => ({
    nav: [
      {
        title: "Крипторынок",
        percent: "50%",
        desc: "или аренда/покупка",
        isActive: true,
        link: "cryptoMarket"
      },
      {
        title: "Валютный рынок",
        percent: "30%",
        desc: null,
        isActive: false,
        link: "currencyMarket"
      },
      {
        title: "Фондовый рынок",
        percent: "30%",
        desc: null,
        isActive: false,
        link: "stockMarket"
      },
      {
        title: "Ставки на спорт",
        percent: "50%",
        desc: null,
        isActive: false,
        link: "bettingMarket"
      }
    ],
    activeSublink: "cryptoMarket"
  }),
  mounted() {
    this.nav.forEach(item => {
      if (item.link === this.sublink.sublink) {
        if (!item.isActive) {
          this.activeSublink = this.sublink.sublink;
          item.isActive = true;
        } else {
          return false;
        }
      } else {
        item.isActive = false;
      }
    });
  },
  methods: {
    select(payload) {
      this.nav.forEach(item => {
        if (item.link === payload.link) {
          if (!item.isActive) {
            this.activeSublink = item.link;
            item.isActive = true;
          } else {
            return false;
          }
        } else {
          item.isActive = false;
        }
      });
    },
    submit() {
      this.$emit("deleteModal");
      this.$store.dispatch("modalStore/ADD_MODAL", {
        title: "errorMessage",
        link: "errorMessage",
        message: "Для отправки инструкции подтвердите Email"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cryptoMarket {
  & .output-submit {
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #379a1d;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px 10px 10px 20px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin: 0px 0px 0px auto;
    transition-duration: 0.2s;
    text-transform: uppercase;
    &:hover {
      background: #1e640b;
    }
    & img {
      margin-left: 20px;
    }
  }
}
.nav {
  display: flex;
  border-bottom: 5px solid #f5f5f5;
  justify-content: space-between;
  & .item {
    user-select: none;
    padding: 30px 10px 30px 10px;
    background: #f5f5f5;
    border: 3px solid #fff;
    cursor: pointer;
    transition-duration: 0.2s;
    &.active {
      background: #fff;
    }
    & .title {
      font-size: 1.3em;
      color: #3b4757;
      margin-bottom: 10px;
    }
    & .percent {
      font-size: 1em;
      color: #3b4757;
      & span {
        font-weight: 600;
        font-size: 1.5em;
      }
    }
    & .desc {
      color: #3b4757;
      font-size: 1em;
    }
  }
}
.footer-component {
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 40px 0px 40px 20px;
  border-top: 2px solid #e7ebf1;
  & .text-footer {
    width: 50%;
    font-size: 1em;
    color: #3b4757;
    font-weight: 300;
    & a {
      text-decoration: none;
      & img {
        width: 15px;
        margin-top: -3px;
        outline: none;
      }
    }
  }
}
@media screen and (max-width: 725px) {
  .nav {
    display: block;
      & .item {
        &.active {
          border: 3px solid #3b4757;
        }
      }
  }
}
@media screen and (max-width: 400px) {
  .footer-component {
    display: block;
    & .text-footer {
      width: 100%;
    }
    & button {
      margin-top: 10px !important;
    }
  }
}
</style>