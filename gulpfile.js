/**
 * Created by b16552 on 2/15/2018.
 */
var gulp = require('gulp'),
    /*less = require('gulp-less'),*/
    webpack = require('webpack-stream'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({browsers: ['last 2 versions']}),
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
    return gulp.src('./scripts/main.js', {allowEmpty: true})
        .pipe(webpack({
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'index.html'
                }),
                new ExtractTextPlugin("styles/main.css")

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
    gulp.series('clean',gulp.parallel('webpack'), 'connect'));
