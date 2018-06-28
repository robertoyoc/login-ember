import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('index')
  // this.route('una');
  // this.route('dos');
  // this.route('tres');
  this.route('logged', {path: '/'}, function() {
    this.route('una');
    this.route('dos');
    this.route('tres');
  });
});

export default Router;
