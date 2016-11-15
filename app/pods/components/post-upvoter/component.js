import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    upvote() {
      const postId = this.get('postId');
      
      // call the function passed as an attribute
      this.get('onUpvote')(postId);
    }
  }
});
