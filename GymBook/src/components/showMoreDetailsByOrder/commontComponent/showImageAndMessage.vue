<template>
    <el-row>
        <el-col :span="2">
            <img :src= 'imgSrc'>
        </el-col>
        <el-col :span="20">
            <h2>{{h2Message}}</h2>
            <p>{{pMessage}}</p>
        </el-col>
        <el-col :span="2">
            <follow></follow>
        </el-col>
    </el-row>
</template>
<style>
img{
    width: 50px;
    height:50px;
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