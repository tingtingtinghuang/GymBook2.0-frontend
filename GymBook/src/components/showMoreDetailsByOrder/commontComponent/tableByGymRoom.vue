<template>
  <div class="">
    <el-table :data="tableData3" border max-height="500" style="width: 100%">

      <el-table-column fixed label="场次" width="150" align="center">
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
            <!-- {{ scope.row[label] }}   -->
          </div>
        </template>
      </el-table-column>
    </el-table>
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
        }]

      }
    },
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

<style>
  .showIsEmpty {
    width: 100px;
    height:80px;
    background: green;
    color: #000;
    background: url('./images/reservation_true.png') no-repeat center center;
    background-size: 80px 50px;
  }

  .showIsEmpty.no {
    background: url('./images/reservation_false.png') no-repeat center center;
    background-size: 80px 50px;
  }
</style>