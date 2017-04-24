'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('webpack'));
    $.gulp.watch('./source/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/templates/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.{png, jpg}', $.gulp.series('copy:image'));
    $.gulp.watch('./source/images/**/*.svg', $.gulp.series('sprite:svg'));
  });
};
