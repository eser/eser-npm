module.exports = {
    extends: [
        'eslint-config-airbnb'
    ].map(require.resolve),
    rules: {
        indent: [ 'error', 4 ],
        'array-bracket-spacing': [ 'error', 'always' ]
    }
};
