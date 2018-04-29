<template>
    <div class="container">
        <el-row class="first-line">
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
        <el-row class="seconed-line">
            <el-col :span="24">
                <showImageAndMessage :imgSrc='imgSrc' :h2Message='h2Message' :pMessage='pMessage' class="imgBox"/> 
            </el-col>
        </el-row>
        <el-row class="third-line">
            <el-col :span="24">
                <el-tabs value="first">
                    <el-tab-pane label="预订" name="first">
                        <stockList/>
                        <el-row class="fourth-line">
                            <el-col :span="20">
                                <tableByGymRoom></tableByGymRoom>
                            </el-col>
                            <el-col :span="4">
                                <SidebarOrder/>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="场馆介绍" name="second">{{something}}</el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.container{
    margin: 0;
    padding: 0;
}
.first-line{
    height: 20px;
    border-bottom: 1px solid #000;
}
.seconed-line{
    height: 150px;
    border-bottom: 1px solid #000;
}
.fourth-line{
    margin-top: 40px;
}
.imgBox>img{
    width: 100%;
}
</style>

<script>
import Breadcrumb from './commontComponent/Breadcrumb.vue'
import showImageAndMessage from './commontComponent/showImageAndMessage.vue'
import SidebarOrder from './commontComponent/SidebarOrder.vue'
import stockList from './commontComponent/stockList.vue'
import tableByGymRoom from './commontComponent/tableByGymRoom.vue'
import imgSrc from "./../../assets/100001.jpg"
export default {
    data(){
        return{
            imgSrc: imgSrc,
            h2Message:'南校园英东网球场',
            pMessage:'中山大学英东体育馆'
        }
    },
    components:{
        Breadcrumb,
        showImageAndMessage,
        SidebarOrder,
        stockList,
        tableByGymRoom,
    }
}
</script>