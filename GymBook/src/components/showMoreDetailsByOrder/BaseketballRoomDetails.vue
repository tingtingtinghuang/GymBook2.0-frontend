<template>
  <div class="container">
        <el-row class="first-line">
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" class="imgBox">
                <img :src="imgSrc" alt="">
            </el-col>
            <el-col :span="14">

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
.first-line{
    height: 20px;
    border-bottom: 1px solid #000;
}
.imgBox>img{
    width: 100%;
}
</style>

<script>
import Breadcrumb from "./commontComponent/Breadcrumb.vue";
import imgSrc from "./../../assets/100001.jpg"
export default {
    data() {
        return {
            shortMessage: "定时任务补偿",
            imgSrc:imgSrc
        };
    },
    components: {
        Breadcrumb
    }
};
</script>
