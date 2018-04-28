<template>
  <div>
    <div>
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="green_bg">
      <div for="" class="title">中央身份验证服务(CAS)</div>
      <div class="login_input">
        <div class="login_user">NetID(网络身份标识)：</div>
        <input type="text" placeholder="请输入账号">
        <div class="login_password">密  码：</div>
        <input type="text" placeholder="请输入密码">
        <button>登录</button>
        <p>出于安全考虑，一旦您访问过那些需要提供mi密码验证的应用时，请操作完成之后退出并<a href="">关闭</a>浏览器</p>

      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped type="text/css">
  $greenColor: #005824;
  $lightGreenColor:#007731;
  $whiteColor:#FFF;
  $width:100%;
  $height:240px;

  /*@mixin verticalCenter($height) {*/
    /*height: $height;*/
    /*line-height: $height;*/
  /*}*/

  *{
    margin: 0;
    padding:0;
    font-size:16px;
  }
  .green_bg {
    height:$height;
    width:$width;
    background-color:$greenColor;

    .title {
      color: $whiteColor;
      font-weight: bold;
      font-size: 28px;
      text-align: left;
      padding: 10px 0 0 30%;
      /*padding-left: 30%;*/
    }
    .login_input {
      border: 4px solid #72BA64;
      width: 40%;
      margin-top: 20px;
      margin-left: 30%;
      background-color: $whiteColor;

      div {
        margin-top: 20px;
        /*background-color: aquamarine;*/
        padding-left: 10%;
        text-align: left;
      }

      .login_user {
        /*padding-top: 30px;*/
      }

      input {
        margin-top: 10px;
        margin-left: 10%;
        border: 1px solid #ccc;
        padding: 10px 0px;
        border-radius: 3px;
        padding-left:5px;
        display: block;
        /*background-color: aqua;*/
        width: 80%;
      }

      button {
        margin-top: 30px;
        background-color: #A4D29B;
        width: 80%;
        height: 50px;
        color: white;
        border-radius: 4px;
      }
      p {

        margin: 20px 10% 30px 10%;
        padding: 10px;
        text-align: left;
      }
    }
  }

</style>
