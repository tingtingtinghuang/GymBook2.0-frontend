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
        <span class='label'>预定日期：</span>
       <span v-for="(item, id) in sessions" class='box' :class="{selected:item.isSelected}"
        @click="dateToggle(item, id)" :key="id">
        {{item.date}}
       </span>
      </el-row>
      <el-row class="sequence">
        <span class='label'>预定场次：</span>
        <span v-for="(item, id) in sessions[dateId].timeSlot" class='box' :class="{selected:item.isSelected}"
        @click="sessionToggle(item)" :key="id">
        {{item.time}}
       </span>
      </el-row>
      <el-row class="orderMoney">
        <span>价格：</span>
        <strong>{{order.money}}</strong>
        <span> 元</span>
      </el-row>
    </el-main>
    <el-footer>
      <el-row class="btns">
        <el-button class="care" type="default" @click="focusChange()">
          <i :class="focusFlag ? 'el-icon-star-on' : 'el-icon-star-off'"></i>
          {{focusFlag ? "取消关注": "关注"}}
        </el-button>
        <el-button type="primary" class="reserve">立即预定</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>


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
      default: 3.00
    },
    gymId: {
      type: Number
    },
    like:{
      type:Array
    }
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
    },
    dateToggle: function (item, id) {
      item.isSelected = !item.isSelected;
      if (item.isSelected) {
        this.sessions.forEach((session, i) => {
          if (i === id) {
            return;
          }
          session.isSelected = false;
          session.timeSlot.forEach((slot) => {
            if (slot.isSelected)  {
              this.order.money  -= this.money;
            }
            slot.isSelected = false;
          });
        });
        this.dateId = id;
      }
    },
    sessionToggle(item) {
      item.isSelected = !item.isSelected;
      this.order.money  += this.money * (item.isSelected ? 1 : -1);
    }
  },
  data() {
    return {
      dateId: 0,
      order: {
        money: this.money
      },
      focusFlag:false,
      sessions: [
        {
          date: "2018-05-08",
          timeSlot: [
            {
              time: "08:00-12:00",
              isSelected: true
            }],
          isSelected: true
        },
        {
          date: "2018-05-09",
          timeSlot: [
            {
              time: "14:00-18:00",
              isSelected: false
            },
            {
              time: "18:00-20:00",
              isSelected: false
            }],
          isSelected: false
        }
      ]
    }
  },
  mounted:function(){
   this.focusState();
  }
}
</script>

<style scoped>

.container {
    width:100%;
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
.box.selected {
  border-color: #FF8F00;
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
}
</style>
