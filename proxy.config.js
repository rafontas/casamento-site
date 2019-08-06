const proxy = [
    {
        context: '/api',
        target: 'http://localhost:44347',
        pathRewrite: { '^/api' : '' }
    }
];
module.exports = proxy;