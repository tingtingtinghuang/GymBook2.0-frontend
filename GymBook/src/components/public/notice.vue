<template>
  <div class="notice">
    <div class="header">
      <i class="fas fa-bullhorn"></i>
      <p class="title">通知公告</p>
    </div>
    <div class="body">
      <a class="item" href="#" v-for="n in 10">
        <p class="title"><i class="el-icon-arrow-right"></i>《中山大学》</p>
        <p class="date">2018-03-15</p>
      </a>
    </div>
    <div class="footer">
      <a href="#">更多>>></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
