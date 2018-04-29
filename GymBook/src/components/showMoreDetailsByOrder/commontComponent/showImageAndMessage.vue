<template>
    <el-row>
        <el-col :span="3" class="first-row">
            <img :src= 'imgSrc'>
        </el-col>
        <el-col :span="18" class="message" :offset=1>
            <h2>{{h2Message}}</h2>
            <p>{{pMessage}}</p>
        </el-col>
        <el-col :span="2">
            <follow class="follow"></follow>
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
.follow{
    margin-top: 40px;
    margin-right: 10px;
}
</style>

<script>
import follow from './follow'
export default {
    props: ['imgSrc', 'h2Message', 'pMessage'],
    components: {
        follow
    }
};
</script>