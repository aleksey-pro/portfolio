module.exports = function() {
  const webpack = require('webpack');
  const gulpWebpack = require('webpack-stream');
  
  $.gulp.task('webpack', function() {
    return $.gulp.src('source/js/app.js')
      // .pipe(gulpWebpack(require('../../webpack.config.js'), webpack).on('error', $.gp.notify.onError({ title: 'JavaScript' })))
      .pipe(gulpWebpack(require('../../webpack.config.js'), webpack, function(err, stats) {
        if (stats.compilation.errors.length) {
          $.gp.notify({
            title: "Webpack error",
            message: stats.compilation.errors[0].error
          });
        }
      }))
      .pipe($.gulp.dest('./build'));
  });
};


