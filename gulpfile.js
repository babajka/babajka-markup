const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const stylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');

const config = {
	libsPath: 'node_modules',
	stylesPath: 'dist',
	fontsPath : 'fonts',
	srcPath: 'src'
};

gulp.task('sass:bundle', () => gulp.src(`${config.srcPath}/**/*.scss`)
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(concatCss('bundle.css'))
	.pipe(gulp.dest(config.stylesPath))
	.pipe(concatCss('bundle.min.css')) 
	.pipe(cleanCSS())
	.pipe(gulp.dest(config.stylesPath))
);

gulp.task('sass:assets', () => gulp.src(`${config.srcPath}/index.sass`)
	.pipe(sass().on('error', sass.logError))
	.pipe(concatCss('assets.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest(config.stylesPath))
);

gulp.task('fa:fonts', () => gulp.src(`${config.libsPath}/font-awesome/fonts/fontawesome-webfont.*`) 
	.pipe(gulp.dest(config.fontsPath))
);

gulp.task('sass:lint', () => gulp.src(`${config.srcPath}/**/*.scss`)
	.pipe(stylelint({
		reporters: [{ formatter: 'string', console: true }]
	}))
);

gulp.task('sass:watch', () => watch(`${config.srcPath}/**/*.scss`, () => {
	gulp.start('sass:bundle');
	gulp.start('sass:lint');
}));

// export tasks
gulp.task('build', ['sass:bundle', 'sass:assets', 'fa:fonts']);
gulp.task('watch', ['build', 'sass:watch']);
