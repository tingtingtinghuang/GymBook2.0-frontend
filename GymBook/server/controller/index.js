const mysql=require('mysql');

let pool =mysql.createPool(
    {
        host:'39.108.179.140',
        port:3308,
        user:'root',
        password:'1234',
        database:'gym2.0'
    }
);

let query=function(sql,values)
{
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(error,connection)
        {
            if(error)
            {
                console.log("连接数据库异常");
                resolve(error);
            }   
            else{
                connection.query(sql,values,(err,rows)=>
                {
                  if(err) reject(err);
                  else resolve(rows);  
                })
                connection.release();
            }
        })  
    });
}
let selectAllStudent=function()
{
    let sql='select * from student ';
    return query(sql);
}
let signUp=function(no,password,role){
    if(role==='学生')
    {
        let sql='insert into student values( '+no+', '+password+', 0, 0)';
       
        return query(sql);
    }
    else{
        let sql='insert into manager values( '+no+', '+password+ ')';
       
        return query(sql);
    }
    
}
let selectAllManager=function()
{
    let sql='select * from manager ';
    return query(sql);
}
let openGym=function(gym_id)
{
    let sql="update gym set state='avail' where gym_id='"+gym_id+"';";
    return query(sql);
}


let selectAppointment=function(stuId,currentPage,page_size)
{
  
    let sql="select date,campus,time,kind,site_no,appointment.price,appointment.state from appointment,gym,sites where appointment.site_id=sites.site_id && sites.gym_id=gym.gym_id && no= "+stuId + " order by date desc limit "+(currentPage)*page_size+","+page_size;
    return query(sql);
}

let selectGym=function()
{
    let sql="select * from gym; ";
    return query(sql);
}
let selectManagerInventory=function()
{
    let sql="select * from avail_sites_num;"
    return query(sql);
}
let selectBlance=function(stuId)
{
    let sql="select balance from student where no= "+stuId;
    return query(sql);
}
let insertOrder=function(site_id,date,time,no,state,price)
{
    
    let sql="select add_appointment("+site_id+ ",'"+date+"','"+time+"','"+no+"')";
    // console.log(sql);
    // 返回1 ，预约成功.返回0,余额不足
    return query(sql);
}
let changePassword=function(no,newpassword)
{
    let sql="update student set password='"+newpassword+"' where no='"+no+"';";
    return query(sql);
}
let checkPassword=function(no)
{
    let sql="select password from student where no="+no;
    return query(sql);
}

let closeGym=function(gym_id)
{
    
    let sql="update gym set state='non-avail' where gym_id='"+gym_id+"';";
    // 返回1 ，预约成功.返回0,余额不足
    return query(sql);
}

let getNotice=function(gym_id)
{
    
    let sql="SELECT * FROM notice;";
   
    return query(sql);
}
let deleteNotice=function(id)
{
    
    let sql="delete from notice where id="+id;
    return query(sql);
}
let insertNotice=function(title,content)
{
    let sql="insert into notice(title,content,date) values('"+title+"','"+content+"',curdate());"
    console.log(sql);
    return query(sql);
}

let selectEastBadminton=function(title,content)
{
    let sql="select * from east_badminton";
    return query(sql);
}
let selectEastTennis=function(title,content)
{
    let sql="select * from east_tennis";
    return query(sql);
}
let selectSouthBadminton=function(title,content)
{
    let sql="select * from south_badminton";
    return query(sql);
}
let selectSouthTennis=function(title,content)
{
    let sql="select * from south_tennis";
    return query(sql);
}
let deposit=function(sno,money)
{
    let sql='update student set balance= balance+ '+money+' where no='+sno;
    return query(sql);
}
module.exports={
    selectAllStudent,
    selectAppointment,
    selectGym,
    selectManagerInventory,
    selectBlance,
    insertOrder,
    changePassword,
    closeGym,
    openGym,
    getNotice,
    deleteNotice,
    insertNotice,
    selectAllManager,
    selectEastBadminton,
    selectEastTennis,
    selectSouthBadminton,
    selectSouthTennis,
    checkPassword,
    deposit,
    signUp
}