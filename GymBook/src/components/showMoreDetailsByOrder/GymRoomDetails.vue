<template>
  <div class="container">
        <el-row>
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <img src="" alt="">
            </el-col>
            <el-col :span="14">

            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                 <el-tabs  type="border-card">
                    <el-tab-pane label="简介">
                        <el-row>
                            <p>{{shortMessage}}</p>
                        </el-row>
                    </el-tab-pane>
                 </el-tabs>
            </el-col>
        </el-row>
  </div>
</template>

<script>
import Breadcrumb from "./commontComponent/Breadcrumb.vue";
export default {
    data() {
        return {
            shortMessage: "定时任务补偿"
        };
    },
    components: {
        Breadcrumb
    }
};
</script>
