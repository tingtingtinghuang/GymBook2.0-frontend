<template>
  <el-container class="container">
    <el-row class="title">{{title}}</el-row>
    <el-row class="address">
      <span>场地地址：</span>{{address}}
    </el-row>
    <el-row class="desc">
      <span class="sub-title-desc">场地简介：</span>{{desc}}</el-row>
    <el-main class="order">
      <el-row class="date">
        <span>预定日期：</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-row>
      <el-row class="sequence">
        <span>预定场次：</span>
        <el-time-picker is-range="" arrow-control v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
        </el-time-picker>
      </el-row>
      <div class="panel"></div>
    </el-main>
    <el-footer>
      <div class="orderMoney">
        <span>价格：</span>
        <strong>{{money}}</strong>
        <span> 元</span>
      </div>
      <div class="btns">
        <el-button type="default" icon="el-icon-star-off" class="care">关注</el-button>
        <el-button type="primary" class="reserve">立即预定</el-button>
        <el-button type="success" class="together">约 球</el-button>
      </div>
    </el-footer>
  </el-container>
</template>
<style>
.container {
  text-align: left;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: rgb(24, 23, 107);
  padding: 5px;
}
.address {
  padding: 10px;
  background: rgb(245, 244, 244);
  margin-bottom: 10px;
}
.desc {
  padding: 10px;
  background: rgb(245, 244, 244);
}
.sub-title-desc {
  font-size: 16px;
  font-weight: bold;
}
.date {
  margin-bottom: 20px;
}
.panel {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 150px;
  width: 100%;
}
.orderMoney {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.orderMoney strong {
  font-size: 30px;
  font-weight: bold;
}
.btns {
  text-align: left;
}
</style>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    money: {
      type: Number,
      default: 3.0
    }
  },
  data() {
    return {
      value1: '',
      value5: [new Date(2016, 9, 10, 8, 0), new Date(2016, 9, 10, 22, 0)]
    }
  }
}
</script>

