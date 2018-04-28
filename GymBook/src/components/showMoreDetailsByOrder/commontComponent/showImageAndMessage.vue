<template>
    <el-row>
        <el-col :span="2">
            <img :src= 'imgSrc'>
        </el-col>
        <el-col :span="19" class="message" offset="1">
            <h2>{{h2Message}}</h2>
            <p>{{pMessage}}</p>
        </el-col>
        <el-col :span="2">
            <follow class="follow"></follow>
        </el-col>
    </el-row>
</template>
<style>
img{
    width: 100%;
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
    props: ['imgSrc','h2Message','pMessage'],
    components:{
        follow
    }
};
</script>