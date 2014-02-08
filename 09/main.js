$(document).ready(function () {
  Vue.component('user-profile', {
    template: '{{name}}<br/>{{email}}'
  });

  var parent = new Vue({
    el: '#demo',
    data: {
      user: {
        name: 'Foo Bar',
        email: 'foo@bar.com'
      }
    }
  });
  var parent2 = new Vue({
    el: '#demo-2',
    data: {
      users: [
        {
          name: 'Chuck Norris',
          email: 'chuck@norris.com'
        },
        {
          name: 'Bruce Lee',
          email: 'bruce@lee.com'
        }
      ]
    }
  });
});
