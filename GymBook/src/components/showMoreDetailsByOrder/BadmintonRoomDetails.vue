<template>
    <div class="container">
        <el-row>
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <showImageAndMessage :imgSrc='imgSrc' :h2Message='h2Message' :pMessage='pMessage'/> 
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-tabs>
                    <el-tab-pane label="预订" name="first">
                        <stockList/>
                        <el-row>
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

<script>
import Breadcrumb from './commontComponent/Breadcrumb.vue'
import showImageAndMessage from './commontComponent/showImageAndMessage.vue'
import SidebarOrder from './commontComponent/SidebarOrder.vue'
import stockList from './commontComponent/stockList.vue'
import tableByGymRoom from './commontComponent/tableByGymRoom.vue'
import heart from '../../assets/heart.png'
export default {
    data(){
        return{
            imgSrc: heart,
            h2Message:'南校园英东羽毛球场',
            pMessage:'中山大学英东体育馆',
            something:'一些事情'
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