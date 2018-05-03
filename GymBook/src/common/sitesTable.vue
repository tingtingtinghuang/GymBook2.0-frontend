
<template>
  <div>
      <el-row>
        <el-col :span="19">
            <el-table :data="tableData3" border max-height="500" style="width: 100%">

                <el-table-column fixed label="场次" width="100" align="center">
                    <template slot-scope="scope">
                        <span>￥{{ scope.row.money }}</span>
                        <p>
                            <i class="el-icon-time" style="margin-right: 10px"></i>{{ scope.row.time }}
                        </p>
                    </template>
                </el-table-column>

                <el-table-column align="center" v-for="{ prop, label } in colConfigs" :key="prop" :prop="prop" :label="label" width="120">
                    <template slot-scope="scope">
                    <div class="showIsEmpty" :class="{no:  scope.row[label]===0 ?false:true }">
                       
                    </div>
                    </template>
                </el-table-column>
                </el-table>
        </el-col>
        <el-col :span="5">
            <div class="container">
                <div class="orderDetails">
                <div class="state">
                    <span>可预订</span>
                    <span>已预订</span>
                </div>
                <ul class="orderDetailsList">
                    <li>
                    <span> 场地</span>
                    <span> {{title}}</span>
                    </li>
                    <li>
                    <span> 类型</span>
                    <span> 日</span>
                    </li>
                    <li>
                    <span> 日期</span>
                    <span> {{orderData.date}}</span>
                    </li>

                </ul>

                <div class="orderImportantDetails">
                    <div class="countBox">
                    <span> 场次</span>
                    <span> {{orderData.session}}</span>
                    </div>
                    <p> 已选择{{orderData.number}}个场地，再次单击可取消选择</p>

                    <div class="orderMoney">
                    <span> 合计</span>
                    <span>￥{{orderData.price}}</span>
                    </div>

                </div>
                <button class="submitBtn"> 确认预定</button>
        </div>
    </div>
        </el-col>
      </el-row>
    
    
  </div>

</template>


<script>

  export default {
    data() {
      return {

        ajaxData: [{
          time: '05:00',
          money: 15,
          isHaveEnd: [0, 0, 0, 1, 0, 0, 0, 0, 0]
        }, {
          time: '05:00',
          money: 15,
          isHaveEnd: [1, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          time: '05:00',
          money: 15,
          isHaveEnd: [0, 1, 0, 0, 0, 0, 0, 0, 0]
        }, {
          time: '05:00',
          money: 15,
          isHaveEnd: [0, 1, 0, 0, 0, 0, 0, 0, 0]
        }, {
          time: '05:00',
          money: 15,
          isHaveEnd: [0, 1, 0, 0, 0, 0, 0, 0, 0]
        }],
        orderData:{
            date:'',//日期
            session:'请选择场次',//场次
            price:'0.00',
            number:0//选择的场次个数
        }
      }
    },
    props:['title'],
    computed: {
      tableData3: function () {
        return this.ajaxData.map(item => {
          let data = {}
          item.isHaveEnd.forEach((element, index) => {
            data[index + 1] = element
          });

          return {
            ...data,
            time: item.time,
            money: item.money
          }

        })
      },
      colConfigs: function () {
        return this.ajaxData[0].isHaveEnd.map((item, index) => {
          return {
            prop: String(index + 1),
            label: String(index + 1)
          }
        })
      }
    }
  }
</script>

<style scoped>

  .showIsEmpty {
    width: 100px;
    height:80px;
    background: green;
    color: #000;
    background: url('../assets/images/reservation_true.png') no-repeat center center;
    background-size: 80px 50px;
  }

  .showIsEmpty.no {
    background: url('../assets/images/reservation_false.png') no-repeat center center;
    background-size: 80px 50px;
  }

    .container {
    font-size: 14px;
    text-align: center;
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

</style>