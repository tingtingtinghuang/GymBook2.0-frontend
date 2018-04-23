const checkToken = require('../token/checkToken.js');
const createToken = require('../token/createToken.js');

const Router = require('koa-router');

const childRouter = new Router();


childRouter.post('/students/oauth', async(ctx,next)=>{
    
    let sno=ctx.request.body.login_id;
    let password=ctx.request.body.login_password;
    let token;
    let users;
    if(role=='student')
    {
        await mysql.selectAllStudent().then(result=>{
            users=JSON.parse(JSON.stringify(result));
        })
    }
    else
    {
        await mysql.selectAllManager().then(result=>{
            users=JSON.parse(JSON.stringify(result));
        })
    }
    
    
    let isok=0;
    for(let i=0;i<users.length;i++)
    {
        
        if(users[i].no==sno&&users[i].password==password)
        {
            
            isok=1;
            token=createToken(sno,role);
            break;
        }
        
    }
    if(isok===1)
    {
        ctx.response.body={
            isok:1,
            token:token
        }
    }
    else
    {
        ctx.response.body={
            isok:0,
            token:''

        }
    }
    
});


childRouter.post('/students/signup', async(ctx,next)=>{
    
    let no=ctx.request.body.no;
    let password=ctx.request.body.password;
    let role=ctx.request.body.identity;
   
    
    await mysql.signUp(no,password,role).then(result=>{
        ctx.response.body='OK';
    })

});

childRouter.get('/oppointment',checkToken,async(ctx,next)=>{
    let imformation;
  
    let login_id=ctx.params.login_id || ctx.state.user_id;
    let currentPage=ctx.params.currentPage;
    let page_size=ctx.params.page_size;
    await mysql.selectAppointment(login_id,currentPage,page_size).then(result=>{
        imformation=JSON.parse(JSON.stringify(result));
    })
    ctx.response.body=imformation;
})


childRouter.get('/stuinventory',checkToken,async(ctx,next)=>{
    let imformation;
    await mysql.selectStuInventory().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})
childRouter.get('/east_badminton',checkToken,async(ctx,next)=>{
    let imformation;
    await mysql.selectEastBadminton().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})
childRouter.get('/east_tennis',checkToken,async(ctx,next)=>{
    let imformation;
    await mysql.selectEastTennis().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})
childRouter.get('/south_badminton',checkToken,async(ctx,next)=>{
    let imformation;
    await mysql.selectSouthBadminton().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})
childRouter.get('/south_tennis',checkToken,async(ctx,next)=>{
    let imformation;
    await mysql.selectSouthTennis().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})

childRouter.get('/gym',checkToken,async(ctx,next)=>{
  
    let imformation;
    await mysql.selectGym().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})

childRouter.get('/managerinventory',checkToken,async(ctx,next)=>{
    let imformation;
    if(ctx.state.role!=='manager') 
    {
        ctx.status = 401;
        ctx.body = {
            message: '权限不足'
        }
    }
    await mysql.selectManagerInventory().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})

childRouter.get('/balance',checkToken,async(ctx,next)=>{
    let imformation;
    // ctx.state.user_id是checkToken中设置的
    let login_id=ctx.params.login_id  || ctx.state.user_id ;
    await mysql.selectBlance(login_id).then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
})

childRouter.post('/order',checkToken,async(ctx,next)=>{
    let imformation;
    let site_id=ctx.request.body.site_id;
    let date=ctx.request.body.date;
    let time=ctx.request.body.time;
    let login_id=ctx.request.body.login_id;
    let state=ctx.request.body.state;
    let price=ctx.request.body.price;
    await mysql.insertOrder(site_id,date,time,login_id,state,price).then(result=>{
    //   console.log(result);
    //     console.log('result[0]:'+result[0]);
    // 此处有bug
        // if(result[0]===1)
            imformation='OK';
        // else imformation='Fail'
    })
    
    ctx.response.body=imformation;
})

childRouter.put('/password',checkToken,async(ctx,next)=>{
  
    let imformation;
    let sno=ctx.params.sno;
    let oldpassword=ctx.params.oldpassword;
    let newpassword=ctx.params.newpassword;
    let password;
    await mysql.checkPassword(sno).then(result=>{
        
        password=JSON.parse(JSON.stringify(result))[0].password;
    });
    if(password!==oldpassword)
    {
        
        ctx.response.body="Fail";
    }
    else{
        await mysql.changePassword(sno,newpassword).then(res=>{
      
        ctx.response.body="OK";
        })
    }


})

childRouter.put('/gym/close',checkToken,async(ctx,next)=>{
    if(ctx.state.role!=='manager') 
    {
        ctx.status = 401;
        ctx.body = {
            message: '权限不足'
        }
    }
    let imformation;
    let gym_id=ctx.params.gym_id;
    await mysql.closeGym(gym_id).then(result=>{
        imformation='OK';
    })

    
    ctx.response.body=imformation;
})

childRouter.get('/gym/open',checkToken,async(ctx,next)=>{
    if(ctx.state.role!=='manager') 
    {
        ctx.status = 401;
        ctx.body = {
            message: '权限不足'
        }
    }
    let imformation;
   
    let gym_id=ctx.params.gym_id;
    await mysql.openGym(gym_id).then(result=>{
        imformation='OK';
    })

    ctx.response.body=imformation;
})
childRouter.get('/notice',checkToken,async(ctx,next)=>{
    
    
    let imformation;
   
    await mysql.getNotice().then(result=>{
      
        imformation=JSON.parse(JSON.stringify(result));
    })
   
    ctx.response.body=imformation;
    
})
childRouter.delete('/notice',checkToken,async(ctx,next)=>{
    if(ctx.state.role!=='manager') 
    {
        ctx.status = 401;
        ctx.body = {
            message: '权限不足'
        }
    }
    let imformation;
    
    let id=ctx.params.notice_id;
    
    await mysql.deleteNotice(notice_id).then(result=>{
      
        imformation='OK';
    })
   
    ctx.response.body=imformation;
    
})
childRouter.post('/notice',checkToken,async(ctx,next)=>{
    if(ctx.state.role!=='manager') 
    {
        ctx.status = 401;
        ctx.body = {
            message: '权限不足'
        }
    }
    let imformation;
    let title=ctx.request.body.title;
    let content=ctx.request.body.content;
    
    await mysql.insertNotice(title,content).then(result=>{
      
        imformation={
            
        };
    })
    
    ctx.response.body=imformation;
    
})
childRouter.get('/', async(ctx,next)=>{
    ctx.response.body="hello";
});
childRouter.put('/deposit',checkToken,async(ctx,next)=>{
  
    let imformation;
    let sno=ctx.params.login_id;
    let money=ctx.params.money;
    

    await mysql.deposit(sno,money).then(result=>{
        imformation='OK';
    })
    
    ctx.response.body=imformation;
    
})

module.exports = childRouter;