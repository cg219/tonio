const Vue = require('vue');
const ApolloClient = require('apollo-client').default;
const CreateNetworkInterface = require('apollo-client').createNetworkInterface;
const VueApollo = require('vue-apollo').default;
const App = require('./app.vue');
const client = new ApolloClient({
  networkInterface: CreateNetworkInterface({
    uri: 'http://localhost:4000/api',
    transportBatching: true
  })
})

Vue.use(VueApollo, {
  apolloClient: client
})


new Vue({
  el: "#tonio",
  render: (render) => render(App)
})
