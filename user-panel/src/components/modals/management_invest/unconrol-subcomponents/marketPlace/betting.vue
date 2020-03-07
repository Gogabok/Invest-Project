<template>
  <div class="text">
    <p class="title">Решение нашей разработки с вариантами использования:</p>
    <ul class="text-list">
      <li class="text-list-item">Работа на бирже Betfair напрямую</li>
    </ul>
    <p class="title">/ полная автоматизация, требуется иметь на бирже с балансом от $5,000.</p>
    <ul class="text-list">
      <li class="text-list-item">Через нашего телеграмм-бота</li>
    </ul>
    <p class="title">/ возможность зарабатывать с инвестициями от $30.</p>
  </div>
</template>

<style lang="scss" scoped>
  .text {
    color: #3B4757;
    font-size: 1.1em;
    padding: 10px 30px;
    & * {
      margin: 15px 0px;
    }
    &-list {
      list-style-type: disc;
      &-item {
        margin-left: 20px;
      }
    }
  }
</style>