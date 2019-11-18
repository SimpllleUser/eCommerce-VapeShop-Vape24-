var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('server/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('server/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'server' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src(['server/js/common.js', 'server/libs/**/*.js'])
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('server/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function() {
    gulp.watch('server/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('server/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['server/js/common.js', 'server/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
            'server/libs/jquery/dist/jquery.min.js', // Берем jQuery
            'server/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('server/js')); // Выгружаем в папку app/js
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));