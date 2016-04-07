import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('admin');
  this.route('product', {path: '/product/:product_id'});
  this.route('about');
  this.route('contact');
});

export default Router;
