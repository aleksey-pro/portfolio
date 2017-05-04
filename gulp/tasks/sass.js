'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.config.sass.entry)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass({outputStyle: 'expanded'})).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      // .pipe($.gp.cssUnit({
      // 	type     :    'px-to-rem',
      // 	rootSize  :    16
      // }))
      // .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.sass.dist))
      .pipe($.browserSync.stream());
  });
};
