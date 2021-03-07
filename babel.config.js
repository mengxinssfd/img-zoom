// 使用babel.config.js代替.babelrc才能够编译node_modules文件夹里面的
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            /*{
                "useBuiltIns": "usage",
                "corejs": "3.3.4",
                // "targets": {"ie": 9},
            },*/
        ],
    ],
    "plugins": [
        ["@babel/transform-runtime"],
    ],
};