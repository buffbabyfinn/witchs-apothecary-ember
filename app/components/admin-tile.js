
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(product) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.sendAction('destroyProduct', product);
    }
  },
  update(product, params) {
    this.sendAction('update', product, params);
  }
}
});
