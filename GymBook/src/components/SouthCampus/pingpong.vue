<template>
    <div>
        <Navigation/>
        <div class="container">
            <el-row class="first-line">
                <el-col :span="24">
                    <Breadcrumb></Breadcrumb>
                </el-col>
            </el-row>
            <el-row class="seconed-line">
                <el-col :span="24">
                    <gymInfo :like='like' :gymId='gymId' :imgSrc='imgSrc' :title='title' :info='info'  class="imgBox"/> 
                </el-col>
            </el-row>
            <el-row class="third-line">
                <el-col :span="24">
                    <tabs>
                        <tab name="预定" selected="true">
                            <stockList/>
                            <el-row class="fourth-line">  
                                <sitesTable :title='title'></sitesTable>
                            </el-row>
                        </tab>
                        <tab name="场馆介绍" ></tab>
                    </tabs>
                </el-col>
            </el-row>
        </div>
        
    </div>
    
</template>


<script>
import Breadcrumb from '../../common/breadcrumb'
import gymInfo from '../../common/gymInfo'
import stockList from '../../common/stockList.vue'
import sitesTable from '../../common/sitesTable'
import imgSrc from "./../../assets/100001.jpg"
import tabs from '../../common/tabs/tabs'
import tab from '../../common/tabs/tab'
import Navigation from '../../common/navigation'

export default {
    data(){
        return{
            imgSrc: imgSrc,
            title:'南校园乒乓球室',
            info:'南校园乒乓球室位于英东体育馆西侧二楼，与学校高水平击剑队共用，有12-15张乒乓球桌，开放时间是：8：00至18：00。周六、周日、节假日收费',
            gymId:6,
            like:this.$store.getters.getUserLike.like//取得该用户的关注信息
        }
    },
    components:{
        Breadcrumb,
        gymInfo,
        // SidebarOrder,
        stockList,
        sitesTable,
        tabs,
        tab,
        Navigation
    },
    mounted:function(){
       console.log(this.imgSrc)
    }

}
</script>

<style scoped>
.container{
    margin: 0 auto;
    padding: 0;
    width:1024px;
}
.first-line{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999;
}
.seconed-line{
    height: 150px;
}
.fourth-line{
    margin-top: 40px;
}
.imgBox>img{
    width: 100%;
}

</style>