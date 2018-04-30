<template>
    <div class="container">
        <el-row class="first-line">
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
        <div class="wrapper">
            <div class="left">
                <el-row>
                    <el-col :span="10" class="imgBox">
                        <img :src="imgSrc" alt="">
                    </el-col>
                    <el-col :span="14">

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
            <div class="right">
                <room-info :title="title" :desc="descMessage" :address="address" :money="money"></room-info>
            </div>
        </div>
    </div>
</template>

<style>
.first-line {
  margin-bottom: 20px;
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.first-line {
  height: 20px;
  border-bottom: 1px solid #ccc;
}
.imgBox > img {
  width: 100%;
}
.left {
  margin-right: 20px;
  border: 1px solid black;
}
</style>

<script>
import Breadcrumb from './commontComponent/Breadcrumb.vue'
import RoomInfo from './commontComponent/RoomInfo.vue'
import imgSrc from './../../assets/100001.jpg'
export default {
  data() {
    return {
      shortMessage: '定时任务补偿',
      imgSrc: imgSrc,
      address: '英东体育馆中心',
      descMessage:
        '三号篮球场位于英东体育馆中心东侧，共有6片场地。周一至周五8:00-18:00免费。周一，周五18:00-22:00、周六、周日、节假日及寒暑假全天收费。个人到三号篮球场锻炼按次收费',
      title: '南校园三号篮球场',
      money: 3
    }
  },
  components: {
    Breadcrumb,
    RoomInfo
  }
}
</script>
