<template>
    <div>
         <div>
            <el-row class='row'>
                <el-col :span="5">
                    <el-input v-model="searchInput" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button class='btn'>默认按钮</el-button>
                </el-col>
                
            </el-row>
            <el-row class='row'>
            <el-col :span="2" class='col-5'>预定类型</el-col>
            <el-col :span="1" class='col-5'>全部</el-col>
            <el-col :span="1" class='col-5'>场地</el-col>
            </el-row>
            <el-row class='row' >
            <el-col :span="2" class='col-5'>所属校区</el-col>
            <el-col :span="1" class='col-5'>全部</el-col>
            <el-col :span="1" class='col-5'>南校区</el-col>
            <el-col :span="1" class='col-5'>北校区</el-col>
            <el-col :span="1" class='col-5'>东校区</el-col>
            <el-col :span="1" class='col-5'>珠海校区</el-col>
            </el-row>
        </div>
        <Collect :gymList="gymList"/>
    </div>
   
</template>
<script>
import Collect from './collect';
    export default {
       
        data() {
            return {
                searchInput:'',
                
                gymList:{
                    "B": [
                        {
                            "id": 1,
                            "title": "波动球馆",
                            "description": "111",
                            "html": "11",
                            "addr": "11",
                            "rank": 11,
                            "time_type": 11,
                            "status": 11,
                            "logo": "11",
                            "price": "11",
                            "limit_num": 11,
                            "buy_limit_num": 11,
                            "open_time": "11",
                            "limit_time": "11",
                            "ref_type": 1,
                            "ref_area": 1,
                            "ref_sport": 1,
                            "createdAt": "2018-04-17T21:09:52.000Z",
                            "updatedAt": "2018-05-24T21:09:56.000Z"
                        }
                    ],
                    "Y": [
                        {
                            "id": 2,
                            "title": "羽毛球馆",
                            "description": "谈恋爱的好地方",
                            "html": "12",
                            "addr": "12",
                            "rank": 12,
                            "time_type": 0,
                            "status": 12,
                            "logo": "12",
                            "price": "12",
                            "limit_num": 12,
                            "buy_limit_num": 12,
                            "open_time": "12",
                            "limit_time": "12",
                            "ref_type": 1,
                            "ref_area": 1,
                            "ref_sport": 1,
                            "createdAt": "2018-04-26T21:12:15.000Z",
                            "updatedAt": "2018-04-26T21:12:18.000Z"
                        }
                    ]
                }
            }
        },
        methods: {
            
        },
        components:{
            Collect
        }
    }

   
</script>
<style scoped lang='scss'>
@import '../../assets/styles/vars.scss';
.row{
    margin:10px 0;
   
}
.btn{
    background-color: $deep-blue;
    color:$white;
}

.col-5{
    width:5em;
}
</style>