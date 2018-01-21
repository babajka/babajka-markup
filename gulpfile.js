const gulp = require('gulp');
const watch = require('gulp-watch');
const connect = require('gulp-connect');
const gutil = require('gulp-util');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const stylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');

const ejs = require('gulp-ejs');
const htmlhint = require('gulp-htmlhint');

const fs = require('fs');
const templateVariables = JSON.parse(
  fs.readFileSync('./src/templateVariables.json', 'utf8')
);

const port = process.env.PORT || 3001;

const config = {
  libsPath: 'node_modules',
  buildPath: 'dist',
  stylesPath: 'styles',
  fontsPath: 'fonts',
  imagesPath: 'images',
  srcPath: 'src',
  stubsStaticPath: 'stubs/static-prod'
};

templateVariables.bundlePath = `../${config.stylesPath}/bundle.min.css`;
templateVariables.assetsPath = `../${config.stylesPath}/assets.min.css`;
templateVariables.imagesPath = `../${config.imagesPath}`;

gulp.task('sass:bundle', () =>
  gulp
    .src([`${config.srcPath}/**/*.scss`, `!${config.srcPath}/index.scss`], {
      base: config.srcPath
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(replace('url("/images/', 'url("../images/'))
    .pipe(concatCss('bundle.css', { rebaseUrls: false }))
    .pipe(gulp.dest(`${config.buildPath}/${config.stylesPath}`))
    .pipe(concatCss('bundle.min.css', { rebaseUrls: false }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${config.buildPath}/${config.stylesPath}`))
);

gulp.task('sass:assets', () =>
  gulp
    .src(`${config.srcPath}/index.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('assets.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${config.buildPath}/${config.stylesPath}`))
    .pipe(gulp.dest(`${config.stubsStaticPath}/${config.stylesPath}`))
);

gulp.task('sass:lint', () =>
  gulp.src(`${config.srcPath}/**/*.scss`).pipe(
    stylelint({
      reporters: [{ formatter: 'string', console: true }]
    })
  )
);

gulp.task('sass:watch', () =>
  watch(`${config.srcPath}/**/*.scss`, () => {
    gulp.start('sass:bundle');
    gulp.start('sass:bundle');
    gulp.start('sass:assets');
    gulp.start('sass:lint');
  })
);

gulp.task('fa:fonts', () =>
  gulp
    .src(`${config.libsPath}/font-awesome/fonts/fontawesome-webfont.*`)
    .pipe(gulp.dest(`${config.buildPath}/${config.fontsPath}`))
);

gulp.task('ejs:compile', () =>
  gulp
    .src(`${config.srcPath}/**/*.ejs`)
    .pipe(ejs(templateVariables, {}, { ext: '.html' }).on('error', gutil.log))
    .pipe(gulp.dest(config.buildPath))
);

gulp.task('html:lint', ['ejs:compile'], () =>
  gulp
    .src(`${config.buildPath}/**/*.html`)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
);

gulp.task('images:copy', () =>
  gulp
    .src(`${config.srcPath}/images/**/*`)
    .pipe(gulp.dest(`${config.buildPath}/${config.imagesPath}`))
);

gulp.task('ejs:watch', () =>
  watch(`${config.srcPath}/**/*.ejs`, () => gulp.start('html:lint'))
);

gulp.task('serve', () =>
  connect.server({
    port,
    livereload: true,
    root: config.buildPath
  })
);

gulp.task('livereload', () =>
  watch([
    `${config.buildPath}/**/*.html`,
    `${config.buildPath}/${config.stylesPath}/**/*.css`
  ]).pipe(connect.reload())
);

// export tasks
gulp.task('build', [
  'ejs:compile',
  'sass:bundle',
  'sass:assets',
  'fa:fonts',
  'images:copy'
]);
gulp.task('watch', [
  'build',
  'serve',
  'livereload',
  'lint',
  'sass:watch',
  'ejs:watch'
]);
gulp.task('lint', ['sass:lint', 'html:lint']);
