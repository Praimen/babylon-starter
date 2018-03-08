/**
 * Created by b16552 on 2/15/2018.
 */
var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    connect = require('gulp-connect');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});


gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});



gulp.task('webpack', ()=> {
    // place code for your default task here
    return gulp.src('./app/scripts/main.js', {allowEmpty: true})
        .pipe(webpack({
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'app/index.html'
                }),
                new ExtractTextPlugin("dist/styles/main.css")

            ],
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: 'css-loader'
                        })
                    },
                    {
                        test: /\.(png|jpg|gif)$/,
                        exclude: /(node_modules)/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 8192
                                }
                            }
                        ]
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        use: {
                            loader: 'babel-loader'


                        }
                    }
                ]
            },
            output: {
                filename: 'scripts/main.js'
            }
        }))
        .pipe(gulp.dest('dist/'))

});

gulp.task('default',
  gulp.series('clean',gulp.parallel('webpack'), 'connect')
);

gulp.task('build',
  gulp.series('clean','webpack')
);
