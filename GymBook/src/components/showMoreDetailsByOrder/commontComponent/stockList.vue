<template>
 <el-row>
    <el-col :span="2" v-for="(store, index) in storeList" :store="store" :key="store.id" :offset="index > 0 ? 1 : 1">
        <el-card  :body-style="{ padding: '0px' }">
            <div v-on:click="toggleClass" :class="activeClass">
                <div style="padding: 14px;">
                    <p>{{store.weekday}}</p>
                    <p class="showOut">剩余<span>{{store.number}}</span></p>
                </div>
                <div class="date">{{store.date}}</div>
            </div>
        </el-card>
    </el-col>
    <el-col :span="4" :offset=20>
            <el-date-picker
                type="date"
                placeholder="选择日期">
            </el-date-picker>
    </el-col>
 </el-row>
</template>

<style>
.showOut{
    color:yellowgreen;
}
.showOut>span{
    padding: 2px;
}
.date{
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
                    date: new Date()
                },
                {
                    id: 2,
                    weekday: "星期三",
                    number: 2,
                    date: new Date()
                }
            ]
        };
    },
    computed: {
        activeClass: function() {
            active: this.isActive;
        }
    },
    methods: {
        toggleClass: function() {
            this.activeClass = !this.activeClass;
        }
    }
};
</script>