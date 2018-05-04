let path = require('path');
let fs = require('fs');
let app = require('express')();


let mock = require("mockjs");

const glob = require('glob');

let apiContArr = [];

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

        apiContArr.push(JSON.parse(cont));
      });
    })
  };
};

init();

app.use((req, res) => {
  let data;
  var delay = 0;
  apiContArr.forEach(val => {
    val.forEach(reqData => {
      if (reqData.regexp) {
        if (!new RegExp(reqData.url).test(req.originalUrl)) {
          return false;
        }
      } else if (req.originalUrl.indexOf(reqData.url) !== 0) {
        return false;
      }

      var apiRes = reqData.res;
      data = reqData.mock ? mock.mock(apiRes) : apiRes;
      delay = reqData.delay || 0;
      return true;

    })
  })

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  data !== undefined ? setTimeout(() => res.jsonp(data), delay) : res.sendStatus(404);
})

app.listen('2618',() => {
  console.info('Mock server is listening at 2618');
})

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

// 是否是JSON
function isJSON(obj) {
  return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length
}


