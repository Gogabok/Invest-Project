<template>
  <div class="extraInfo-modal-wrapper">
    <p class="text">Приглашайте пользователей, зарабатывайте и снижайте комиссию!</p>
    <p class="text bold">1 привлеченный пользователь =</p>
    <p class="text">
      -1% вашей комиссии сервису (уменьшение до 10% вместо 20%)
      <br />+1% от нашей комиссии реферала (увеличение 20% вместо 10%)
    </p>
    <p class="text">
      Комиссия распространяется только на доверительное управление,
      реферальные вознаграждения зачисляются ежедневно и добавляются
      к вашему инвестиционному счету.
    </p>
    <p class="text">
      С данными условиями исчезает необходимость регистрироваться
      по своей же реферальной ссылки для получения доп. дохода.
    </p>
    <p class="text bold">Цель — пригласить 10 активных пользователей для макс выгоды.</p>
    <div class="refferal-href" @click="copyToClickboard">
      <transition name="scaleY" mode="out-in">
        <div v-show="isCopied" class="copied">
          Ссылка скопирована в буфер обмена!
        </div>
      </transition>
      <p ref="textToCopy" class="refferal-text">{{ refferalLink }}</p>
      <img ondragstart="return false;" src="../../../assets/common/copyIcon.svg" alt />
    </div>
    <p class="text">Работая по партнерской программе вы соглашаетесь с <a href="https://www.google.ru/" target="_blank">условиями <img src="../../../assets/modals/icon-share.svg" alt=""></a></p>
  </div>
</template>


<script>
export default {
  name: "refferals-modal",
  data: () => ({
    refferalLink: 'http://site.ru/ref70101',
    isCopied: false
  }),
  watch: {
    isCopied: function () {
      if(this.isCopied) {
        setTimeout(() => {
          this.isCopied = false
        }, 2000);
      }
    }
  },
  methods: {
    copyToClickboard () {
      navigator.clipboard.writeText(this.refferalLink)
      .then(resolve => {
        this.isCopied = true
      })
      .catch(error => {
        alert(error)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.extraInfo-modal-wrapper {
  padding: 20px 30px;
}
.text {
  color: #302d2b;
  font-size: 1.1em;
  margin: 15px 0px;
  &.bold {
    font-weight: 600;
  }
  & a {
    text-decoration: none;
    display: inline-block;
  }
  & img {
    width: 15px;
    margin-left: 5px;
  }
}
.refferal-href {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 3px solid #E1E1E1;
  padding: 8px 20px;
  cursor: pointer;
  user-select: none;
  position: relative;
  & .refferal-text {
    color: #302d2b;
    font-size: 1.1em;
    max-width: 200px;
    overflow-x: hidden;
  }
  & img {
    width: 20px;
  }
}
.copied {
  position: absolute;
  top: -45px;
  left: 50%;
  margin-left: -25%;
  background: #302d2b;
  color: #fff;
  padding: 8px 30px;
  border-radius: 12px;
  font-weight: 300;
  font-size: 1em;
  &:after {
    content: ''; 
    position: absolute;
    left: 50%; 
    bottom: -19px;
    border: 10px solid transparent;
    border-top: 10px solid #302d2b;
  }
}
@media screen and (max-width: 550px) {
  .copied { 
    left: 0px;
    margin-left: 0px;
    width: 100%;
    top: -60px;
  }
}
</style>