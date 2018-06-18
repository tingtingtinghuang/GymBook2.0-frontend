<template>
    <div>
        <Navigation/>
        <div v-if='type===0' class="container">
            <el-row class="first-line-0">
                <el-col :span="24">
                    <Breadcrumb></Breadcrumb>
                </el-col>
            </el-row>
            <el-row class="second-line-0">
                <el-col :span="24">
                    <gymInfo  :gymId=gymId :imgSrc='imgSrc' :title='title' :info='description'  class="imgBox"/>
                </el-col>
            </el-row>
            <el-row class="third-line-0">
                <el-col :span="24">
                    <tabs>
                        <tab name="预定" selected="true">
                            <!-- <stockList @sessionDateChange="onSessionDateChange"/> -->
                            <el-row class="fourth-line">
                                <sitesTable :gymId=gymId :title='title' :periods='periods' :price='price'></sitesTable>
                            </el-row>
                        </tab>
                        <tab name="场馆介绍" ></tab>
                    </tabs>
                </el-col>
            </el-row>
        </div>
        <div v-else class="container">
            <el-row class="first-line-1">
                <el-col :span="24">
                    <Breadcrumb></Breadcrumb>
                </el-col>
            </el-row>

            <el-row class="second-line-1">
                <el-col :span="12" class="imgBox">
                    <ImageGallery :images='images' />
                </el-col>
                <el-col :span="12">
                    <GymSideInfo :like='like' :gymId=gymId :title="title" :desc="description" :address="addr" :price="price" :sessions='sessions'></GymSideInfo>
                </el-col>
            </el-row>
        </div>


    </div>

</template>


<script>
import Breadcrumb from '../common/breadcrumb'
import gymInfo from '../common/gymInfo'
import stockList from '../common/stockList.vue'
import sitesTable from '../common/sitesTable'
import imgSrc from "./../assets/100001.jpg"
import tabs from '../common/tabs/tabs'
import tab from '../common/tabs/tab'
import Navigation from '../common/navigation';

import API from '../utils/api';
import TimeApi from '../utils/timeApi';
import GymSideInfo from '../common/gymSideInfo'
import ImageGallery from '../common/imageGallery'
import imgSrc1 from "./../assets/100001.jpg";
import imgSrc2 from "./../assets/100002.gif";
import imgSrc3 from "./../assets/100003.jpg";

export default {
    data(){
        return{
            addr: "",
            status:1,
            like:true,
            sessions:[],
            date:'',
            imgSrc: imgSrc,
            title:'',
            description:'',
            timeInterval:[],
            periods:[],
            price:0,

            // like:this.$store.getters.getUserLike.like//取得该用户的关注信息
        }
    },
    components:{
        Breadcrumb,
        gymInfo,
        stockList,
        sitesTable,
        tabs,
        tab,
        Navigation,
        ImageGallery,
        GymSideInfo
    },
    beforeMount:function(){
       API.getReserveAPI({
        id:3,
        date:TimeApi.now()
      }).then(res=>{
        if(res.data.code===1 && this.type===1)
        {
          let gymInfo=res.data.data.gym;
          this.title=gymInfo.title;
          this.addr=gymInfo.addr;
          this.price=gymInfo.price;
          this.description=gymInfo.description;
          let open_times=gymInfo.open_time.split(',');
          console.log(open_times);
          let status=gymInfo.status;
          for(let i=0;i<open_times.length;i++){
            for(let j=0;j<open_times[i].length;j++)
            {

              if(open_times[i][j]===':'){

                let res={
                  date:open_times[i].substr(j+1,10),
                  open_time:[open_times[i].substr(j+12,13)],
                  status:status[i]
                }
                this.sessions.push(res);
                break;
              }
            }

          }
          console.log(this.sessions);
        }
        else if(res.data.code===1)
        {
          let gymInfo=res.data.data.gym;
          this.title=gymInfo.title;
          this.price=gymInfo.price;
          this.description=gymInfo.description;
          //  "2018-04-23 07:00 ~ 21:00"
          let open_time =gymInfo.open_time.substring(2);
          let startTime=open_time.substr(11,2);
        //   let test=moment(startTime).add(1,'hours');
          let endTime=open_time.substr(19,2);
          let sitesnum=gymInfo.siteNumber;

          let list=res.data.data.list;

          let periods=[];
          let siteIndex=1;
          console.log(open_time,startTime,endTime);;
          // 初始化sites
          while(startTime<endTime){
              // let time=startTime+':00-'+(parseInt(startTime)+1)+':00';
              let time=open_time.replace(endTime+':00',(parseInt(startTime)+1)+':00');
              console.log(time);
              let isReserved=[];

              for(let i=0;i<sitesnum;i++)
              {
                  isReserved.push(0);
              }
              periods.push({
                  time,
                  isReserved,
                  siteIndex
              });
              siteIndex++;
              startTime=(parseInt(startTime)+1);
          }

          console.log(periods);
        //   list是预定信息的list
            for(let site of list){
                // console.log(item);
                if(site.reserveTime!==null){
                    let reservedTimeArray=site.reserveTime.split(',');
                    for(let time of reservedTimeArray){
                    // let reserveStart=time.substr(11,13);
                    // let reservedTime=reserveStart+':00-'+(parseInt(reserveStart)+1)+':00';
                      for(let period of periods){
                          if(period.time===time.trim()){
                              periods.isReserved[site.id]=1;
                          }
                      }
                  }
                }


            }
            this.periods=periods;
            console.log(periods);
        }
      },err=>{
        console.log(err);
      });
  },
  computed:{
      images:function(){

          return [imgSrc1,imgSrc2,imgSrc3]
      },
      // type==0,代表按时间预约，type==1代表按天数预约
      type:function(){

       if(this.$route.params.id==='3' || this.$route.params.id==='6' || this.$route.params.id==='10'){
          return 1;
        }
        else return 0;
      },
      gymId:function(){
        return this.$route.params.id;
      }
  },
    mounted:function(){
       console.log(this.gymId)
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
.first-line-0{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999;
}
.second-line-0{
    height: 150px;
}
.fourth-line-0{
    margin-top: 40px;
}

.first-line-1 {
  margin-bottom: 20px;
}
.first-line-1 {
  height: 20px;
  border-bottom: 1px solid #ccc;
}
.imgBox > img {
  width: 100%;
}
</style>
