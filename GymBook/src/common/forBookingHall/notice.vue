<template>
    <div id="notice-container">
        <slot name="head" class="head"> </slot>
        <div class="body">
            <ul :class="{blackStyle:'colorStyle'}">
                <li v-for="(item, index) in noticeArr" :key="index">
                    <i class="el-icon-arrow-right"> </i>
                    <span class="title">{{ item.title }}</span>
                    <div class="useTime" v-show="usetime">
                        <span class="start">{{ item.start }}</span>
                        <span>---></span>
                        <span class="end">{{ item.end }}</span>
                    </div>
                    <span class="date" v-show="date">{{ item.createdAt }}</span>
                    <slot> </slot>
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
            reserve:'',
            noticeArr:'',
            date:{
                default:true
            },
            usetime:{
                default:false
            },
            colorStyle:{
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
                }
            }
        }
    }

</style>
