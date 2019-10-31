'use strict';
module.exports = function(app) {
  let getApi = require('./controllers/ProductsController')
  let getLatestDate = require('./controllers/LatestDate');
  let getFormatDate = require('./controllers/FormatDate');
  let getSortDate = require('./controllers/SortDate')

  // todoList Routes
  app.route('/products')
    .get(getApi.get);
  app.route('/products/latests')
    .get(getLatestDate.get);
  app.route('/products/formats')
    .get(getFormatDate.get);
  app.route('/products/sorts')
    .get(getSortDate.get);
}