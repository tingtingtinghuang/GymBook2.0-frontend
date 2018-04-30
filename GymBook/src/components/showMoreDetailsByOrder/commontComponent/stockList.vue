<template>
 <el-row class="container">
    <el-col :span="20">
        <el-row>
            <el-col :span="3"  v-for="(store, index) in storeList" :store="store" :key="store.id" :offset="index > 0 ? 1 : 1">
                <el-card :body-style="{ padding: '0px' }">
                    <div v-on:click="toggleClass(index)" :class="{active:addClass === index}">
                        <div style="padding: 5px;">
                            <p class="week">{{store.weekday}}</p>
                            <p class="showOut">剩余<span>{{store.number}}</span></p>
                        </div>
                        <div class="date">{{store.date}}</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-col>
    <el-col :span="4">
        <div class="box">
            <el-date-picker
                type="date"
                class="storeData" 
                placeholder="库存日历"
                >
            </el-date-picker>
        </div>
    </el-col>
 </el-row>
</template>

<style>
.container{
    line-height: 12px;
}
.showOut{
    color:yellowgreen;
}
.showOut>span{
    padding: 2px;
}
.date{
    line-height:12px;
    background: grey;
}
.active{
    border: 2px solid yellow;
}
</style>


<script>
export default {
    data() {
        return {
            storeList: [
                {
                    id: 1,
                    weekday: "星期二",
                    number: 0,
                    date: new Date(),
                },
                {
                    id: 2,
                    weekday: "星期三",
                    number: 2,
                    date: new Date(),
                }
            ],
            addClass:""
        };
    },
    methods:{
        toggleClass:function(index){
            this.addClass = index
            console.log(this.addClass)
        }
    }
};
</script>