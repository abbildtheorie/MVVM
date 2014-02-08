$(document).ready(function () {
  var Child = Vue.extend({
    created: function () {
      this.$dispatch('child-created', this);
    }
  });

  var parent = Vue({
    template: '<div v-component="child"></div>',
    components: {
      child: Child
    },
    created: function () {
      this.$on('child-created', function (child) {
        console.log('new child created: ');
        console.log(child);
      });
    }
  });
});
