<template>
    <div id="notice-container">
        <slot name="head"> </slot>
        <div class="body">
            <ul>
                <li v-for="(item, index) in noticeArr" :key="index">
                    <i class="el-icon-arrow-right"> </i>
                    <span class="title">{{ item.title }}</span>
                    <span class="date">{{ item.date }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        components:{
        },
        props:{

        },
        data(){
            return{
                // 获取到后台数据后将内容换掉
                noticeArr:[
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'},
                    {title:"《中山大学体育激励项目载解读》",date:'2018-3-25'}
                ]
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
        overflow-y: auto;
        .body {
            ul {
                margin: 0px auto;
                padding:2px 10px;
            }
            ul li {
                margin: 1px auto;
                font-size: 13px;
                padding: 4px;
                list-style: none;
                border-bottom: dashed 1px #ccc;
                text-align: left;
                color:#069;
                .title {

                }
                .date {
                    float: right;
                }
            }
            ul li:hover {
                background: #ccc;
                cursor: pointer;
            }
        }
    }

</style>
