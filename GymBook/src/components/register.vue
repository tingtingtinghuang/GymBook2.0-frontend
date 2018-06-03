<template>
  <div>
    <div class="green_bg">
      <div class="title">中央身份验证服务(CAS)</div>
      <div class="login_input">
        <div class="login_user">NetID(网络身份标识)：</div>
        <span :class='{rightTip:accountTip,errTip:!accountTip}' v-html='tipText' ></span>
        <input type="text" placeholder="请输入账号" v-model=account @blur='checkUser()'>
        <label class="login_password" for="pwd">密  码：</label>
        <input type="text" placeholder="请输入密码" id='pwd' v-model=pwd>
        <label class="login_password" for="confirmPwd">确认密码：</label>
        <input type="text" placeholder="确认密码" id='confirmPwd' v-model=confirmPwd>
        <div class='roleTip' v-show='roleCtrl'>权限角色不能为空或全选</div>
        <el-checkbox v-model="oridinary" style="display:inline-block">普通用户</el-checkbox>
        <el-checkbox v-model="manager" style="display:inline-block">管理员</el-checkbox>
        <el-button type="success" :plain="true"  @click='register()'>注册</el-button>
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
      pwd: "",
      confirmPwd: "",
      accountTip: false,
      tipText: "",
      role: "",
      oridinary: true,
      manager: false,
      roleCtrl: false
    };
  },
  props: [],
  mounted: function() {},
  methods: {
    //验证用户名
    checkUser() {
      axios.post("/checkuser", { account: this.account }).then(res => {
        if ((res.data.code = 1)) {
          this.accountTip = true;
          this.tipText = "用户名可用";
        } else {
          this.accountTip = false;
          this.tipText = "用户名被占用";
        }
      });
    },
    register() {
      // 角色选项是否合理
      if (
        (this.oridinary && this.manager) ||
        (!this.oridinary && !this.manager)
      ) {
        this.roleCtrl = true;
      } else {
        this.role = this.oridinary ? 0 : "";
        this.role = this.manager ? 1 : "";
        // 用户名是否可用
        if (this.accountTip) {
          axios
            .post("/user", {
              account: this.account,
              pwd: this.pwd,
              role: this.role
            })
            .then(res => {
              if (res.data.code === 1) {
                // 点击注册toast
                this.$message({
                  message: "注册成功，即将跳转到登录页...",
                  center: true,
                  onClose: function() {
                    window.location.href = "/login";
                  }
                });
              }
            });
        }
      }
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

* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.green_bg {
  height: $height;
  width: $width;
  background-color: $greenColor;

  .title {
    color: $whiteColor;
    font-weight: bold;
    font-size: 28px;
    text-align: left;
    padding: 10px 0 0 30%;
    /*padding-left: 30%;*/
  }
  .login_input {
    border: 4px solid #72ba64;
    width: 40%;
    margin-top: 20px;
    margin-left: 30%;
    background-color: $whiteColor;

    label {
      display: block;
      margin-top: 20px;
      /*background-color: aquamarine;*/
      padding-left: 10%;
      text-align: left;
    }

    .login_user {
      padding-left: 10%;
      margin-top: 15px;
    }
    .rightTip {
      display: block;
      padding-left: 10%;
      margin-top: 15px;
      color: #060;
    }
    .errTip {
      display: block;
      padding-left: 10%;
      margin-top: 15px;
      color: red;
    }
    .roleTip {
      display: block;
      padding-left: 10%;
      margin-top: 15px;
      color: red;
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
    .el-check-box {
      display: inline-block !important;
    }

    button {
      margin: 30px auto;
      display: block;
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
