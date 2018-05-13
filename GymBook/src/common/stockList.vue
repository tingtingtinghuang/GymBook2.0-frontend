<template>
    <div class="container">
        <ul>
            <li class="card" v-for="(store ,index) in storeList" :key="store.id" :class="{active: activeIndex === index}" @click="toggle(index,store)">
                <div class="week">
                    <span >{{store.weekday}}</span>
                </div>
                 <div class="stock">
                     <span >剩余{{store.number}}</span>
                </div>
                <div class="date" :class="{activeDate: activeIndex === index}">{{store.date}}</div>
            </li>
        </ul>

        <div class="box">
            <el-date-picker
                type="date"
                class="storeData"
                placeholder="库存日历"
                >
            </el-date-picker>
        </div>
    </div>

</template>



<script>
export default {
    data() {
        return {
            activeIndex: 0,
            storeList: [
                {
                    id: 1,
                    weekday: "星期二",
                    number: 0,
                    date: '2018-5-1',
                },
                {
                    id: 2,
                    weekday: "星期三",
                    number: 2,
                    date:'2018-5-2',
                }
            ],
            addClass:"",
            changerBorder: 0
        };
    },
    beforeMount: function() {
      this.$emit('sessionDateChange', this.getDateString(this.storeList[0]));
    },
    methods:{
       toggle(index, store) {
            this.activeIndex = index;
            this.$emit('sessionDateChange', this.getDateString(store));
       },
       getDateString(store) {
         return store.date + " " + store.weekday;
       }
    }
};
</script>
<style lang="scss" scoped>
@mixin clearFloat {
    content:"";
    display:block;
    clear:both;
}
.container{
    font-size: 14px;
    position: relative;
    overflow:hidden;
    height: 74px;
    margin-top: 20px;
    ul{
        margin:0;
        padding:0;
    }
    .box{
        position: absolute;
        top:20px;
        right:30px;
    }
}

.card{
    width: 113px;
    height: 72px;
    text-align: center;
    margin: 0 5px;
    border-radius: 5px;
    border: 1px solid #999;
    list-style:none;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;

    .week{
        color: #818181;
        height: 18px;
        padding: 6px 0;
    }
    .stock{
        color: orange;
        height: 20px;
        line-height: 20px;
        padding-bottom: 4px;
    }
    .date{
        background-color: #e6e6e6;
        color: #818181;
        line-height: 20px;
    }
    .activeDate{
            background-color: orange;
            color: #fff;

    }
}
.active{
        border: 1px solid orange;
}


</style>
