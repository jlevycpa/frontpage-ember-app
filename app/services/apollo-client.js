import ApolloClientService from 'ember-apollo/services/apollo-client';
// ember-browserify does not allow named imports, so it requires a second
// line to destructure the acImports object.
import acImports from 'npm:apollo-client';
const {default: ApolloClient, createNetworkInterface} = acImports;

// extend ApolloClientService instead of Ember.Service
export default ApolloClientService.extend({

  // override initApolloClient and return an ApolloClient instance
  initApolloClient() {
    const networkInterface = createNetworkInterface({
      uri: 'http://localhost:8080/graphql'
    });

    return new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });
  }
});
