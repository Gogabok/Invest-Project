<template>
  <div class="decisions-wrapper">
    <div class="decisions-wrapper-nav">
      <div 
          v-for="navItem in navigation"
          :key="navItem.title"
          class="nav-item">
            {{ navItem.title }}
      </div>
    </div>
    <div class="desicions-wrapper-content">
      <label

          class="content-item">
          
          <p class="content-item-text content-item-with-checkbox">
            <input class="content-checkbox" type="checkbox" name="keyIndex">
            <span><span></span></span>
            CryptoBot
          </p>
          <p class="content-item-text">
            Крипторынок
          </p>
          <p class="content-item-text">
            Тестирование
          </p>
          <p class="content-item-text">
            BTC
          </p>
          <p class="content-item-text">
            5%
          </p>
          <p class="content-item-text">
            <decisions-statistic-graph></decisions-statistic-graph>
          </p>
      </label>
    </div>
  </div>
</template>

<script>
import desicionsStatisticGraph from "@/components/dashboard/decisions-statistic-graph"
export default {
  name: 'dashboardDecisions',
  data: () => ({
    navigation: [
      {
        title: 'Бот'
      },
      {
        title: 'Тип'
      },
      {
        title: 'Статус'
      },
      {
        title: 'Баланс'
      },
      {
        title: 'Доходность'
      },
      {
        title: 'Статистика'
      },
    ]
  })
}
</script>



<style lang="scss">
  .decisions-wrapper-nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 30px;
    margin-bottom: 10px;
    & .nav-item {
      color: #fff;
      font-weight: bold;
      font-size: 1.2em;
      width: calc(100% / 6)
    }
  }
  .content-item {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    & .content-item-text {
      font-weight: 400;
      color: #fff;
      font-size: 1.1em;
      width: calc(100% / 6);
      line-height: 16px;
    }
  }

  .content-checkbox {
    display: none;
  }
  .content-item-with-checkbox {
    display: flex;
    align-items: center;
  }
  .content-checkbox + span {
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    padding: 2px;
    transition-duration: .3s;
  }
  .content-checkbox:checked + span {
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    transition-duration: .3s;
  }
  .content-checkbox + span span {
    border-radius: 50%;
    display: block;
    width: 13px;
    height: 13px;
    background: transparent;
    transition-duration: .3s;
  }
  .content-checkbox:checked + span span {
    border-radius: 50%;
    display: block;
    width: 13px;
    height: 13px;
    background: #45F516;
    transition-duration: .3s;
  }




</style>