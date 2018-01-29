// 参考
// https://github.com/greypants/gulp-starter/tree/master/gulp/tasks

var theme_name = 'twentyseventeen';
var cmnDir = 'htdocs/wp-content/themes/' + theme_name + '/';

module.exports = {
  virtualhost: {
    vhost:           "127.0.0.1",
    vhostLive:       "127.0.0.1:10080",
    browserSyncPort: "1072"
  },

  // sass
  sass: {
    src: cmnDir + 'sass/',
    dst: cmnDir
  },

  notify: {
    msg: {
      message: 'Gulp Start',
      sound:   'Submarine'
    },
    errormsg: {
      message: 'Error: <%= error.message %>',
      title:   'Error running something',
      sound:   'Glass'
    }
  },

  // prefixBrowsers
  prefixBrowsers: [
    'last 2 versions',
    'ie >= 10',
    'ie_mob >= 10',
    'android >= 4.4',
    'iOS >= 9'
  ],

  // watch
  watch: {
    sass_src: cmnDir + "sass/**/*.scss",
    target: [
      "htdocs/**/*.html",
      "htdocs/**/*.php",
      cmnDir + "assets/js/**/*.js",
      cmnDir + "assets/images/**/*",
      cmnDir + "assets/css/**/*.css"
    ]
  }

}
