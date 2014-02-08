$(document).ready(function () {
  new Vue({
    el: '#demo',
    data: {
      n: 0
    },
    methods: {
      onClick: function (e) {
        console.log(e.target.tagName);
        console.log(e.targetVM == this);
      }
    }
  });
});
