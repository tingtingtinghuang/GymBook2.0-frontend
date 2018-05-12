<template>
    <div id="notice-container">
        <slot name="head" class="head"> </slot>
        <div class="body">
            <ul>
                <li v-for="(item, index) in noticeArr" :key="index" @click="home_newsDetail(item,index)">
                    <i class="el-icon-arrow-right"> </i>
                    <!--场馆列表该字段是content,其他列表为title-->
                    <span class="title">{{ item.content || item.title }}</span>
                    <div class="useTime" v-show="usetime">
                        <span class="start">{{ item.startTime }}</span>
                        <span>---></span>
                        <span class="end">{{ item.endTime }}</span>
                    </div>
                    <span class="reserve" v-show="reserve" @click = 'fieldReserve(item)'>预</span>
                    <span class="rest" v-show="rest">剩余{{item.remainingTime}}</span>
                    <span class="date" v-show="date">{{ item.createdAt }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        components:{
        },
// 要是显示的场馆信息，则不显示日期
        props:{
            noticeArr:"",
            date:{
                default:true
            },
            usetime:{
                default:false
            },
            reserve:{
                default:false
            },
            rest:{
                default:false
            }
        },
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            home_newsDetail(){

            },
            fieldReserve(item,index){
                window.location.href = `/${item.id}`
            }
        }
    }

</script>
<style lang="scss">
    #notice-container{
        width:97%;
        margin:5px auto 15px auto;
        height:240px;
        border:solid 1px #ccc;
        .body {
            ul {
                margin: 0 auto;
                width:97%;
                height:200px;
                padding:2px 10px;
                overflow-y: auto;
                .blackStyle{
                    color:#000 !important;
                }
                li{
                    margin: 1px auto;
                    font-size: 14px;
                    padding: 4px;
                    list-style: none;
                    border-bottom: dashed 1px #ccc;
                    text-align: left;
                    color:#069;
                    &:hover {
                        background: #ccc;
                        color:#000;
                        cursor: pointer;
                    }
                    .useTime{
                        display:inline-block;
                    }
                    span.title{
                        display:inline-block;
                        width:55%;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                    .date {
                        float: right;
                    }
                    .useTime{
                        margin-right:10px;
                    }
                    .reserve{
                        display:inline-block;
                        margin-right:20px;
                        text-align:center;
                        width:30px;
                        height:20px;
                        border-radius:6px;
                        color:#fff;
                        background:rgb(0, 51, 102);
                         &:hover{
                               cursor:pointer;
                         }
                     }
                    .rest{
                        float:right;
                        color:#f93;
                    }
                }
            }
        }
    }

</style>
