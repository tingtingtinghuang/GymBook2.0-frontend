<template>
  <div class="container">
        <el-row>
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <imageList :imgSrc1='imgSrc1' :imgSrc2='imgSrc2' :imgSrc3='imgSrc3'></imageList>
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

<script>
import Breadcrumb from "./commontComponent/Breadcrumb.vue"
import imageList from './commontComponent/imageList.vue'
import imgSrc1 from "./../../assets/100001.jpg"
import imgSrc2 from "./../../assets/100002.gif"
import imgSrc3 from "./../../assets/100003.jpg"
export default {
    data(){
        return{
            imgSrc1: imgSrc1,
            imgSrc2: imgSrc2,
            imgSrc3: imgSrc3
        }
    },
    components:{
        Breadcrumb,
        imageList
    }
};
</script>