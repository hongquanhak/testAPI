'use strict';
module.exports = function(app) {
  let getApi = require('./controllers/ProductsController')
  let getLatestDate = require('./controllers/LatestDate');
  let getAnyDate = require('./controllers/AnyDate');
  let getSortDate = require('./controllers/SortDate')

  // todoList Routes
  app.route('/products')
    .get(getApi.get);
  app.route('/products/latest')
    .get(getLatestDate.get);
  app.route('/products/analytics')
    .get(getSortDate.get);
  app.route('/products/:date')
    .get(getAnyDate.get);
}