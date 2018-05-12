<template>
    <div>
         <div>
            <el-row class='row'>
                <el-col :span="5">
                    <el-input v-model="searchInput" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button class='btn' @click='filter'>默认按钮</el-button>
                </el-col>
                
            </el-row>
            <el-row class='row'>
                <el-col :span="2" class='col-5'>预定类型</el-col>
                <el-col :span="1" :class="{'active': activeIndex1===0,'col-5':true}" ><span @click='activeIndex1=0'>全部</span></el-col>
                <el-col :span="1" :class="{'active': activeIndex1===1,'col-5':true}" ><span @click='activeIndex1=1'>场地</span></el-col>
            </el-row>
            <el-row class='row' >
                <el-col :span="2" class='col-5'>所属校区</el-col>
                <el-col :span="1" :class="{'active': activeIndex2===0,'col-5':true}"><span @click='changeActive(0)'>全部</span></el-col>
                <el-col :span="1" :class="{'active': activeIndex2===1,'col-5':true}" ><span @click='changeActive(1)'>南校区</span></el-col>
                <el-col :span="1" :class="{'active': activeIndex2===2,'col-5':true}" ><span @click='changeActive(2)'>北校区</span></el-col>
                <el-col :span="1" :class="{'active': activeIndex2===3,'col-5':true}" ><span @click='changeActive(3)'>东校区</span></el-col>
                <el-col :span="1" :class="{'active': activeIndex2===4,'col-5':true}" ><span @click='changeActive(4)'>珠海校区</span></el-col>
            </el-row>
        </div>
        <Collect :gymList="currentGymList" :directionArray='directionArray'/>
    </div>
   
</template>
<script>
import Collect from './collect';
import { mapActions, mapState } from 'vuex';

    export default {
       
        data() {
            return {
                searchInput:'',
                activeIndex1:0,
                activeIndex2:0,
                currentGymList:{}
               
            }
        },
        mounted:function() {
            console.log(this.currentGymList);
        },
        components:{
            Collect
        },
        computed: {
            ...mapState({
                // 注意这里的demo和模块名相对应
                gymList: ({
                  bookCenter
                }) => bookCenter.gymList
            }),
            directionArray:function(){
                let arr=[];
                for(let key in this.gymList){
                    arr.push(key);
                }
                return arr;
            }
        },
        beforeMount() {
            this.getGymList().then(() => {
                this.currentGymList=JSON.parse(JSON.stringify(this.gymList));
            })
        },
        methods: {
            ...mapActions([
                'getGymList'
            ]),
            changeActive:function(index){
                this.activeIndex2=index;
                switch(index){
                    case 1:
                        this.currentGymList={S:this.gymList.S};
                        break;
                    case 2:
                        this.currentGymList={B:this.gymList.B};
                        break;
                   
                    case 3:
                        this.currentGymList={E:this.gymList.E};
                        break;
                   
                    case 4:
                        this.currentGymList={Z:this.gymList.Z};
                        break;
                    
                    default:
                        this.currentGymList=this.gymList;
                    break;
                } 
            },
            filter:function(){
                if(this.searchInput.length===0){
                    this.currentGymList=this.gymList;
                    return ;
                } 
                let res={};
                for(let area in this.currentGymList){
                    
                    let isEmpty=true;
                    for(let gym of this.currentGymList[area]){
                        
                        if(gym.title.indexOf(this.searchInput)!==-1){
                            if(isEmpty){
                                isEmpty=false;
                                res[area]=[];
                            }
                            res[area].push(gym);

                        }
                    }
                }
                // console.log(res);
                this.currentGymList=res;
            }
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
    text-align: center;
    color:$deep-blue;
    line-height: 2em;
    cursor: pointer;
}
.active{
    background-color: $deep-blue;
    color:$white;
}
</style>