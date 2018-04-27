<template>
 <el-row>
        <el-col :span="2" v-for="(o, index) in stockList" :key="o" :offset="index > 0 ? 2 : 1">
        <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px;">
            <p>{{o.weekday}}</p>
            <p>剩余<span>{{o.number}}</span></p>
        </div>
        <div>{{o.date}}</div>
        </el-card>
    </el-col>
    <el-col :span="4" :offset="20">
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
    </el-col>
 </el-row>

</template>

<script>
export default {
    data() {
        return {
            stockList: [
                {
                    weekday: "星期二",
                    number: 0,
                    date: new Date()
                },
                {
                    weekday: "星期三",
                    number: 2,
                    date: new Date()
                }
            ]
        };
    }
};
</script>