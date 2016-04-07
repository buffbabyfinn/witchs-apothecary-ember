import Ember from 'ember';

export default Ember.Component.extend({
  addNewFeedback: false,
  actions: {
    feedbackFormShow(){
      this.set('addNewFeedback', true);
    },
    saveFeedback(){
      var params = {
        name: this.get('name'),
        eval: this.get('eval'),
        product: this.get('product')
      };
      this.set('addNewFeedback', false);
      this.sendAction('saveFeedback', params);
    }
  }
});
