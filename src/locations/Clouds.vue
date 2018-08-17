<template>
  <div class="clouds">
    
    <transition name="fade-continueBlock">
      <div v-show="continueBlock" class="continueText">
        Для продолжения нажмите любую клавишу
      </div>
    </transition>

    <transition name="fade">
      <div v-show="continueText" class="inputBlock">
        <span>Введите ваше имя:</span>
        <input type="text" v-model="name">
      </div>
    </transition>

  </div>
</template>
  
<script>
export default {
  name: 'Clouds',
  data: function() {
    return {
      continue: true,
      name: '',
    };
  },
  methods: {
    hideContinue() {
      this.continueText = false;
      this.removeKeyUpEvent();
    },
    addKeyUpEvent() {
      window.addEventListener('keyup', this.hideContinue);
    },
    removeKeyUpEvent() {
      window.removeEventListener('keyup', this.hideContinue);
    },
  },
  created() {
    this.addKeyUpEvent();
  },
};
</script>
  
<style lang="scss" scoped>
  @import '../assets/scss/animations';
  .clouds {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .continueText {
    font-size: 28px;
    // animation-name: fade;
    // animation-duration: 2s;
    // animation-iteration-count: infinite;
    opacity: 1;
  }

  .fadeContinueText-leave {
  }

  .fadeContinueText-leave-active {
    animation-play-state: paused;
    animation-name: unset;
    transition: opacity 0.3;
  }

  .v-leave-to {
    opacity: 0;
  }

</style>