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
        "南校园游泳池开放时间为：6：30-8：00，14：30-18：00，19：30-21：00。 可以网上预订和现场扣费预订，网上可提前一天预订。 建议先网上预订，现场验证可节省入场时间。如现场预订需输入校园卡密码，会增加入场时间。",
      title: "南校园游泳池",
      money: 3,
       gymId:3,
      like:this.$store.getters.getUserLike.like//取得该用户的关注信息
    //   images:[]
    //   imgSrc1: imgSrc1,
    //   imgSrc2: imgSrc2,
    //   imgSrc3: imgSrc3,
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
