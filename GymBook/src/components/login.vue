<template>
  <div>
    <div class="green_bg">
      <i class='el-icon-arrow-left' @click='back()'>返回首页</i>
      <div class="title">中央身份验证服务(CAS)</div>
      <div class="login_input">
          <label class="login_user" for='account'>NetID(网络身份标识)：</label>
          <input id='account' type="text" placeholder="请输入账号" v-model='account' required >
          <label class="login_pwd" for='pwd'>密  码：</label>
          <input id='pwd' type="text" placeholder="请输入密码" v-model='pwd' required >
          <el-button type="success" :plain="true"  @click='login()'>登录</el-button>
        <p>出于安全考虑，一旦您访问过那些需要提供密码验证的应用时，请操作完成之后退出并<a href="">关闭</a>浏览器</p>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      pwd: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    login() {
      axios
        .post("http://39.108.179.140:8991/session", {
          account: this.account,
          password: this.pwd
        })
        .then(res => {
          if (res.data.code === 1) {
            this.$router.push("/");
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
$greenColor: #005824;
$lightGreenColor: #007731;
$whiteColor: #fff;
$width: 100%;
$height: 240px;
// modal动画
@keyframes login-modal-animation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.green_bg {
  height: $height;
  width: $width;
  padding: 5px;
  background-color: $greenColor;
  .el-icon-arrow-left {
    cursor: pointer;
    color: #fff;
  }
  .title {
    color: $whiteColor;
    font-weight: bold;
    font-size: 28px;
    text-align: left;
    padding: 10px 0 0 30%;
    /*padding-left: 30%;*/
  }
  .login_input {
    animation: login-modal-animation 1s linear;
    border: 4px solid #72ba64;
    width: 40%;
    margin-top: 20px;
    margin-left: 30%;
    background-color: $whiteColor;

    .login_user,
    .login_pwd {
      margin-top: 20px;
      display: block;
      padding-left: 10%;
      text-align: left;
    }
    input {
      margin-top: 10px;
      margin-left: 10%;
      border: 1px solid #ccc;
      padding: 10px 0px;
      border-radius: 3px;
      padding-left: 5px;
      display: block;
      /*background-color: aqua;*/
      width: 80%;
    }

    button {
      display: block;
      margin: 30px auto;
      background-color: #060;
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
