$(document).ready(function () {
  Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('');
  });

  Vue.filter('wrap', function (value, args) {
    return args[0] + ' ' + value + ' ' + args[1];
  });

  var demo = new Vue({
    el: '#demo',
    data: {
      message: 'Hello World!'
    }
  });

  var demo2 = new Vue({
    el: '#demo2',
    data: {
      name: 'Keiji Matsuzaki'
    }
  });

});
