import Ember from 'ember';

export default Ember.Component.extend({
  sortKeys: ['votes:desc'],
  sortedPosts: Ember.computed.sort('data.posts', 'sortKeys')
});
