// 获取modules下的js文件
const files = require.context('./modules', false, /\.js$/);
const modules = {};
files.keys().forEach((key) => { 
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
let api=[]
for (const key in modules) {
  api.push(modules[key])
}
let result=api.reduce((a,b)=>{
  return Object.assign(a,b)
})
export default result
