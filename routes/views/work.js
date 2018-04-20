var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'work';

  locals.filters = {
    work: req.params.work,
  };

  locals.data = {
    works: [],
  };

  view.on('init', function(next) {
    var q = keystone.list('Work').model.findOne({
      slug: locals.filters.work,
    });

    q.exec(function(err, result) {
      locals.data.work = result;
      next(err);
    });
  });

  view.render('work');

}
