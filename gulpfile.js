'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	cssnano = require('gulp-cssnano'),
	minifyCSS = require('gulp-minify-css'),
	del = require('del'),
	header  = require('gulp-header'),
	pack = require('./package.json');

var banner = [
	'/*!\n' +
	' * <%= pack.name %>\n' +
	' * <%= pack.url %>\n' +
	' * @author <%= pack.author %>\n' +
	' * @version <%= pack.version %>\n' +
	' * Copyright ' + new Date().getFullYear() + '. <%= pack.license %> licensed.\n' +
	// ' * <%= pack.title %>\n' +
	' */',
	'\n'
].join('');

gulp.task('styles', function () {
	return gulp.src('sass/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', notify.onError(function (err) {
			return {
				title: 'styles',
				message: err.message
			};
		}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app'))
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(header(banner, { pack : pack }))
		.pipe(gulp.dest('app'));
});

gulp.task('clean', function () {
	return del('app');
});

gulp.task('watch', function () {
	gulp.watch('sass/**/*.*', gulp.series('clean', 'styles'));
});

gulp.task('default', gulp.series('clean', 'styles', 'watch'));

