<template>
  <div class="Start-page">
    <StartSubmenu
      :submenu="submenu"
    ></StartSubmenu>
    <router-view/>
  </div>
</template>

<script>
import StartSubmenu from "@/components/start/StartSubmenu"
export default {
  name: "Start",
  components: {
    StartSubmenu
  },
  data: () => ({
    submenu: [
      {
        title: 'Завершение цикла'
      },
      {
        title: 'Расчет дивидендов цикла'
      },
      {
        title: 'Расчет дивидендов юзеров'
      },
      {
        title: 'Старт нового цикла'
      },
      {
        title: 'Утверждение'
      },
      {
        title: false,
        submit: true
      },
    ]
  })
}
</script>