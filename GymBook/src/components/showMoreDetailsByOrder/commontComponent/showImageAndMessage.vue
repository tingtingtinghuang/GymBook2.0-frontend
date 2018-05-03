<template>
    <el-row>
        <el-col :span="3" class="first-row">
            <img :src= 'imgSrc'>
        </el-col>
        <el-col :span="16" class="message" :offset=1>
            <h2>{{h2Message}}</h2>
            <p>{{pMessage}}</p>
        </el-col>
        <el-col :offset=1 :span="2">
            <el-button type="default" icon="el-icon-star-off" class="care">关注</el-button>
        </el-col>
    </el-row>
</template>
<style>
.first-row{
    display: flex
}
.first-row>img{
    width: 100%;
    height: 100%;
    margin-top:20px;
    margin-left: 10px;
}
.message{
    text-align: left
}
.care{
    margin-top: 40px;
}
</style>

<script>
export default {
    props: ['imgSrc', 'h2Message', 'pMessage'],
};
</script>