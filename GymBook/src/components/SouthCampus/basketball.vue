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
                                <sitesTable :title='title' :date='date'></sitesTable>
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
            timeInterval:[]
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
        console.log(res);
        if(res.data.code===1)
        {
          this.title=res.data.data.title;
          this.money=res.data.data.money;
          this.description=res.data.data.description;
          //  "09:00-21:00"
          let startTime=res.data.data.open_time.substring(0,5);
          let endTime=res.data.data.open_time.substring(6);
          // 通过startTime和endTime处理出时段数组
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
