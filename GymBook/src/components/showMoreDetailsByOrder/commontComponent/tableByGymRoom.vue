<template>
  <div class="" style="padding-bottom:500px;">
    <el-table :data="tableData3" border style="width: 100%">

      <el-table-column fixed label="场次" width="150" align="center">
        <template slot-scope="scope">
          <span>￥{{ scope.row.money }}</span>
          <p>
            <i class="el-icon-time" style="margin-right: 10px"></i>{{ scope.row.time }}
          </p>
        </template>
      </el-table-column>

      <el-table-column align="center" v-for="{ prop, label } in colConfigs" :key="prop" :prop="prop" :label="label" width="200">
        <template slot-scope="scope">
          <div class="showIsEmpty" :class="{no:  scope.row[label]===0 ?false:true }"> {{ scope.row[label] }} </div>
        </template>
      </el-table-column>
    </el-table>

    {{tableData3}}

    <div>{{colConfigs}}</div>
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
    width: 180px;
    height: 100px;
    background: green;
    color: #000;
  }


  .showIsEmpty.no {
    background: orange;
  }
</style>