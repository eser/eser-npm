/**
 * eser
 *
 * @version v0.0.1
 * @link http://eser.ozvataf.com
 */
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _standardEngine = require('standard-engine');

var _standardEngine2 = _interopRequireDefault(_standardEngine);

var _eslint = require('eslint');

var _eslint2 = _interopRequireDefault(_eslint);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_standardEngine2.default.cli({
    bugs: _package2.default.bugs.url,
    cmd: 'eser',
    eslint: _eslint2.default,
    eslintConfig: {
        configFile: _path2.default.join(__dirname, '..', '.eslintrc.json')
    },
    homepage: _package2.default.homepage,
    tagline: _package2.default.description,
    version: _package2.default.version
});