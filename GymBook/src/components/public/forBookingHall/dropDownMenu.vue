<template>
    <div id="menu-container">
        <el-dropdown size="small" split-button type="primary" placement="bottom-start" trigger="click">
            {{ title }}
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(option,index) in options" :key="index">{{ option }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default{
        components:{

        },
        props:[ "title", "options"],

        data(){
            return{

            }
        }
    }
</script>