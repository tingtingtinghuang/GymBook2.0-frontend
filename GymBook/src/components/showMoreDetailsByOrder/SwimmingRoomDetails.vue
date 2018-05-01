<template>
  <div class="container">
       <el-row class="first-line">
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
       </el-row>
        <el-row>
            <el-col :span="10">
                <imageList :imgSrc1='imgSrc1' :imgSrc2='imgSrc2' :imgSrc3='imgSrc3'></imageList>
            </el-col>
            <el-col :span="14">
                <room-info :title="title" :desc="descMessage" :address="address" :money="money"></room-info>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                 <el-tabs  type="border-card">
                    <el-tab-pane label="简介">
                        <el-row>
                            <p>{{shortMessage}}</p>
                        </el-row>
                    </el-tab-pane>
                 </el-tabs>
            </el-col>
        </el-row>
  </div>
</template>

<style>
.first-line {
  height: 20px;
  border-bottom: 1px solid #000;
}
</style>

<script>
import Breadcrumb from "./commontComponent/Breadcrumb.vue";
import imageList from "./commontComponent/imageList.vue";
import imgSrc1 from "./../../assets/100001.jpg";
import imgSrc2 from "./../../assets/100002.gif";
import imgSrc3 from "./../../assets/100003.jpg";
import RoomInfo from "./commontComponent/RoomInfo.vue";
export default {
  data() {
    return {
      imgSrc1: imgSrc1,
      imgSrc2: imgSrc2,
      imgSrc3: imgSrc3,
      shortMessage: "我的消息",
      address: "英东体育馆中心",
      descMessage:
        "三号游泳馆位于英东体育馆中心东侧，共有6片场地。周一至周五8:00-18:00免费。周一，周五18:00-22:00、周六、周日、节假日及寒暑假全天收费。个人到三号篮球场锻炼按次收费",
      title: "南校园三号游泳馆",
      money: 3
    };
  },
  components: {
    Breadcrumb,
    imageList,
    RoomInfo
  }
};
</script>