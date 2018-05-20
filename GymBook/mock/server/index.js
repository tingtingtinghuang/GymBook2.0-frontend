const Koa=require('koa');
const app=new Koa();
const bodyParser=require('koa-bodyparser');
const cors=require('koa2-cors');

const router=require('./router.js');
app.use(cors());
app.use(bodyParser());

app.use(router.routes());


app.listen(2618, () => {
    console.log('The server is running at http://localhost:' + 2618);
});
