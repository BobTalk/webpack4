const fs = require('fs')
const path = require('path')
// env对象

function parse(src) {
    // 解析KEY=VAL的文件
    const res = {}
    src.split('\n').forEach(line => {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    // eslint-disable-next-line no-useless-escape
        const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
        if (keyValueArr != null) {
            const key = keyValueArr[1]
            let value = keyValueArr[2] || ''
            const len = value ? value.length : 0
            if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
                value = value.replace(/\\n/gm, '\n')
            }
            value = value.replace(/(^['"]|['"]$)/g, '').trim()

            res[key] = value
        }
    })
    return res
}
// 读取文件 转化成key value
function readFile(envPath){
    return parse(fs.readFileSync(envPath, 'utf8'))
}
// 文件后缀
function fileSuffix(fileUrl){
    return path.extname(fileUrl)
}
// 文件名称
function fileName(fileUrl){
    return path.basename(fileUrl)
}
export {readFile,fileSuffix,fileName}