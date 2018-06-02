<template>
  <div class="container">
    <el-row class="title">{{title}}</el-row>
    <el-row class="address">
      <span>场地地址：</span>{{address}}
    </el-row>
    <el-row class="desc">
      <span class="sub-title-desc">场地简介：</span>{{desc}}</el-row>
    <el-main class="order">
      <el-row class="date">
        <span class='label'>预定日期：</span>
       <span v-for="(item, index) in sessions" :class="{'box':true,'selected':dateActiveIndex===index}"
        @click="dateToggle(index)" :key="index">
        {{item.date}}
       </span>
      </el-row>
      <el-row class="sequence">
        <span class='label'>预定场次：</span>
        <span v-for="(item, index) in sessions[dateActiveIndex].timeSlot" :class="{'box':true,'selected':sessionActiveIndex===index}"
        @click="sessionToggle(index)" :key="index">
          {{item.open_time}}
       </span>
      </el-row>
      <el-row class="orderMoney">
        <span>价格：</span>
        <strong>{{money}}</strong>
        <span> 元</span>
      </el-row>
    </el-main>
    <el-footer>
      <el-row class="btns">
        <el-button class="care" type="default" @click="likeChange">
          <i :class="like ? 'el-icon-star-on' : 'el-icon-star-off'"></i>
          {{like ? "取消关注": "关注"}}
        </el-button>
        <el-button type="primary" class="reserve" @click="comfirmReserve">立即预定</el-button>
      </el-row>
    </el-footer>
  </div>
</template>


<script>
import API from '../utils/api.js'
export default {
    data() {
      return {
        dateActiveIndex: 0,
        sessionActiveIndex:0,
        // order: {
        //   money: this.money
        // },

      }
  },
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
      default: 3.00
    },
    gymId: {
      type: Number
    },
    like:{
      type:Boolean
    },
    sessions:{
      type:Array
    },
  },
  methods: {
    // like:function () {
    //   // this.like.includes(this.gymId)?this.focusFlag=true:this.focusFlag=false;
    // },
    likeChange :function() {
      // if(this.focusFlag){
      //   let i = this.like.indexOf(this.gymId)
      //   this.like.splice(i,1)
      //   this.focusFlag = false
      // }else{
      //   this.like.push(this.gymId)
      //   this.focusFlag = true
      // }
      // this.$store.dispatch('changeUserLike',this.like)//修改用户的关注信息
      // console.log(this.$store.getters.getUserLike.like)
    },
    dateToggle: function (index) {
      this.dateActiveIndex = index;
      this.sessionActiveIndex=0;
    },
    sessionToggle:function(index) {
      this.sessionActiveIndex=index;
    },
    comfirmReserve:function(){
          this.$confirm('是否确认下单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // type: 'warning'
        }).then(() => {
          this.addReserve();

        })
      },

    addReserve:function(){
      API.postReserveAPI({
        time_type:1,
        gymId:this.gymId,
        userid:10086,
        reservedDate:this.sessions.dateActiveIndex,
        buy_num:1,
        totalPrice:this.money,
      }).then(res=>{
          if(res.data.code===1) {
            const h = this.$createElement;

            this.$notify({
              title: '消息',
              message: h('i', { style: 'color: teal'}, '恭喜你，预定成功'),
              type: 'success',
              offset: 100
            });
          }
      },err=>{
        console.log(err);
      })
    },
  }
}


</script>

<style lang='scss' scoped>

.container {
    width:100% !important;
    text-align: left;
    line-height: 24px;
    font-size: 16px;
}
.title {
    color: #0b4b77;
    font-weight: 400;
    font-size: 24px;
    margin: 0 16px 0 30px;
}

.address,.desc{
    color: grey;
    background-color: #fcfcfc;
    padding: 15px;
    margin: 10px 16px 10px 30px;
}
.date,.sequence {
    padding: 15px;
    margin: 10px 16px 10px 30px;
}
.box{
    font-size: 14px;
    display: inline-block;
    color: #1a1a1a;
    border:1px solid lightgray;
    line-height: 38px;
    height: 38px;
    width:78px;
    padding-left: 19px;
    padding-right: 19px;
    margin-right: 10px;
}


.label{
  color: grey;
    float: left;
    /* width: 14%; */
    padding-top: 8px;
    /* padding-right: 1%; */
    text-align: right;
}

.orderMoney {
  border-bottom: 1px solid #ccc;
  padding: 20px;
}
.orderMoney strong {
  font-size: 40px;
  font-weight: bold;
}
.btns {
  text-align: left;
  margin:20px;
}
.selected {
  border-color: #FF8F00;
}
</style>
