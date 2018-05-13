<template>
        <el-select v-model="value4" clearable :placeholder="title" size="mini">
            <el-option v-for="(item) in options" :key="item.value"  :value="item.value" :label="item.label">
            </el-option>
        </el-select>
</template>
<script>
    export default{
        components:{
        },
        props:[ "title", "options"],

        data(){
            return{
                value4:''
            }
        }
    }
</script>
