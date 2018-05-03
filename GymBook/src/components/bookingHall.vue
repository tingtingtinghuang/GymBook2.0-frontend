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
                   <span class="more" style="color:#069">更多>></span>
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
                    <span class="notice-content">
                        <span>
                            <img src="../assets/bookingHall/trumpet.svg" alt="#">
                        </span>
                        通知公告
                    </span>
                </div>
            </Notice>
        </div>
        <div class="right">
            <Notice>
                <div slot="head" class="notice-head-up">
                    <DropDownMenu title="选择场馆" :options="[{label:'东校区',value:'选项1'},{label:'南校区',value:'选项2'},{label:'北校区',value:'选项13'}]" class="fieldChoose"></DropDownMenu>
                    <DropDownMenu title="运动类型" :options="[{label:'羽毛球',value:'选项1'},{label:'篮球',value:'选项2'},{label:'乒乓球',value:'选项3'},{label:'棒球',value:'选项4'}]" class="sports"></DropDownMenu>
                    <el-button type="primary" icon="el-icon-search" style="width:40px;height:27px;margin-left:-45px;"></el-button>
                    <span class="more">更多场地>></span>
                </div>
            </Notice>
            <FigureArea placeName="北校区" style="margin-top:-2px;">
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
    import Navigation from '../common/navigation';
    import Banner from '../common/forBookingHall/banner';
    import Notice from  '../common/forBookingHall/notice';
    import FigureArea from  '../common/forBookingHall/figureArea';
    import DropDownMenu from '../common/forBookingHall/dropDownMenu';
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
                @include font-common-style('10px','#000');
                line-height:30px;
                position:relative;
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
            height:30px;
            padding:3px 5px;
            border-bottom:solid 1px #ccc;
            .fieldChoose, .sports{
                display:inline-block;
                float:left;
                margin-right:15px;
                background:none;
            }
            .more{
                @include wh-common-style(80px,35px);
                line-height:35px;
                float:right;
                @include font-common-style('', #069);
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