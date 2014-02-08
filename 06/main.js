$(document).ready(function () {
  new Vue({
    el: '#list',
    data: {
      items: [
        { text: 'one', done: true },
        { text: 'two', done: false }
      ]
    },
    methods: {
      toggle: function (item) {
        item.done = !item.done;
      }
    }
  });
});
