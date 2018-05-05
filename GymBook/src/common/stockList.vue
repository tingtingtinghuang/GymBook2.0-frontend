<template>
    <div class="container">
        <ul>
            <li class="card" v-for="(store) in storeList" :key="store.id">   
                <div class="week">
                    <span >{{store.weekday}}</span>
                </div>
                 <div class="stock">
                     <span >剩余{{store.number}}</span>
                </div>
                <div class="date">{{store.date}}</div>
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
<style lang="scss" scoped>
@mixin clearFloat {
    content:"";
    display:block; 
    clear:both;
}
.container{
    font-size: 14px;
    display: relative;
    overflow:hidden;
    height: 74px;;
    ul{
       
        position: absolute;
        left: 0;
       
    }
    .box{
        position: absolute;
        top:120px;
        right:30px;
    }
}

.card{
    width: 112px;
    height: 72px;
    text-align: center;
    margin: 0 5px;
    border-radius: 5px;
    border: 1px solid #999;
    list-style:none;
    display: inline-block;
    cursor: default;
    .active{
        border: 1px solid orange;
    }
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
        padding: 2px 0;
        .active{
            background-color: orange;
            color: #fff;
        }
    }
    

}

</style>
