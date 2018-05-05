<!--制度管理主页-->
<template>
    <div>
        <Navigation> </Navigation>
        <div id="manageRule">
            <header class="header">
                <div class="flow"><span class="flow1">首页</span> > <span class="flow2">管理制度</span></div>
            </header>
            <nav class="left">
                <ul class="nav">
                    <li>相关信息</li>
                    <!--点击后，右侧表格呈现出不同的内容-->
                    <li @click = 'showNotice()' :class="{li_active:bg}">通知公告</li>
                    <li @click = 'showRule()' :class="{li_active:!bg}">管理制度</li>
                </ul>
            </nav>
                <div class="right">
                       <input type="text" class="search-input" placeholder="输入标题关键字..."> <button class="search">搜索</button>
                    <table class="content">
                        <tr>
                            <th>标题</th>
                            <th>发布日期</th>
                            <th>浏览次数</th>
                        </tr>
                        <tr v-for="(item,index) in tableData" :key="index">
                            <td>{{ item.title }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.scan }}</td>
                        </tr>
                    </table>
                    <!--<table> </table>-->
                    <Pagination> </Pagination>
                </div>
        </div>
    </div>
</template>
<script>
    import Navigation from '../common/navigation';
    import Pagination from './forManageRule/pagination';
    export default{
        components:{
            Navigation,
            Pagination
        },
        data(){
            return{
                tableData:[],
                noticeData:[
                    {title:'通知1',date:'2018-5-5 15:29:30',scan:'318'},
                    {title:'通知2',date:'2018-5-4 15:29:30',scan:'318'},
                    {title:'通知3',date:'2018-5-3 15:29:30',scan:'318'},
                    {title:'通知4',date:'2018-5-2 15:29:30',scan:'318'},
                ],
                ruleData:[
                    {title:'运动经费登记补发通知4',date:'2018-5-5 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知5',date:'2018-5-4 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知6',date:'2018-5-3 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知4',date:'2018-5-2 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知5',date:'2018-5-2 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知6',date:'2018-5-2 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知3',date:'2018-4-17 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知2',date:'2018-3-16 15:29:30',scan:'318'},
                    {title:'运动经费登记补发通知',date:'2018-3-15 15:29:30',scan:'318'},
                    {title:'关于运动经费补登的说明',date:'2017-10-16 12:00:00',scan:'1772'},
                    {title:'关于运动经费补登的说明',date:'2017-9-16 12:00:11',scan:'1772'},
                ],
                bg:false,
            }
        },
        props:[],
        mounted(){
            this.tableData = this.ruleData;
        },
        methods:{
            showNotice(){
                this.bg = true;
                this.tableData = this.noticeData;
            },
            showRule(){
                this.bg = false;
                this.tableData = this.ruleData;
            }
        }
    }

</script>
<style lang="scss">
    *{
        margin:0;
        padding:0;
    }
    /*定义通用样式*/
    @mixin wh-common-style($w,$h){
        width:$w;
        height:$h;
    }
    @mixin font-common-style($size:12px,$color:#000,$weight:normal){
        font-size: $size;
        color:$color;
        font-weight:$weight;
    }
    #manageRule{
        width:95%;
        margin:10px auto;
        .header{
            @include wh-common-style(100%,50px);
            margin:10px auto;
            border-bottom:solid 1px #999;
            position:relative;
            .flow{
                position:absolute;
                left:0;
                bottom:6px;
            }
        }
        .left{
            ul.nav{
                border:solid 1px #ccc;
                @include wh-common-style(15%,140px);
                float:left;
                li{
                    @include wh-common-style(100%,47px);
                    list-style:none;
                    border-bottom:0.5px solid #ccc;
                    text-align:center;
                    line-height:47px;
                    @include font-common-style('','',bold);
                }
                .li_active{
                    background:#336;
                    color:#fff;
                }
                li:hover{
                     cursor:pointer;
                   }
                li:first-child{
                    text-align:left;
                    text-indent:8px;
                    @include font-common-style(14px,#069,normal);
                }
                li:last-child {
                    border-bottom: none;
                }
            }
        }
            .right{
                float:right;
                width:79%;
                border:1px solid #ccc;
                box-shadow:0 0 5px #ccc;
                padding:45px 15px 15px 28px;
                margin-bottom:40px;
                input.search-input{
                    @include wh-common-style(250px,22px);
                    border:1px solid #ccc;
                }
                input::-webkit-input-placeholder{
                    text-indent:8px;
                }
                button.search{
                    @include wh-common-style(50px,22px);
                    color:#fff;
                    border-radius:5px;
                    background:#f60;
                    margin-left:10px;
                    &:hover{
                        cursor:pointer;
                    }
                }
                table.content{
                    width:97%;
                    margin-top:25px;
                    text-align:left;
                    text-indent:8px;
                    border:1px solid #99c;
                    border-top:none;
                    /* 合并边框 */
                    border-collapse:collapse;
                    tr{
                        height:30px;
                        th{
                            background:#ccc;
                            font-weight:normal;
                            border-right:1px solid #99c;
                        }
                        td{
                            border-right:1px solid #99c;
                            text-indent:8px;
                        }
                        /*表格第一列*/
                        td:first-child{
                            color:#369;
                            width:30%;
                        }
                    }
                    tr:nth-child(2n+1){
                        background:#eee;
                    }
                    tr:hover{
                        cursor:pointer;
                        background:#699;
                    }
                }
                /*分页器样式*/
                .el-pagination, .el-pagination--small{
                    margin:10px 0px 10px 0;
                    @include wh-common-style(95.5%,27px);
                    border:1px solid #ccc;
                    .el-pagination__total{
                        float:right;
                    }
                    .el-input--suffix{
                        width:100px;
                    }
                    .el-input__inner:last-child{
                        width:50px !important;
                    }
                }
            }
    }

</style>