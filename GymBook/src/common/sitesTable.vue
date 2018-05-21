
<template>
  <div>
      <el-row>
        <el-col :span="19">
            <el-table :data="sites" border max-height="500" style="width: 100%">

              <el-table-column fixed label="场次" width="120" align="center">
                    <template slot-scope="scope">
                        <span>￥ {{scope.row.money}}</span>
                        <p>
                           {{ scope.row.time }}
                        </p>
                    </template>
                </el-table-column>

                <el-table-column class="item" align="center"  width="120" v-for="(site,index) in sites" :key='index' v-if='index < site.isReserved.length'>
                  <template slot-scope="scope" >
                    <div class="showIsEmpty" :class="{no:scope.row.isReserved[index]===0 ?false:true }" @click='toggle(scope.row.siteIndex,index)'></div>
                  </template>
                </el-table-column>
                
            </el-table>
        </el-col>

        <el-col :span="5">
            <div class="container">
                <div class="orderDetails">
                <div class="state">
                    <span>可预订</span>
                    <span>已预订</span>
                </div>
                <ul class="orderDetailsList">
                    <li>
                    <span> 场地</span>
                    <span> {{title}}</span>
                    </li>
                    <li>
                    <span> 类型</span>
                    <span> 日</span>
                    </li>
                    <li>
                    <span> 日期</span>
                    <span> {{orderData.date}}</span>
                    </li>

                </ul>

                <div class="orderImportantDetails">
                    <div class="countBox">
                    <span> 场次</span>
                    <span> {{orderData.session}}</span>
                    </div>
                    <p> 已选择{{orderData.number}}个场地，再次单击可取消选择</p>

                    <div class="orderMoney">
                    <span> 合计</span>
                    <span>￥{{orderData.price}}</span>
                    </div>

                </div>
                <button class="submitBtn" @click="addReserve"> 确认预定</button>
        </div>
    </div>
        </el-col>
      </el-row>


  </div>

</template>


<script>
import API from '../utils/api.js'
import TimeAPI from '../utils/timeApi.js'
export default {
    data() {
      return {
        reservedTimeLists:[],
        orderData:{
            date:'10086',//日期
            session:'请选择场次',//场次
            price:0,
            number:0//选择的场次个数
        }
       
      }
    },
    props:['title','money', 'sites','gymId'],
    computed: {
    
    },
    methods: {
      toggle(siteIndex,siteId) {
        // 1代表不能预约，2代表当前选中，提交订单后变成1,0表示没有预约
        if(this.sites[siteIndex].isReserved[siteId]===1) return ;
        else if(this.sites[siteIndex].isReserved[siteId]===2){
           this.$set(this.sites[siteIndex].isReserved, siteId, 0);
           this.orderData.number--;
           this.orderData.price-=this.money;
        }
        else{
            this.$set(this.sites[siteIndex].isReserved, siteId, 2);
            this.orderData.number++;
            this.orderData.price+=this.money;
        }
       
      },
      // reservedTimeLists: [
      //   {
              
      //     "site":{"id": Num1 },
      //     "reservedTime":["18:00 - 19:00",
      //                     "09:00 - 10:00" ]
      //   }
      // ]
      addReserve:function(){
        if(this.orderData.number>0){
             let reservedTimeLists=[];
              for(let period of this.sites){
                period.isReserved.forEach((site,siteId) => {
                  
                  if(site===1 || site===2){
                    
                    
                    let isPeriodPush=false;
                    reservedTimeLists.forEach(record=>{
                      if(record.site.id===siteId){
                        isPeriodPush=true;
                        record.reservedTime.push(period.time);
                      }
                    })
                    if(!isPeriodPush){
                        reservedTimeLists.push({
                          site:{id:siteId},
                          reservedTime:[period.time]
                        })
                    }
                  
                  }      
                });
              
              }
              API.postReserveAPI({
                time_type:0,
                gymId:this.gymId,
                userid:10086,
                reservedTimeLists,
                reservedDate:TimeAPI.now(),
                buy_num:this.orderData.number,
                totalPrice:this.orderData.price,
              }).then(res=>{
                  if(res.data.code===1) {
                    const h = this.$createElement;

                    this.$notify({
                      title: '消息',
                      message: h('i', { style: 'color: teal'}, '恭喜你，预定成功'),
                      type: 'success',
                      offset: 100
                    });
                    // 下单后将2改为1，代表不可取消
                    for(let record of this.sites){
                      record.isReserved.forEach((site,siteId)=>{
                        if(site===2) {
                          record.isReserved[siteId]=1;
                          
                        }
                      })
                    }
                   
                  }
              },err=>{
                console.log(err);
              })
            }
        }
       
    },
    mounted:function(){
    }
  }
</script>

<style scoped>
  .showIsEmpty {
    width: 100px;
    height:80px;
    color: #000;
    background-image: url('../assets/images/reservation_true.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80px 50px;
    cursor: pointer;
  }

  .showIsEmpty.no {
    background-image: url('../assets/images/reservation_false.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80px 50px;
    cursor:default;
  }


  .container {
    font-size: 12px;
    text-align: center;
  }

  ul,
  p,
  li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .orderDetails .state {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    border-bottom: 1px solid #ddd;
  }

  .orderDetails .state span {
    display: block;
    position: relative;
    text-indent: 20px;
  }

  .orderDetails .state span::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 5px;

  }

  .orderDetails .state span:nth-child(1):after {
    background: #81c478;
  }

  .orderDetails .state span:nth-child(2):after {
    background: #fd8a5f;
  }


  .orderDetailsList {
    padding: 10px 20px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .orderDetailsList li {
    line-height: 30px;
  }

  .orderDetailsList li span {
    padding-right: 10px;
  }

  .orderImportantDetails {
    padding: 10px 20px;
    text-align: left;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
  }

  .orderImportantDetails p {
    color: #999;
  }

  .orderImportantDetails .orderMoney {
    text-align: center;
    padding: 10px 0;
  }

  .orderImportantDetails .orderMoney strong {
    color: #e95b5c;
    font-size: 30px;
    font-weight: bold;
  }

  .submitBtn {
    width: 90%;
    height: 36px;
    line-height: 36px;
    border-radius: 5px;
    background: #e95b5c;
    border: none;
    color: #fff;
    margin: 20px 0;
  }

</style>
