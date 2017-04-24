'use strict';

module.exports = function() {
  var locals = ('.source/templates/data/content.json');
  
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/templates/pages/*.pug')
      .pipe($.gp.pug({
        pretty: true,
        locals: locals
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
