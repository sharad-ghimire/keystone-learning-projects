const keystone = require('keystone');
keystone.init({
  'cookie secret': 'Tero Bau Cookie Kha',
  name: 'quick-start',
  'user model': 'User',
  'auto update': true,
  auth: true,
  view: 'templates/views',
  'view engine': '.hbs'
});

keystone.import('models');

keystone.start();
