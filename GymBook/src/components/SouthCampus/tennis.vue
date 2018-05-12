<template>
    <div>
        <Navigation/>
        <div class="container">
            <el-row class="first-line">
                <el-col :span="24">
                    <Breadcrumb></Breadcrumb>
                </el-col>
            </el-row>
            <el-row class="seconed-line">
                <el-col :span="24">
                     <gymInfo :like='like' :gymId='gymId' :imgSrc='imgSrc' :title='title' :info='info'  class="imgBox"/> 
                </el-col>
            </el-row>
            <el-row class="third-line">
                <el-col :span="24">
                    <tabs>
                        <tab name="预定" selected="true">
                            <stockList v-on:number="listenToNumber" />
                            <el-row class="fourth-line">
                                <sitesTable :title='title' ></sitesTable>
                            </el-row>
                        </tab>
                        <tab name="场馆介绍"></tab>
                    </tabs>
                </el-col>
            </el-row>
        </div>

    </div>

</template>


<script>
import Breadcrumb from '../../common/breadcrumb'
import gymInfo from '../../common/gymInfo'
import stockList from '../../common/stockList.vue'
import sitesTable from '../../common/sitesTable'
import imgSrc from './../../assets/100001.jpg'
import tabs from '../../common/tabs/tabs'
import tab from '../../common/tabs/tab'
import Navigation from '../../common/navigation'

export default {
  data() {
    return {
      imgSrc: imgSrc,
      title: '南校园一号网球场',
      info:
        '一号网球场共有4片场地，开放时间是：8：30-22：30，平常收费时段是：周一至周五18：30至22：30，周六、周日、节假日及寒暑假全天收费',
      gymId:2,
      like:this.$store.getters.getUserLike.like//取得该用户的关注信息
    
    }
   
  },
  methods: {
      listenToNumber(n) {
          this.storeNumber = n
         console.log(this.storeNumber)
      }
  },
  components: {
    Breadcrumb,
    gymInfo,
    stockList,
    sitesTable,
    tabs,
    tab,
    Navigation
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0;
  width: 1024px;
}
.first-line {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #999;
}
.seconed-line {
  height: 150px;
}
.fourth-line {
  margin-top: 40px;
}
.imgBox > img {
  width: 100%;
}
</style>