$(document).ready(function () {
  var demo = new Vue({
    el: '#demo',
    data: {
      parentMsg: 'Hello',
      items: [
        { childMsg: 'Foo' },
        { childMsg: 'Bar' }
      ]
    }
  });

  demo.items.push({ childMsg: 'Baz' });
});
