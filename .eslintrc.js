module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "parser": "vue-eslint-parser",
    "plugins": [
        "vue"
    ],
    "rules": {
        // 自定义的规则
        "linebreak-style": [0 ,"error", "windows"],
        "indent": ['error', 4], // error类型，缩进4个空格
        'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
        'eol-last': 0, // 不检测新文件末尾是否有空行
        'semi': ['error', 'always'], // 必须在语句后面加分号
        "quotes": ["error", "double"],// 字符串没有使用单引号
        "no-console": ["error",{allow:["log","warn"]}],// 允许使用console.log()
        "arrow-parens": 0,
        "no-new":0//允许使用 new 关键字
    }
};
