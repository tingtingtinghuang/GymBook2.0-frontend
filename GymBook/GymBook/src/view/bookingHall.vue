<template>
    <div id="bookingHall-container">
        <Navigation> </Navigation>
        <Banner> </Banner>
        <div class="left">
           <Notice style="border:none">
               <div slot="head" class="notice-head-up">
                   <span class="ballActivity"><span>
                       <img src="../assets/bookingHall/clock.svg" alt="#">
                   </span>约球活动</span>
                   <span class="more">更多>></span>
               </div>
           </Notice>
            <FigureArea placeName="南校区">
                <img src="../assets/bookingHall/100001.jpg" alt="#" slot="imgContainer">
            </FigureArea>
            <FigureArea  placeName="东校区">
                <img src="../assets/bookingHall/100003.jpg" alt="#" slot="imgContainer">
            </FigureArea>
            <Notice style="border-radius:5px;">
                <div slot="head" class="notice-head-down">
                    <span class="notice-content"><span>
                        <img src="../assets/bookingHall/trumpet.svg" alt="#">
                    </span>通知公告</span>
                </div>
            </Notice>
        </div>
        <div class="right">
            <Notice>
                <div slot="head" class="notice-head-up">
                    <DropDownMenu title="选择场馆" :options="['东校区','南校区','北校区']" class="fieldChoose"></DropDownMenu>
                    <DropDownMenu title="运动类型" :options="['羽毛球','篮球','棒球','游泳']" class="sports"></DropDownMenu>
                    <span class="more">更多场地>></span>
                </div>
            </Notice>
            <FigureArea placeName="北校区">
                <img src="../assets/bookingHall/100002.gif" alt="#" slot="imgContainer">
            </FigureArea>
            <FigureArea  placeName="珠海区">
                <img src="../assets/bookingHall/100004.jpg" alt="#" slot="imgContainer">
            </FigureArea>
            <Notice style="border-radius:5px;">
                <div slot="head" class="notice-head-down">
                    <span class="notice-content"><span>
                        <img src="../assets/bookingHall/trumpet.svg" alt="#">
                    </span>管理制度</span>
                </div>
            </Notice>
        </div>
    </div>
</template>
<script>
    import Navigation from '../components/public/forBookingHall/navigation';
    import Banner from '../components/public/forBookingHall/banner';
    import Notice from  '../components/public/forBookingHall/notice';
    import FigureArea from  '../components/public/forBookingHall/figureArea';
    import DropDownMenu from '../components/public/forBookingHall/dropDownMenu';
    export default{
        components:{
            Navigation,
            Banner,
            Notice,
            FigureArea,
            DropDownMenu
        }
    }

</script>
<style lang="scss" scoped type="text/scss">
    *{
        margin: 0;
        padding:0;
        font-size:12px;
    }
    /* 定义scss通用样式*/
    @mixin font-common-style($indent,$color:#000){
        color:$color;
        font-size:12px;
        font-weight:bold;
        text-indent:$indent;
    }
    @mixin wh-common-style($w, $h){
        width:$w;
        height:$h;
    }
    @mixin position-common-style($type,$top,$left,$bottom,$right){
        position:$type;
        top:$top;
        left:$left;
        bottom:$bottom;
        right:$right;
    }
    .left,.right{
        width:49%;
        /*height:800px;*/
        /*border:solid 1px #ccc;*/
    }
    .left{
        float:left;
        margin-left:10px;
        .notice-head-up{
            margin:1px auto;
            height:30px;
            border-bottom:solid 1px #069;
            .ballActivity{
                float:left;
                @include wh-common-style(80px,30px);
                @include font-common-style(12px,#fff);
                line-height:30px;
                @include position-common-style(relative,'','','','');
                background:green;
                    img{
                        @include wh-common-style(20px,20px);
                        @include position-common-style(absolute,4px,1px,'','');
                }

            }
            .more{
                @include wh-common-style(80px,30px);
                color: #069;
                line-height:30px;
                float:right;
                @include font-common-style('');
                text-align:right;
            }
            .more:hover{
                cursor:pointer;
            }
        }
        .notice-head-down{
            margin:1px auto;
            height:30px;
            border:solid 1px #eee;
            background:#eee;
            .notice-content{
                float:left;
                @include wh-common-style(80px,30px);
                font-size:12px;
                font-weight:bold;
                text-indent:10px;
                line-height:30px;
                position:relative;
                color:#000;
                img{
                    /*display:inline-block;*/
                    @include wh-common-style(20px,20px);
                    @include position-common-style(absolute,4px,1px,'','');
                }
            }
        }
    }
    .right{
        float:right;
        margin-right:10px;
        .notice-head-up{
            margin:1px auto;
            height:40px;
            border-bottom:solid 1px #eee;
            .fieldChoose, .sports{
                display:inline-block;
                float:left;
                margin-right:15px;
                background:none;
            }
            .more{
                @include wh-common-style(80px,35px);
                color: #069;
                line-height:35px;
                float:right;
                font-size:12px;
                font-weight:bold;
                text-align:right;
            }
            .more:hover{
                cursor:pointer;
            }
        }
        .notice-head-down{
            margin:1px auto;
            height:30px;
            border:solid 1px #eee;
            background:#eee;
            .notice-content{
                float:left;
                @include wh-common-style(80px,30px);
                @include font-common-style(10px);
                line-height:30px;
                @include position-common-style(relative,'','','','');
                img{
                    /*display:inline-block;*/
                    width:20px;
                    height:20px;
                    @include position-common-style(absolute,4px,1px,'','');
                }
            }
        }
    }
</style>