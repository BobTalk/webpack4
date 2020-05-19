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
    }
};
