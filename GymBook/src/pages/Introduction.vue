<template>
  <div>
    <el-row>
      <el-col :span="5"><sidebar/></el-col>
      <el-col :span="19"><newsview/></el-col>
    </el-row>
  </div>
</template>

<script>
import sidebar from '../components/public/slideLeft'
import newsview from '../components/public/newsView'
export default {
  components:{
    sidebar,
    newsview
  }
}
</script>

<style>

</style>
