const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autuprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
// const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const webp = require('gulp-webp');
// const webpHtml = require('gulp-webp-html');
const browserSync = require('browser-sync').create();
const mediaQueries = require('gulp-group-css-media-queries');
// const fileInclude = require('gulp-file-include');


const clean = () => {
  return del(['dist', 'dev'])
}

const htmlMinify = () => {
  return src([
    '#src/index.html'])
    .pipe(dest('dev'))
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src('#src/styles/styles.css')
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(mediaQueries())
    .pipe(dest('dev'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(autuprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: false
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src('#src/myscript.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest('dev'))
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const resources = () => {
  return src('#src/resources/**')
    .pipe(dest('dist/resources'))
    .pipe(dest('dev/resources'))
}

const resourcesImg = () => {
  return src(['#src/images/**/*.jpg',
    '#src/images/**/*.png',
    '#src/images/*.svg',])
    .pipe(dest('dist/images'))
    .pipe(dest('dev/images'))
}

const svgSprites = () => {
  return src('#src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/images'))
    .pipe(dest('dev/images'))
}

// const images = () => {
//   return src([
//     '#src/images/**/*.jpg',
//     '#src/images/**/*.jpeg'
//   ])
//     .pipe(webp({
//       quality: 70
//     }))
//     .pipe(dest('dist/images'))
//     .pipe(dest('dev/images'))
//     .pipe(src([
//       '#src/images/**/*.jpg',
//       '#src/images/**/*.png',
//       '#src/images/*.svg',
//       '#src/images/**/*.jpeg',
//     ]))
//     .pipe(image())
//     .pipe(dest('dist/images'))
//     .pipe(dest('dev/images'))
// }

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('#src/**/*.html', htmlMinify)
watch('#src/styles/**/*.css', styles)
watch('#src/images/svg/**/*.svg', svgSprites)
watch('#src/*.js', scripts)
watch('#src/resources/**', resources)


exports.default = series(clean, htmlMinify, styles, scripts, svgSprites, /*images,*/ resources, resourcesImg, watchFiles)
