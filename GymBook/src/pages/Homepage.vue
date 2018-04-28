<template>
  <div>
    <campusBlock/>
    <el-row :gutter="20">
      <el-col :span="12"><notice/></el-col>
      <el-col :span="12"><notice/></el-col>
    </el-row>
  </div>
</template>

<script>
import notice from '../components/public/notice'
import campusBlock from '../components/public/campusBlock'
export default {
  components: {
    notice,
    campusBlock
  }
}
</script>

<style>

</style>
