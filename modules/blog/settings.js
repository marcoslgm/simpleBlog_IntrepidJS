
/**
 * @file settings.js
 * @namespace Blog settings
 * @desc Platform Blog settings
 */


// Module name
exports.name = 'Blog';

// Module description
exports.description = 'Blog module';

// Routes
exports.route_prefix = 'blog';

// Root path
var modulePath = process.cwd() + '/modules/blog';
exports.modulePath = modulePath;

// Paths
// Middlewares path
exports.middlewaresPath = modulePath + '/middlewares/';
// Models path
exports.modelsPath = modulePath + '/data/models/';
// Schemas path
exports.schemasPath = modulePath + '/data/schemas/';
// Views path
exports.viewsPath = modulePath + '/views/';
// Public path
exports.publicPath = modulePath + '/public/';
// Routes path
exports.routesPath = modulePath + '/routes/';

// Site settings
exports.highlights = true;

// Module actions
exports.actions = [];