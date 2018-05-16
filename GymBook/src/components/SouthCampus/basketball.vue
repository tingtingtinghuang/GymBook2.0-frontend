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
      address: "英东体育馆中心",
      descMessage:
        "三号篮球场位于英东体育馆中心东侧，共有6片场地。周一至周五8:00-18:00免费。周一，周五18:00-22:00、周六、周日、节假日及寒暑假全天收费。个人到三号篮球场锻炼按次收费",
      title: "南校园三号篮球场",
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
  border-bottom: 1px solid #ccc;
}
.imgBox > img {
  width: 100%;
}
</style>
