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
        <el-button type="default" icon="heart" class="el-icon-start-off" @click="toggleCare">关注</el-button>
    </div>
</template>


<script>
// import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    // computed: {
    //     mapGetters(['careId'])
    // },
    props: ['imgSrc', 'title', 'info'],
    mounted:function(){
       console.log(this.imgSrc)
    },
    methods: {
        toggleCare(id) {
            if (this.id === 1) {
                this.id = 0
            }else {
                this.id = 1
            }
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