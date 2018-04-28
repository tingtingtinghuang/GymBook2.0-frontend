<template>
    <div id="collectM">
        <!--左边的字母-->
        <div id="collLeft">
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
            <span class="leftACL">A</span>
        </div>
        <!--右边的场地-->
        <div id="collRight">
            <!--某个字母的全部场地-->
            <div>
                <span class="rightACL">A</span>
                <div class="rightOne" >
                    <!--某个字母的一个场地-->
                    <div class="rightOther" v-on:click="clickRightOne('aaa')" id="aaa">
                        <div class="rOIcon"></div>
                        <div class="rORight">
                            <span class="rORSpan">1</span>
                            <span class="rORSpan">2</span>
                            <span class="rORSpan">3</span>
                        </div>
                    </div>
                    <!--某个字母的一个场地-->
                    <div class="rightOther" v-on:click="clickRightOne('ccc')" id="ccc">
                        <div class="rOIcon"></div>
                        <div class="rORight">
                            <span class="rORSpan">1</span>
                            <span class="rORSpan">2</span>
                            <span class="rORSpan">3</span>
                        </div>
                    </div>
                    <!--某个字母的一个场地-->
                    <div class="rightOther" v-on:click="clickRightOne('sss')" id="sss">
                        <div class="rOIcon"></div>
                        <div class="rORight">
                            <span class="rORSpan">1</span>
                            <span class="rORSpan">2</span>
                            <span class="rORSpan">3</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <!--某个字母的全部场地-->
            <div>
                <span class="rightACL">A</span>
                <div class="rightOne">
                    <div class="rightOther"></div>
                    <div class="rightOther"></div>
                    <div class="rightOther"></div>
                    <div class="rightOther"></div>
                </div>
            </div>
            <!--某个字母的全部场地-->
            <div>
                <span class="rightACL">A</span>
                <div class="rightOne">
                    <div class="rightOther"></div>
                    <div class="rightOther"></div>
                    <div class="rightOther"></div>
                    <div class="rightOther"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cId:'',
                collectClass:'',
            }
        },
        methods:{
            clickRightOne :function (id) {
                this.collectClass = ' rightOther ';
                if(this.cId !=''){
                    document.getElementById(this.cId).setAttribute('class',this.collectClass);
                }
                this.collectClass = this.collectClass.concat('rightOther1');
                document.getElementById(id).setAttribute('class',this.collectClass);
                this.cId = id;
            }
        }
    }
</script>

<style>
    #collectM{
        width: 100%;
        height: 1000px;
        /*background-color: blue;*/
        display: flex;
    }
    #collLeft{
        /*width: 32px;*/
        height: 100%;
        background-color: pink;
        flex: 1;

        display: flex;
        flex-direction:column;
    }
    #collLeft .leftACL{
        width: 100%;
        line-height:30px;
        font-size:12px;
        text-align: center;
        color: #999;

    }
    #collRight{
        /*width: 100%;*/
        height: 100%;
        /*background-color: green;*/
        flex:30;
        padding:10px;
    }
    #collRight .rightOne{
        display: flex;
    }
     .rightOther{
        width: 25%;
        height: 100px;
        background-color: #fff;
        border-radius: 5px;
        padding: 15px;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
    }
    .rightOther1{
        border:  1px solid blue;
    }
    #collRight .rightOther .rOIcon{
        width: 50px;
        height: 50px;
        border:  1px solid #000;
        /*margin: 15px;*/
        border-radius: 15px;
    }
    #collRight .rightOther .rORight{
        height: 70%;
        width: 60%;
        background-color: #aaa;
        position: absolute;
        left: 75px;
        top: 15px;
        display: flex;
        flex-direction: column;
    }
    #collRight .rightOther .rORight .rORSpan{
        width: 100%;
        flex: 1;
    }
</style>