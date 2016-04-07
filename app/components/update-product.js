import Ember from 'ember';

export default Ember.Component.extend({
  updateProduct: false,
  actions: {
    updateProduct() {
      this.set('updateProduct', true);
    },
    update(product) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image'),
        cost: parseInt(this.get('cost')),
      };
      this.set('updateProduct', false);
      this.sendAction('update', product, params);
    }
  }
});
