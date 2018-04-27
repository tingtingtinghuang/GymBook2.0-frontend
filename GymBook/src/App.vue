<template>
  <div id="app">
    <navigation/>
    <div class="main-container">
      <el-breadcrumb 
        v-if="$route.name != 'Homepage'"
        class="breadcrumb" 
        separator-class="el-icon-arrow-right">
        <el-breadcrumb-item 
          v-for="(breadcrumb,index) in getBreadCrumb"
          :key="index"
          :to="breadcrumb.path">
          {{breadcrumb.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </div>
  </div>
</template>

<script>
import navigation from './components/public/navigation'

export default {
  name: 'app',
  data(){
    return {
      routes: [
        { label : '首页', path: '/' },
        { label : '预定中心', path: '/reserve' },
        { label : '场馆简介', path: '/introduction' }
      ]
    }
  },
  components: {
    navigation
  },
  computed: {
    getBreadCrumb(){
      let breadcrumb = []
      let route = this.$route.path
      this.routes.forEach((obj) => {
        if(route.includes(obj.path)){
          breadcrumb.push(obj);
        }
      })
      return breadcrumb;
    }
  }
}
</script>
