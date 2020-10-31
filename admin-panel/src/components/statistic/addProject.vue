<template>
  <div @keyup.enter="submit" class="addProject">
    <div class="addProject-wrapper">
      <vInput
        :label="'Добавить проект'"
        :placeholder="'Название'"
        :error="false"
      />
      <Btn
        :label="'Добавить'"
        class="btn"
        @click="submit"
      />
    </div>
  </div>
</template>

<script>
import vInput from "@/components/shared-components/vInput"
import Btn from "@/components/shared-components/Btn"
export default {
  name: "addProjectModal",
  components: {
    vInput, Btn
  },
  methods: {
    submit() {
      console.log('submit')
    }
  },
}
</script>

<style lang="scss" scoped>
  .addProject {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-wrapper {
      max-width: 990px;
      width: 100%;
      border-radius: 18px;
      border: 1px solid #F3F4F4;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 50px 80px;
    }
  }
  .btn {
    margin-left: 20px;
  }
</style>