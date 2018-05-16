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
                    <GymSideInfo :like='like' :gymId='gymId' :title="title" :desc="descMessage" :address="address" :money="money"></GymSideInfo>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-tabs type="border-card">
                        <el-tab-pane label="简介">
                            <el-row>
                                <p>{{shortMessage}}</p>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
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


export default {
  data() {
    return {
      shortMessage: "一些简介",
      address: "英东游泳场",
      descMessage:
        "南校园健身房位于英东体育馆东侧一楼。开放时间：16:00-21:00。请锻炼人员自带毛巾。",
      title: "南校园健身房",
      money: 5,
      gymId:5,
      like:this.$store.getters.getUserLike.like//取得该用户的关注信息
    };
  },
  computed:{
      images:function(){
          
          return [imgSrc1,imgSrc2,imgSrc3]
      }
  },
  mounted:function()
  {
    //   console.log(this.images)
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
