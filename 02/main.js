$(document).ready(function () {
  Vue.directive('demo', {
    bind: function () {
      this.el.style.color = '#fff'
      this.el.style.backgroundColor = this.arg
    },
    update: function (value) {
      this.el.innerHTML = 
        'argument - ' + this.arg + '<br/>' +
        'key - ' + this.key + '<br/>' +
        'value - ' + value
    }
  });

  var demo = new Vue({
    el: '#demo',
    data: {
      msg: 'hello!'
    }
  });
});
