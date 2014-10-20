/**
 * @file index.js
 * @namespace Blog Routes
 * @desc Blog routes
 */

var _ = require('underscore'),
    rek = require('rekuire'),
    m_settings = rek('modules/blog/settings');


var routes = {};


/**
 * @desc  Main Blog route
 * @return object - Blog main page render
 */
routes['/' + m_settings.route_prefix] =  {
    methods: ['get'],
    middleware: [],
    fn: function(req, res, next) {
        res.render(m_settings.viewsPath + 'index');
    }
};

/**
 * @desc  Blog partial route
 * @return object - Blog partial render
 */
routes['/' + m_settings.route_prefix + '/partials/:name'] =  {
    methods: ['get'],
    middleware: [],
    fn: function(req, res, next) {
        var name = req.params.name;
        res.render(m_settings.viewsPath + '/partials/' + name);
    }
};

module.exports = routes;
