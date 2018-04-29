<template>
 <el-row class="container">
    <el-col :span="2" v-for="(store, index) in storeList" :store="store" :key="store.id" :offset="index > 0 ? 1 : 1">
        <el-card  :body-style="{ padding: '0px' }">
            <div v-on:click="toggleClass(store)">
                <div style="padding: 5px;">
                    <p class="week">{{store.weekday}}</p>
                    <p class="showOut">剩余<span>{{store.number}}</span></p>
                </div>
                <div class="date">{{store.date}}</div>
            </div>
        </el-card>
    </el-col>
    <el-col :span="4" :offset=14>
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
    line-height: 7px;
}
.showOut{
    color:yellowgreen;
}
.showOut>span{
    padding: 2px;
}
.date{
    line-height:14px;
    background: grey;
}
.active{
    border: 3px solid rgb(218, 218, 104);
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
                    isActive:false
                },
                {
                    id: 2,
                    weekday: "星期三",
                    number: 2,
                    date: new Date(),
                    isActive:false
                }
            ]
        };
    },
    methods: {
        toggleClass: function({id}) {
            Vue.set(this.storeList, id, true)
            console.log(id)
        }
    }
};
</script>