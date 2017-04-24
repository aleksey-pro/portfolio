'use strict';

module.exports = function() {
  $.gulp.task('sprites', function () {
    var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      cssFormat: 'css'
    }));
    var imgStream = spriteData.img
      .pipe($.gulp.dest($.config.root + '/assets/img'));
    var cssStream = spriteData.css
      .pipe($.gulp.dest('./source/style/common'));
    return $.merge(imgStream, cssStream);
  });
};