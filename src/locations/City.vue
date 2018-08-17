<template>
  <div class="city">
    <ul>
      <li v-for="action in actions" :key="action.id">
        <button :data-key="action.id" 
          :disabled="action.disabled" 
          @click="runAction">{{ action.title }}</button>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: 'City',
  data: function() {
    return {
      actions: [
        {
          'id': 1,
          'title': 'Say hello this girl',
          'method': 'sayHello',
          'disabled': false
        },
        {
          'id': 2,
          'title': 'Say fuck you',
          'method': 'sayFuckYou',
          'disabled': false
        },
        {
          'id': 3,
          'title': 'Run',
          'method': 'run',
          'disabled': true
        }
      ]
    };
  },
  methods: {
    runAction(event) {
      let action = this.findAction(event.target.dataset.key);
      if (this[action.method]) {
        this[action.method]();
      }
    },
    /**
     * Найти действие в списке действий
     * @param {Number} id
     */
    findAction(id) {
      return this.actions.find(action => action.id == id);
    },
    sayFuckYou() {
      alert('fuck you');
      this.actions[2].disabled = false;
    }
  }
};
</script>
  
<style lang="scss" scoped>
  
</style>