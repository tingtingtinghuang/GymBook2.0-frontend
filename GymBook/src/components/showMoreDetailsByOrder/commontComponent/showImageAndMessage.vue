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
            <i>icon</i>
            <el-button>关注</el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: ['imgSrc','h2Message','pMessage'],
};
</script>