const autoprefixer = require('autoprefixer')
const postcssPxToRem = require('postcss-pxtorem')
module.exports = {
    plugins: [
        autoprefixer(),
        postcssPxToRem({
            rootValue: '100',
            propList: ['*']
        })
    ]
}