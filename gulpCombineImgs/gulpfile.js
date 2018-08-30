var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
 

gulp.task('default', function () {
  var spriteData = gulp.src(['imgs/*.png','imgs/*.jpg']).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('output'));
});