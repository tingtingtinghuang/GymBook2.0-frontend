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
                <el-col :span="12" class="imgBox">
                    <ImageGallery :images='images' />
                </el-col>
                <el-col :span="12">
                    <GymSideInfo :like='like' :gymId=gymId :title="title" :desc="description" :address="addr" :money="money" :sessions='sessions'></GymSideInfo>
                </el-col>
            </el-row>
            <!-- <el-row>
                <el-col :span="24">
                    <el-tabs type="border-card">
                        <el-tab-pane label="简介">
                            <el-row>
                                <p>{{shortMessage}}</p>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row> -->
        </div>
    </div>

</template>



<script>
import Breadcrumb from '../../common/breadcrumb'
import GymSideInfo from '../../common/gymSideInfo'
import Navigation from '../../common/navigation'
import ImageGallery from '../../common/imageGallery'
import imgSrc1 from "./../../assets/100001.jpg";
import imgSrc2 from "./../../assets/100002.gif";
import imgSrc3 from "./../../assets/100003.jpg";

import API from '../../utils/api';
import TimeApi from '../../utils/timeApi';
import { mapState } from 'vuex';
export default {

  data() {
    return {
      gymId:3,
      // shortMessage: "一些简介",
      addr: "",
      description:"",
      status:1,
      title: "",
      money: 0,
      like:true,
      sessions:[]
      // like:this.$store.getters.getUserLike.like//取得该用户的关注信息
    };
  },
  computed:{
      images:function(){

          return [imgSrc1,imgSrc2,imgSrc3]
      }


  },
  beforeMount:function(){
    // id=3
      let date=new Date();
      API.getReserveAPI({
        id:3,
        date:TimeApi.now()
      }).then(res=>{
        console.log(res.data);
        if(res.data.code===1)
        {
          this.title=res.data.data.title;
          this.addr=res.data.data.addr;
          this.sessions=res.data.data.sessions;
          this.money=res.data.data.money;
          this.description=res.data.data.description;
        }


      },err=>{
        console.log(err);
      });

  },
  mounted:function(){
    // console.log(this.sessions)
  },
  methods:{

  },
  components: {
    Breadcrumb,
    Navigation,
    ImageGallery,
    GymSideInfo
  }
};
</script>

<style scoped>
.container{
    margin: 0 auto;
    padding: 0;
    width:1024px;
}
.first-line {
  margin-bottom: 20px;
}
.first-line {
  height: 20px;
  border-bottom: 1px solid #ccc;
}
.imgBox > img {
  width: 100%;
}
</style>
