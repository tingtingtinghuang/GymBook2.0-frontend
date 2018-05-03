// 预定详情的图片展示
<template>
  <div class="imgBox" id="imgBox">
    <el-row>
      <el-col>
        <img :src='images[activeImgIndex]' class="big-img">
      </el-col>
    </el-row>
    <el-row class="small-img-list" >
      <!-- <a v-on:click="preImg" class="Btn button--info"><i class="el-icon-arrow-left"></i></a> -->
      <div  class="small-img" v-for="(img,index) in images" v-bind:key="img" v-on:click="activeImg(index)">
        <img :src= 'img'>
      </div>
      <a v-on:click="nextImg" class="Btn button--info"><i class="el-icon-arrow-right"></i></a>
    </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return {
            activeImgIndex:0
        }
    },
    props: {
        images:Array
    },
    computed:{
        len:function(){
            return this.images.length
        }
    },
    methods: {
        preImg:function(){
            this.activeImgIndex=(this.activeImgIndex-1)>=0?(this.activeImgIndex-1):0;
            console.log(this.activeImgIndex)
        },
        nextImg: function () {
            
           this.activeImgIndex=(this.activeImgIndex+1)>=this.len?0:(this.activeImgIndex+1);
           
        },
        activeImg:function(index){
            
           this.activeImgIndex=index;
           
        }
        
    },
    mounted:function()
    {
        
    }
}
</script>

<style scoped>
.imgBox .big-img {
  width: 100%;
  height: 250px;
}
.imgBox .small-img-list {
  width: 100%;
  text-align: left;
}
.imgBox .small-img-list .small-img {
  display: inline-block;
  width: 110px;
  height: 80px;
  margin: 0 5px 0 0;
}
.imgBox .small-img-list .small-img img {
  width: inherit;
  height: inherit;
}
.imgBox .small-img-list .small-img.active {
  border: 2px solid #409EFF;
}
.imgBox a.Btn {
  display: inline-block;
  height: 80px;
  float: right;
  border-radius: 0;
  width: 24px;
  text-align: center;
  line-height: 80px;
}
.imgBox a.Btn:hover {
  background-color: rgb(166, 169, 173);
  border-color: rgb(166, 169, 173);
}
.imgBox .button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
</style>
