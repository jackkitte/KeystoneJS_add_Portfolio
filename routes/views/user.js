var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'user';

  locals.filters = {
    user: locals.user,
  };

  view.on('init', function(next) {
    var q = keystone.list('User').model.findOne({
      email: locals.filters.user.email,
    });

    q.exec(function(err, result) {
      locals.data = result;
      next(err);
    });
  });

  view.render('user');
}