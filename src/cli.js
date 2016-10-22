import path from 'path';
import standardEngine from 'standard-engine';
import eslint from 'eslint';
import pkg from '../package.json';

standardEngine.cli({
    bugs: pkg.bugs.url,
    cmd: 'eser',
    eslint: eslint,
    eslintConfig: {
        configFile: path.join(__dirname, '..', '.eslintrc.json')
    },
    homepage: pkg.homepage,
    tagline: pkg.description,
    version: pkg.version
});
