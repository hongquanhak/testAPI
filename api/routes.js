'use strict';
module.exports = function(app) {
  let getApi = require('./controllers/ProductsController')
  let getLatestDate = require('./controllers/LatestDate');
  let getAnyDate = require('./controllers/AnyDate');
  let getSortDate = require('./controllers/SortDate')

  // todoList Routes
  app.route('/products')
    .get(getApi.get);
  app.route('/products/latests')
    .get(getLatestDate.get);
  app.route('/products/formats')
    .get(getAnyDate.get);
  app.route('/products/sort')
    .get(getSortDate.get);
}