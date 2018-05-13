<template>
    <div id="filterM">
        <Navigation></Navigation>
        <div id="filterTop">
            <span id="colorBlack">首页</span>
            <span>></span>
            <span>预定中心</span>
            <div id="headLine"></div>
        </div>
        <div id="bgColorB">
            <div id="filterCenter">
                <span>
                    <input type="text" placeholder="关键字">
                </span>
                <span>
                    <button>搜索</button>
                </span>

            </div>
            <div id="filterBottom">
                <div id="bottomOne">

                    <dl>
                        <dt><span>预定类型</span></dt>
                        <dd id="bO1" @click="clickFilterB('bO','bO1')" class="myCheck">全部</dd>
                        <dd id="bO2" @click="clickFilterB('bO','bO2')">场地</dd>
                    </dl>

                </div>
                <br/>
                <div id="bottomTwo">

                    <dl>
                        <dt><span>所属校区</span></dt>
                        <dd id="bT1" @click="clickFilterB('bT','bT1')" class="myCheck">全部</dd>
                        <dd id="bT2" @click="clickFilterB('bT','bT2')">南校区</dd>
                        <dd id="bT3" @click="clickFilterB('bT','bT3')">北校区</dd>
                        <dd id="bT4" @click="clickFilterB('bT','bT4')">东校区</dd>
                        <dd id="bT5" @click="clickFilterB('bT','bT5')">珠海校区</dd>
                    </dl>
                </div>
            </div>
        </div>

        <collect></collect>

    </div>
</template>
<script>
    import collect from './collect.vue';
    import Navigation from './navigation.vue';
    export default {
        components: {
            collect,
            Navigation
        },
        data() {
            return {
                bO: 'bO1',
                bT: 'bT1',
            }
        },
        methods: {
            clickFilterB :function(a, b) {
                //改变样式
                if (a == 'bO') {
                    changeStyle(this.bO, b);
                    this.bO = b;
                }
                else if (a == 'bT') {
                    changeStyle(this.bT, b);
                    this.bT = b;
                }
            }
        }
    }

    function changeStyle(one,twe) {
        document.getElementById(one).setAttribute('class','');
        document.getElementById(twe).setAttribute('class',' myCheck ');
    }
</script>
<style>
    *{
        margin: 0;
        top: 0;
        text-align: left;
        list-style: none;
    }

    #filterM{
        margin: 50px 100px;
    }
    #filterTop #colorBlack{
        color: #000;
        font-weight:bold;
    }
    #filterTop span{
        margin: 5px;
        color: gray;
    }
    #filterTop #headLine{
        margin-top: 5px;
        border-top: 1px solid gray;
    }

    #bgColorB{
        margin-top:3px;
        background-color: #eee;
    }
    #filterCenter{
        padding:30px 0;
    }
    #filterCenter span{
        float: left;
    }
    #filterCenter input{
        margin-top:0;
        border:1px solid #aaa;
        width: 300px;
        height:25px;
        color: gray;
    }
    #filterCenter button{
        height:29px;
        border:1px solid blue;
        color: #fff;
        background-color: blue;

    }
    #filterBottom{
        padding-bottom:30px;
    }
    #filterBottom div{
        width: 100%;
        padding: 10px 0;
    }
    #filterBottom dl{
        padding: 0;
    }
    #filterBottom dd,#filterBottom dt{
        float: left;
        padding:0 5px;
    }
    #filterBottom dd{
        /*color: blue;*/
        cursor:pointer
    }
     .myCheck{
        padding:0 10px;
        height: 22px;
        background: blue;
        color: #fff;
        text-align: center;
    }
</style>