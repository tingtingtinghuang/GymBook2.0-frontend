<template>
  <div class="imgBox" id="imgBox">
    <el-row>
      <el-col :span="24">
        <img :src= 'imgSrc1' class="big-img">
      </el-col>
    </el-row>
    <el-row class="small-img-list">
      <div v-on:click="activeImg($event)" class="small-img active">
        <img :src= 'imgSrc1'>
      </div>
      <div v-on:click="activeImg($event)" class="small-img">
        <img :src= 'imgSrc2'>
      </div>
      <a v-on:click="nextImg" class="nextBtn button--info"><i class="el-icon-arrow-right"></i></a>
    </el-row>
  </div>
</template>
<script>
export default {
    props: ['imgSrc1', 'imgSrc2'],
    methods: {
      nextImg: function () {
        var activeEl = document.getElementsByClassName('active')[0];
        var nextEl = document.getElementsByClassName('active')[0].nextElementSibling;
        console.log(nextEl);
        /*给当前图片添加.active*/
        activeEl.classList.remove('active');
        nextEl.classList.add('active');
      },
      activeImg: function (event) {
        var activeEl = document.getElementsByClassName('active')[0];
        activeEl.classList.remove('active');
        var nowImg = event.currentTarget;
        console.log(nowImg);
        nowImg.classList.add('active');
      }
    }
}
</script>
<style>
.imgBox {
}
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
.imgBox a.nextBtn {
  display: inline-block;
  height: 80px;
  float: right;
  border-radius: 0;
  width: 24px;
  text-align: center;
  line-height: 80px;
}
.imgBox a.nextBtn:hover {
  background-color: rgb(166, 169, 173);
  border-color: rgb(166, 169, 173);
}
.imgBox .button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
</style>
