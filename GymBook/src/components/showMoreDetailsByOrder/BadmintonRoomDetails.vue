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
                <el-tabs v-model="activeName">
                    <el-tab-pane label="预订" name="first">
                        <el-row>
                            <el-col :span="20">
                                <el-card class="box-card">
                                    <div></div>
                                    <div></div>
                                </el-card>
                            </el-col>
                            <el-col :span="4">
                                    <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="20">
                                <table>
                                </table>
                            </el-col>
                            <el-col :span="4">
                                <card/>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="场馆介绍" name="second">配置管理</el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Breadcrumb from './commontComponent/Breadcrumb.vue'
    import showImageAndMessage from './commontComponent/showImageAndMessage.vue'
    import card from './commontComponent/card.vue'
    export default {
        data(){
            return{
                imgSrc:'',
                h2Message:'南校园英东羽毛球场',
                pMessage:'中山大学英东体育馆'
            }
        },
        components:{
            Breadcrumb,
            showImageAndMessage,
            card,
        }
    }
</script>