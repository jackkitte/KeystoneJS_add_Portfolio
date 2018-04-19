var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'works';

  view.query('works', keystone.list('Work').model.find());

  view.render('works');
}
