<template>
  <div class="dashboard-cards">
    <dashboard-card 
                    :balance="investBalance"
    >
    Инвестиции
    </dashboard-card>
    <dashboard-card 
                    :balance="dividendBalance"
                    :extraInfo="'от 5% до 15% в месяц'"
    >
    Дивиденды
    </dashboard-card>
    <dashboard-card 
                    :balance="partherBalance"
    >
    Партнерство
    </dashboard-card>
  </div>
</template>

<script>
import dashboardCard from "@/components/dashboard/dashboard-card"

export default {
  name: 'dashboard-cards',
  components: {
    dashboardCard
  },
  data: () => ({
    investBalance: (0).toFixed(2),
    dividendBalance: (0).toFixed(2),
    partherBalance: (0).toFixed(2)
  })
}
</script>

<style lang="scss">
  .dashboard-cards {
    margin-top: 40px;
    padding: 0px 0px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    & * {
      font-family: "Exo 2", sans-serif;
    }
  }
</style>