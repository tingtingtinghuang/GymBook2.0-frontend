<template>
    <div id="figureArea">
        <div class="figure"><slot name="imgContainer"></slot><span>{{ placeName }}</span></div>
        <div class="booking" @click = "bookingOnline()">在线预订</div>
    </div>

</template>
<script>
    export default{
        components:{

        },
        props:{
            imgUrl:'',
            placeName:''
        },
        methods:{
            // 点击“场馆预定”跳到“预定中心”
            bookingOnline:function(){
                window.location.href = '/filterBox'
            }
        }

    }
</script>
<style lang="scss" scoped type="text/scss">
    #figureArea{
        width:95.5%;
        margin:5px auto;
        height:120px;
        padding:5px;
        font-weight:bold;
        position:relative;
        border-radius:5px;
        background:#eee;
        .figure{
            position:absolute;
            top:15px;
            left:10px;
            img{
                width:200px;
                height:100px;
            }
            span{
                position:absolute;
                width:50px;
            }
        }

        .booking{
            width:50px;
            background:#fff;
            color:#999;
            font-weight:normal;
            padding:6px;
            border-radius:5px;
            position:absolute;
            top:15px;
            right:10px;
            &:hover{
                cursor:pointer;
                color:#000;
            }
        }
    }

</style>