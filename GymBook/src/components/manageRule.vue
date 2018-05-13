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
                <div class="right" v-show='!show'>
                    <input type="text" class="searchName" placeholder="输入标题关键字..." v-model="inputContent"> <button class="search" @click="search()">搜索</button>
                    <table class="content">
                        <tr>
                            <th>标题</th>
                            <th>发布日期</th>
                            <th>浏览次数</th>
                        </tr>
                        <tr v-for="(item,index) in tableData" :key="index" @click="newsDetail(item,index)">
                            <td>{{ item.title }}</td>
                            <td>{{ item.createdAt }}</td>
                            <td>{{ item.view}}</td>
                        </tr>
                    </table>
                    <!--分页器组件-->
                    <Pagination> </Pagination>
                </div>
                <!-- 这各页面用来渲染新闻（制度的）详细内容 -->
                 <div class="right newsDetail" v-show='show'>
                     <h2 v-html = title class='newsTitle'> </h2>
                     <i v-html = date class='date'> </i>
                     <p v-html = content class='newsContent'> </p>
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
            Pagination,
        },
        data(){
            return{
                showControl:'false',
                tableData:[],
                noticeData:[],
                ruleData:[],
                bg:false,
                countArr:[],
                inputContent:'',
                show:false,
                title:'',
                content:'',
                date:'',
            }
        },
        props:[],
        mounted(){
           this.init()
        },
        methods:{
            init(){
                 //进入该页面时展示管理制度页
                this.$ajax.get('http://127.0.0.1:2618/newsList/rules',{}).then( res => {
                    this.tableData = res.data.data.list;
                }).catch( err => {
                    alert(err)
                })
            },
            // 关键字搜索
            search(){
               

            },
            newsDetail(item){
            // 不进入新页面。
                this.title = item.title;
                this.date = item.createdAt;
                this.content = item.description;
                this.show = true;
                
            },
            showNotice(){
                this.show = false;
                this.bg = true;
                this.$ajax.get('http://127.0.0.1:2618/newsList/notice',{}).then( res => {
                    this.tableData = res.data.data.list;
                }).catch( err => {
                    alert(err)
                })
            },
            showRule(){
                 this.show = false;
                this.bg = false;
                this.init();
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
                // 新闻内容样式
                .newsTitle{
                    margin:0 auto;
                    padding-bottom:30px;
                }
                .date{
                    display:block;
                    margin-bottom:15px;
                }
                .newsContent{
                    text-align:left;
                }
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
                    text-align:center;
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