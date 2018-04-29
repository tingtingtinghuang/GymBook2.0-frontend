<template>
  <div class="container">
    <el-row>
      <el-col :span="20">
        <div class="orderDetails">
          <div class="state">
            <span>可预订</span>
            <span>已预订</span>
          </div>
          <ul class="orderDetailsList">
            <li>
              <span> 场地</span>
              <strong> 南校圆二号网球场</strong>
            </li>
            <li>
              <span> 类型</span>
              <strong> 日</strong>
            </li>
            <li>
              <span> 日期</span>
              <strong> 2018年04月24日 星期二</strong>
            </li>

          </ul>

          <div class="orderImportantDetails">
            <div class="countBox">
              <span> 场次</span>
              <strong> 请选择场次</strong>
            </div>
            <p> 已选择0个场地，再次单击可取消选择</p>

            <div class="orderMoney">
              <span> 合计</span>
              <strong>￥0.00</strong>
            </div>

          </div>
          <button class="submitBtn"> 确认预定</button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .container{
    font-size: 14px;
  }
  ul,
  p,
  li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .orderDetails .state {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    border-bottom: 1px solid #ddd;
  }

  .orderDetails .state span {
    display: block;
    position: relative;
    text-indent: 20px;
  }

  .orderDetails .state span::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 5px;

  }

  .orderDetails .state span:nth-child(1):after {
    background: #81c478;
  }

  .orderDetails .state span:nth-child(2):after {
    background: #fd8a5f;
  }


  .orderDetailsList {
    padding: 10px 20px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .orderDetailsList li {
    line-height: 30px;
  }

  .orderDetailsList li span {
    padding-right: 10px;
  }

  .orderImportantDetails {
    padding: 10px 20px;
    text-align: left;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
  }

  .orderImportantDetails p {
    color: #999;
  }

  .orderImportantDetails .orderMoney {
    text-align: center;
    padding: 10px 0;
  }

  .orderImportantDetails .orderMoney strong {
    color: #e95b5c;
    font-size: 30px;
    font-weight: bold;
  }

  .submitBtn {
    width: 90%;
    height: 36px;
    line-height: 36px;
    border-radius: 5px;
    background: #e95b5c;
    border: none;
    color: #fff;
    margin: 20px 0;
  }

  /* 81c478  fd8a5f e95b5c */
</style>