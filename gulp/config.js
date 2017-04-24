module.exports = {
  root: './build',
  sass: {
    entry: './source/styles/main.scss',
    src : './source/styles/**/*.scss',
    dist: './build/assets/css'
  },
  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1']
};