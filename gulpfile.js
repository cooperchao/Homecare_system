var gulp			= require('gulp'), 
		bower			= require('gulp-bower'),
		rename		= require('gulp-rename'),
		clean			= require('gulp-clean');

var src = {};
var hidden_files = '**/_*.*';
var ignored_files = '!'+hidden_files;

// Sources config
var config = {
	vendor	:	'./bower_components' ,
	project	: './templates/project/source' 
}

var vendor = {
	source : {
		bootstrapsass	: config.vendor + '/bootstrap-sass/assets/stylesheets/**/*',
		jquery				: config.vendor + '/jquery/dist/**/*',
		// font:
		// [
		// 	// config.vendor + '/open-sans-fontface/open-sans.css',
		// 	// config.vendor + '/open-sans-fontface/fonts/Light/*',
		// 	// config.vendor + '/open-sans-fontface/fonts/Regular/*',
		// 	// config.vendor + '/open-sans-fontface/fonts/Italic/*',
		// 	// config.vendor + '/open-sans-fontface/fonts/Semibold/*',
		// 	config.vendor + '/open-sans-fontface/**/*'// **所有目錄 // **/*所有目錄包含檔案
		// ],
		iconfont 			: config.vendor + '/fontawesome/fonts/**.*',
		iconfontsass	: config.vendor + '/fontawesome/scss/**.*'
	},
	dist : {
		iconfont 			: config.project + '/fonts',
		iconfontsass	: config.project + '/sass/vendor/fontawesome',
		bootstrapsass	: config.project + '/sass/vendor/bootstrap-sass',
		jquery				: config.project + '/vendor/jquery'
	}
}

//---------------
// TASKS
//---------------

gulp.task('vendor', function() {
	gulp.src(vendor.source.bootstrapsass)
		.pipe(gulp.dest(vendor.dist.bootstrapsass))
		;
	gulp.src(vendor.source.jquery)
		.pipe(gulp.dest(vendor.dist.jquery))
		;
	gulp.src(vendor.source.iconfont) 
		.pipe(gulp.dest(vendor.dist.iconfont))
		; 
	gulp.src(vendor.source.iconfontsass) 
		.pipe(gulp.dest(vendor.dist.iconfontsass))
		; 
	gulp.src('./templates/project/source/stylesheets/vendor/fontawesome/font-awesome.css' ) 
		.pipe(gulp.dest('./templates/project/source/stylesheets/'))
		; 
});

gulp.task('clean', function() {  
  return gulp.src([
  	vendor.dist.iconfontsass + '/font-awesome.scss',
  	config.project + '/stylesheets/vendor/'
  	], {read: false})
    .pipe(clean())
    ;
});

// gulp.task('rename', function() {
// 	gulp.src(vendor.dist.iconfontsass + '/font-awesome.scss') 
// 		.pipe(rename('_font-awesome.scss'))
// 		.pipe(gulp.dest(vendor.dist.iconfontsass))
// 		; 
// });
// gulp.task('font', function() {
// 		gulp.src(vendor.source.font)
// 		.pipe(gulp.dest(buide.font))
// 		;
// });

var tasks = [
	'vendor'
	// 'rename'
	//'iconfont',
	// 'iconfontsass',
	// 'fontawesomerename',
	// 'font',
	// 'bootstrapsass',
	// 'jquery'
];

gulp.task('default', tasks);