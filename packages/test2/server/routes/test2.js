'use strict';

// The Package is past automatically as first parameter
module.exports = function(Test2, app, auth, database) {

    app.get('/test2/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/test2/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/test2/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/test2/example/render', function(req, res, next) {
        Test2.render('index', {
            package: 'test2'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
