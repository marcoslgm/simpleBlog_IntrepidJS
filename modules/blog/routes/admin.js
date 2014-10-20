/**
 * @file admin.js
 * @namespace Blog Admin Routes
 * @desc Blog admin routes
 */

var rek = require('rekuire'),
    m_settings = rek('modules/blog/settings');

var routes = {};


/**
 * @desc  Parent admin Blog route
 * @return object - Blog admin parent page render
 */
routes['/' + m_settings.route_prefix + '/admin/parent'] =  {
    methods: ['get'],
    middleware: [],
    fn: function(req, res, next) {
        res.render(m_settings.viewsPath + 'admin/parent');
    }
};


module.exports = routes;

