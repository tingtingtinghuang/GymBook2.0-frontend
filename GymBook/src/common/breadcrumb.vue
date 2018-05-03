// 导航的面包屑
<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><span>首页</span></el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    
</template>

<script>
export default {
    data(){
       return {
           
       }
    }
};
</script>

<style scoped>
div{
    height: 50px;
    line-height: 50px;

}
span{
    font-size: 18px;
    cursor:default;
}
</style>
