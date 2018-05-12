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
        <el-button class="btn" type="default" @click="focusChange()">
          <i class="el-icon-star-off" v-if="focusFlag == false"></i>
          {{focusFlag ? "取消关注": "关注"}}
        </el-button>
    </div>
</template>


<script>
// import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    data(){
      return{
         focusFlag : false
      }
    },
    // computed: {
    //     mapGetters(['careId'])
    // },
    props:  ['gymId','imgSrc', 'title', 'info','like'],
    mounted:function(){
       console.log(this.imgSrc)
    },
    methods: {
      focusState () {
        this.like.includes(this.gymId)?this.focusFlag=true:this.focusFlag=false;
      },
      focusChange () {
        if(this.focusFlag){
            let i = this.like.indexOf(this.gymId)
            this.like.splice(i,1)
            this.focusFlag = false
        }else{
            this.like.push(this.gymId)
            this.focusFlag = true
        }
        this.$store.dispatch('changeUserLike',this.like)//修改用户的关注信息
        console.log(this.$store.getters.getUserLike.like)
      }
    },
    mounted:function(){
       this.focusState();
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
