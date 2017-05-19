const gulp = require('gulp')
const bs = require('browser-sync')
const chokidar = require('chokidar')
const talkie = require('talkie-generator')

gulp.task('default', (cb) => {
  bs.init({
    server: {
      baseDir: ['.'],
      directory: true
    },
    notify: false,
    host: 'localhost'
  })

  gulp.watch('./**/*.html', bs.reload)

  chokidar.watch(['./**/index.md', './**/config.js'], {
      ignored: /[\/\\]\./,
      persistent: true
    })
    .on('change', (path, stats) => {
      try {
        talkie(`./${path.split('/')[0]}`)
      }
      catch(e) {
        console.log(e.message)
      }
    })
})
