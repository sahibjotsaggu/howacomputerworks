var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Various paths to be sourced into the gulp tasks below

var paths = {
	scripts: ['public/assets/javascript/**/*.js', 'public/app/*.js', 'public/app/controllers/**/*.js', 'public/app/services/**/*.js', '!public/assets/javascript/angular-css.min.js', '!public/assets/javascript/angular-ui-router.min.js'],
	styles: ['public/assets/css/**/*.scss'],
	views: ['public/app/views/pages/**/*.html'],
	fonts: ['public/assets/fonts/Helvetica Neue/*.otf']
};

var pathConcat = paths.scripts.concat(paths.styles, paths.views, paths.fonts);

// task for converting sass to css and minifying the css

gulp.task('styles', function() {
	return gulp.src(paths.styles)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('public/assets/css'))
	.pipe(notify({message: 'Stylesheets have been converted to .sass and minified.'}));
});

// task for minifying and concatenating JS files into one file

gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('public/dist/app/javascript'))
	.pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/app/javascript'));
})

// task to JShint all the user-written javascript

gulp.task('jshint-scripts', function() {
	return gulp.src(paths.scripts)
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(gulp.dest('public/dist/app/javascript'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/dist/app/javascript'))
	.pipe(notify({message: 'JS files have been linted and uglified.'}));
});

// task to compress all images

gulp.task('images', function() {
	return gulp.src('public/assets/images/**/*')
	.pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
	.pipe(gulp.dest('public/dist/assets/images'))
	.pipe(notify({message: 'Images have been compressed.'}));
});

// task to minify all the view pages of the application

gulp.task('minifyViews', function() {
	return gulp.src(paths.views)
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('public/dist/app/views/pages'))
	.pipe(notify({message: 'Views have been minified.'}));
});

// task to move files that do not need processing to dist/ directory

gulp.task('moveFiles', function() {
	gulp.src('public/app/views/index.html').pipe(gulp.dest('public/dist/app/views')).pipe(notify({message: 'index.html moved to dist/ folder'}));
	gulp.src(['public/assets/javascript/angular-ui-router.min.js', 'public/assets/javascript/angular-css.min.js']).pipe(gulp.dest('public/dist/app/javascript')).pipe(notify({message: 'JS files moved to dist/ folder'}));
	gulp.src(paths.fonts).pipe(gulp.dest('public/dist/assets/fonts')).pipe(notify({message: 'Font files moved to dist/ folder'}));
});

// watch task to reload the files when changes are present

gulp.task('watch', function() {
	gulp.watch('public/assets/css/**/*.scss', ['styles']);
	livereload.listen();
	gulp.watch(paths.styles).on('change', livereload.changed);
});

gulp.task('default', function() {
	gulp.start('styles', 'watch');
});