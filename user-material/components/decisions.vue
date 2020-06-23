<template>
  <div class="tableDashboard">
    <v-simple-table
      id="tableDashboard"
      :height="`${maxHeight}px`"
      fixed-header
      dark
      class="table-dashboard"
    >
      <template v-if="loaded" v-slot:default>
        <thead>
          <tr>
            <th v-for="item in titles" :key="item.title" class="text-left">
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(d, idx) in tableData" :key="idx">
            <td>{{ d.botName }}</td>
            <td>{{ d.type }}</td>
            <td>{{ d.status }}</td>
            <td>{{ d.balance }}</td>
            <td>{{ d.profit }}</td>
            <td>
              <decisions-graph :data="d.statisticGraphData"></decisions-graph>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="pages text-center">
      <v-pagination v-model="currentPage" :length="pagesAmount"></v-pagination>
    </div>
  </div>
</template>

<script>
import decisionsGraph from '@/components/decisions-graph'
export default {
  name: 'DecisionsModule',
  components: {
    decisionsGraph
  },
  data: () => ({
    loaded: false,
    maxHeight: null,
    currentPage: 1,
    pagesPerView: 10,
    titles: [
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
      }
    ],
    decisions: [
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 3, 8]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      },
      {
        isActive: 'false',
        botName: 'CryptoBot',
        type: 'Крипторынок',
        status: 'Тестирование',
        balance: 'BTC',
        profit: '5%',
        statisticGraphData: {
          labels: ['', '', '', '', '', '', ''],
          data: [0, 0, -10, 5, 7, 12, -3]
        }
      }
    ]
  }),
  computed: {
    tableData() {
      return this.decisions.slice(
        this.currentPage * this.pagesPerView - this.pagesPerView,
        this.currentPage * this.pagesPerView
      )
      // return this.decisions.slice(0, 5)
    },
    pagesAmount() {
      return Math.ceil(this.decisions.length / this.pagesPerView)
      // return 3
    }
  },
  mounted() {
    this.maxHeight = document.getElementById('tableDashboard').clientHeight
    this.loaded = true
  }
}
</script>
<style lang="scss" scoped>
.tableDashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.table-dashboard {
  margin-top: 15px;
  overflow-y: auto;
  background-color: transparent !important;
  flex: 1;
  & thead th {
    background: #24303c !important;
  }
}
.theme--dark.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: rgba(107, 137, 79, 0.2);
}
.pages {
  margin-top: 16px;
}
</style>
