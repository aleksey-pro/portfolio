'use strict';

//TODO favicons

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  fs: require('fs'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsLibs: require('./gulp/paths/js.libs.js'),
    cssLibs: require('./gulp/paths/css.libs.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  merge: require('merge-stream'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'copy:image',
    'copy:fonts',
    'css:libs',
    'sprite:svg',
    'webpack' //TODO watch
    //'sprites'
    // 'js:libs',
    //'js:process'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));