const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// webpack 默认只能打包处理 .js 后缀名类型的文件；像 .png .vue 无法主动处理，所以要配置第三方的loader；

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html'  // 生成的内存中首页的名字
})

module.exports = {
 mode: 'development', // development   production
 plugins: [
   htmlPlugin
 ],
 module: { // 所有第三方 模块的配置规则
   rules: [ // 第三方匹配规则
     { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
   ]
 },
 resolve: {
   extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
   alias: { // 表示别名
     '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
   }
 }
}
