const webpack=require('webpack');

module.exports=function override(config,env){
    config.resolve.fallback={
        crypto:require.resolve('crypto-browserify'),
        buffer:require.resolve("buffer/"),
        querystring:require.resolve("querystring-es3"),
        timers:require.resolve("timers-browserify"),
        http:require.resolve("stream-http"),
        stream:require.resolve("stream-browserify"),
        zlib:require.resolve("browserify-zlib"),
        https:require.resolve("https-browserify"),
        path:require.resolve("path-browserify"),
        assert:require.resolve("assert/"),
        os:require.resolve("os-browserify/browser"),
        "fs": require.resolve("browserify-fs"),
        "net": require.resolve("net-browserify"),
        "tls": require.resolve("tls-browserify"),
        async_hooks: false,
        "url": require.resolve("url")



    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    );

    return config;
}