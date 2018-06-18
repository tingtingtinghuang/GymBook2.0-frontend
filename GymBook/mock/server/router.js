const Router = require('koa-router');

let fs = require('fs');
let path = require('path');
const glob = require('glob');

const router = new Router();

// 获取某一目录下所有文件名
function getPath(path, options = {}) {
  return new Promise((resolve, reject) => {
    // options is optional
    glob(path, options, function (er, files) {

      if (er) {
        reject(er);
      } else {
        resolve(files);
      }
      // files is an array of filenames.
      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
    });
  });
};

let apiContArr = {};

async function init() {
  const apiPath = path.join(__dirname, '../*.json');
  let apiPathArr = await getPath(apiPath);
  await getApis();

  // 监听JSON文件的变化
  apiPathArr.forEach(async val => {
    await fs.watchFile(val, curr => {
      console.log('API is updated.', curr.mtime);
      getApis();
    })
  })

function getApis() {
    apiPathArr.forEach(async val => {
      await fs.readFile(val, 'utf-8', (err, cont) => {
        if (err) throw err;
        if (!cont) throw 'content must exsit.';
        let data=JSON.parse(cont);
        apiContArr[data.filename]=data.res;

      });
    })
  };
};

init();

router.get('/gymlist',async(ctx,next)=>{
  ctx.response.body=apiContArr.bookCenter;
})
router.get('/newsList/home/four',async(ctx,next)=>{
  ctx.response.body=apiContArr.homeNoticeFour;
})
router.get('/newsList/home/one',async(ctx,next)=>{
  ctx.response.body=apiContArr.homeNoticeOne;
})
router.get('/fieldList',async(ctx,next)=>{
  ctx.response.body=apiContArr.homeNoticeThree;
})
router.get('/newsList/notice',async(ctx,next)=>{
  ctx.response.body=apiContArr.newsList_notice;
})
router.get('/newsList/rules',async(ctx,next)=>{
  ctx.response.body=apiContArr.newsList_rules;
})
router.get('/gym',async(ctx,next)=>{
  ctx.response.body=apiContArr.test;
})
router.get('/reserve',async(ctx,next)=>{
  // console.log(apiContArr.reserveByTime)
  ctx.response.body=apiContArr.reserveByTime;
  // ctx.response.body=apiContArr.reserveByDay;
})
router.post('/reserve',async(ctx,next)=>{
  // console.log(ctx.request.body);
  ctx.response.body= {
    "code": 1,
    "msg": "success",
  };
})
module.exports = router;
