module.exports = {
    'extends': [
        'eslint-config-eser',
        './rules/react',
        './rules/react-a11y',
        './rules/react-hooks',
    ].map(require.resolve),

    'rules': {
    },
};
