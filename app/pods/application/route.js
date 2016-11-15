import ApolloRoute from 'ember-apollo/routes/apollo-route';
import gql from 'npm:graphql-tag';

// extend from ApolloRoute instead of Ember.Route
export default ApolloRoute.extend({
  // apollo-client service is injected automatically as this.apolloClient

  model() {
    // returns a promise, which forces ember to show the loading substate until
    // the promise resolves
    this.query(query);
  },

  actions: {
    upvotePost(postId) {
      // mutations use the native ApolloClient.mutate API
      this.get('apolloClient').mutate({
        mutation: upvotePostMutation,
        variables: { postId }
      });
    }
  }
});

// define queries and mutations as template litterals with the gql tag.
// these can go below your route, as they will be hoisted.
const query = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

const upvotePostMutation = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;
