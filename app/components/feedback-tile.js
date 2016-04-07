import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteFeedback(feedback) {
      if (confirm('Are you sure you want to delete this feedback?')) {
        this.sendAction('deleteFeedback', feedback);
      }
    },

  }
});
