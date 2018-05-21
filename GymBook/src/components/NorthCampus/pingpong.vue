<template>
    <div>
        <Navigation/>
        <div class="container">
            <el-row class="first-line">
                <el-col :span="24">
                    <Breadcrumb></Breadcrumb>
                </el-col>
            </el-row>
            <el-row class="second-line">
                <el-col :span="24">
                    <gymInfo  :gymId='gymId' :imgSrc='imgSrc' :title='title' :info='description'  class="imgBox"/>
                </el-col>
            </el-row>
            <el-row class="third-line">
                <el-col :span="24">
                    <tabs>
                        <tab name="预定" selected="true">
                            <stockList @sessionDateChange="onSessionDateChange"/>
                            <el-row class="fourth-line">
                                <sitesTable :title='title' :sites='sites' :money='money'></sitesTable>
                            </el-row>
                        </tab>
                        <tab name="场馆介绍" ></tab>
                    </tabs>
                </el-col>
            </el-row>
        </div>

    </div>

</template>


<script>
import Breadcrumb from '../../common/breadcrumb'
import gymInfo from '../../common/gymInfo'
import stockList from '../../common/stockList.vue'
import sitesTable from '../../common/sitesTable'
import imgSrc from "./../../assets/100001.jpg"
import tabs from '../../common/tabs/tabs'
import tab from '../../common/tabs/tab'
import Navigation from '../../common/navigation';

import API from '../../utils/api';
import TimeApi from '../../utils/timeApi';

export default {
    data(){
        return{
            date:'',
            imgSrc: imgSrc,
            title:'',
            description:'',
            gymId:7,
            timeInterval:[],
            sites:[],
            money:0
            
            // like:this.$store.getters.getUserLike.like//取得该用户的关注信息
        }
    },
    components:{
        Breadcrumb,
        gymInfo,
        // SidebarOrder,
        stockList,
        sitesTable,
        tabs,
        tab,
        Navigation
    },
    beforeMount:function(){
    // id=7
       API.getReserveAPI({
        id:3,
        date:TimeApi.now()
      }).then(res=>{
        // console.log(res);
        if(res.data.code===1)
        {
          this.title=res.data.data.gym.title;
          this.money=res.data.data.gym.money;
          this.description=res.data.data.description;
          //  "09:00 - 21:00"
          let startTime=res.data.data.gym.open_time.substring(0,2);
        //   let test=moment(startTime).add(1,'hours');
          let endTime=res.data.data.gym.open_time.substring(8,10);
          let sitesnum=res.data.data.count;
          
          let list=res.data.data.list;
            // sites=[
            //     {
            //          time,
            //         money:this.money,
            //         isReserved:[]
            //     }
            // ]
        //"list":[
            //   {
            //       "site":{"id": 1 },
            //       "reservedTime":[
            //           "2018-05-02 14:00 - 2018-05-02 15:00"
            //       ]
            //   }]
          let sites=[];
          let siteIndex=0;
          while(startTime<endTime){
              let time=startTime+':00-'+(parseInt(startTime)+1)+':00';
              let isReserved=[];
              
              for(let i=0;i<sitesnum;i++)
              {
                  isReserved.push(0);
              }
              sites.push({
                  time,
                  isReserved,
                  money:this.money,
                  siteIndex
              });
              siteIndex++;
              startTime=(parseInt(startTime)+1);
          }
        //   console.log(list)
        //   list是预定信息的list
            for(let item of list){
                // console.log(item);
                for(let time of item.reservedTime){
                    let reserveStart=time.substring(11,13);
                    let reservedTime=reserveStart+':00-'+(parseInt(reserveStart)+1)+':00';
                    for(let site of sites){
                        if(site.time===reservedTime){
                            site.isReserved[item.site.id]=1;
                        }
                    } 
                }
               
            }
            this.sites=sites;
            console.log(sites);
        }


      },err=>{
        console.log(err);
      });

  },
    mounted:function(){
      //  console.log(this.imgSrc)
    },
    methods: {
      onSessionDateChange: function(date) {
       this.date = date;
      }
    }

}
</script>

<style scoped>
.container{
    margin: 0 auto;
    padding: 0;
    width:1024px;
}
.first-line{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999;
}
.second-line{
    height: 150px;
}
.fourth-line{
    margin-top: 40px;
}
.imgBox>img{
    width: 100%;
}

</style>
