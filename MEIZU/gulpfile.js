var gulp = require("gulp");

gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/test"))
})
gulp.task("copy-js",function(){
	gulp.src("*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/test"))
})
gulp.task("copy-json",function(){
	gulp.src("*.json")
	.pipe(gulp.dest("D:/phpStudy/WWW/test"))
})



gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/css/"))
})
gulp.task("images",function(){
	gulp.src("images/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/images/"))
})

gulp.task("images",function(){
	gulp.src("images/cont")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/images/"))
})
gulp.task("images",function(){
	gulp.src("images/liebiaoimg")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/images/"))
})
gulp.task("images",function(){
	gulp.src("images/xiangqingimages")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/images/"))
})

gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/html/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/js/"))
})

gulp.task("php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/test/"))
})
/*
gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:/phpStudy/WWW/test/css/"))
})
*/
gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("images/*.{jpg,png,gif}",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("*.php",["php"]);
	//gulp.watch("scss/*.scss",["sass"]);
})
