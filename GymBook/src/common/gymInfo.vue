// 预定详情中的体育馆信息
<template>
    <div class="container">
        <img :src='imgSrc'>
        <dl>
            <dt>
                <h1>{{title}}</h1>
            </dt>
            <dd>{{info}}</dd>
        </dl>
        <el-button type="default" icon="el-icon-star-off" @click="toggleCare" v-if="follow === false">关注</el-button>
        <el-button type="default" @click="toggleCare" v-if="follow === true">取消关注</el-button>
    </div>
</template>


<script>
// import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    data(){
      return{
         follow : false
      }
    },
    // computed: {
    //     mapGetters(['careId'])
    // },
    props: ['imgSrc', 'title', 'info'],
    mounted:function(){
       console.log(this.imgSrc)
    },
    methods: {
        toggleCare() {
          this.follow = !this.follow
        }
    }
};
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  img {
    width: 90px;
    height: 90px;
    float: left;
  }
  dl {
    margin-left: 110px;
    dt {
      color: #0b4b77;
      // font-weight: 400;
      padding-bottom: 2px;
      font-size: 18px;
    }
    dd {
      margin: 0;
      font-size: 14px;
    }
  }
  .btn {
    position: absolute;
    top: 3px;
    right: 3px;
  }
}
</style>
