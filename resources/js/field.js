Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-cms', require('./components/IndexField'))
  Vue.component('detail-nova-cms', require('./components/DetailField'))
  Vue.component('form-nova-cms', require('./components/FormField'))
})
