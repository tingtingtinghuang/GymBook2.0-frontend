<template>
  <div class="container">
        <el-row>
            <el-col :span="24">
                <Breadcrumb></Breadcrumb>
            </el-col>
        </el-row>
  </div>
</template>

<script>
import Breadcrumb from './commontComponent/Breadcrumb.vue'
export default {
  components:{
      Breadcrumb
  }
}
</script>
