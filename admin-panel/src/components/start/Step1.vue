<template>
  <div class="Step-page">
    <AdaptiveTable
      :headers="headers"
      :body="body"
    ></AdaptiveTable>
  </div>
</template>

<script>
export default {
  name: "Step1",
  data: () => ({
    headers: [
      {
        title: 'Тип решения',
        clazz: 'width12'
      },
      {
        title: 'Рынок',
        clazz: 'width12'
      },
      {
        title: '',
        clazz: 'width20'
      },
      {
        title: 'Инструмент',
        clazz: 'width12'
      },
      {
        title: 'Статистика',
        clazz: 'width30'
      },
      {
        title: 'Последний цикл',
        clazz: 'width12'
      },
      {
        title: 'Управляющий',
        clazz: 'width12'
      }
    ],
    body: [
      {
        
      }
    ]
  })
}
</script>