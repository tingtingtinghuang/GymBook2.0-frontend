'use strict';
// gulp在webpack打包好的基础上再执行一些功能
// webpack需要实现的功能有：压缩JS，编译scss，模块化管理：模块按需加载，模块预处理，模块打包等功能。
    //gulp
var gulp        = require('gulp'),

//     //错误处理插件plumber
    plumber     = require('gulp-plumber'),
//     //clean 用来删除文件
    clean       = require('gulp-clean'),
//     //压缩文件
    zip         = require('gulp-zip'),
//     //控制task中的串行和并行
    runSequence = require('gulp-run-sequence'),

    shell = require('gulp-shell');

gulp.task('webpack',shell.task([
    'npm start'
]));

gulp.task('webpackDev',shell.task([
    'webpack --mode production'
]));


//clean任务：给下边的redist用,清空dist文件夹
gulp.task('clean', function () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

//redist任务：先执行clean，然后再重建dist
gulp.task('default',function(){
    //先运行clean，然后并行运行webpack等
    runSequence('clean',['webpack']);
});


//publish任务，要手动执行，将dist中的文件分发到项目中的templates和static文件夹中。
//这里要注意一点：因为gulp限制了clean只能在web文件夹下执行，
// 所以publish的时候无法自动删除工程根目录下的static和templates文件夹中的内容，
// 只能把他们复制出去。所以，如果有改名或者删除操作的时候，
// 要手动删除工程根目录下的static和templates文件夹下的文件，再publish，以避免冗余文件的出现。
// gulp.task('publish', function(){
//     gulp.src('dist/*.html').pipe(plumber()).pipe(gulp.dest('../templates'));
//     gulp.src('dist/static/js/**/*.js').pipe(plumber()).pipe(gulp.dest('../static/js'));
//     gulp.src('dist/static/css/**/*').pipe(plumber()).pipe(gulp.dest('../static/css'));
//     gulp.src('dist/static/img/**/*').pipe(plumber()).pipe(gulp.dest('../static/img'));
//     gulp.src('dist/static/fonts/**/*').pipe(plumber()).pipe(gulp.dest('../static/fonts'));
// });