'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/templates/pages/*.pug')
      .pipe($.gp.pug({
        locals : JSON.parse($.fs.readFileSync('source/templates/data/content.json', 'utf8')),
        pretty: true
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


// gulp.task('pug', () => {
//   // let locals = require('./content.json');
//
//   gulp.src('src/views/pages/**/*.pug')
//     .pipe(plumber())
//     .pipe(pug({
//       locals : JSON.parse(fs.readFileSync('./content.json', 'utf8')),
//       // locals : locals,
//       pretty: true,
//     }))
//     .pipe(gulp.dest('dist'))
//     .pipe(reload({ stream: true }));
// });