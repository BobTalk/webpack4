const autoprefixer = require('autoprefixer')
const postcssPxToRem = require('postcss-pxtorem')
module.exports = {
    plugins: [
        autoprefixer()
        [
            "component",
            {
              "libraryName": "element-ui",
              "styleLibraryName": "theme-chalk"
            }
        ],
        postcssPxToRem({
            rootValue: '100',
            propList: ['*']
        })
    ]
}