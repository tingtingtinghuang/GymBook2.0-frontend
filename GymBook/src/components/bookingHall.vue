<template>
    <div id="bookingHall-container">
        <Navigation> </Navigation>
        <Banner> </Banner>
        <div class="left">
            <FigureArea placeName="南校区" @reserveOnline='getEvent()'>
                <img src="../assets/bookingHall/100001.jpg" alt="#" slot="imgContainer">
            </FigureArea>
            <FigureArea  placeName="东校区" @reserveOnline='getEvent()'>
                <img src="../assets/bookingHall/100003.jpg" alt="#" slot="imgContainer">
            </FigureArea>
            <Notice style="border-radius:5px;" :noticeArr='newsListTwo'>
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
            <FigureArea placeName="北校区" style="margin-top:-2px;" @reserveOnline='getEvent()'>
                <img src="../assets/bookingHall/100002.gif" alt="#" slot="imgContainer">
            </FigureArea>
            <FigureArea  placeName="珠海区" @reserveOnline='getEvent()'>
                <img src="../assets/bookingHall/100004.jpg" alt="#" slot="imgContainer">
            </FigureArea>
            <Notice style="border-radius:5px;" :noticeArr='newsListFour'>
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
import Navigation from "../common/navigation";
import Banner from "../common/forBookingHall/banner";
import Notice from "../common/forBookingHall/notice";
import FigureArea from "../common/forBookingHall/figureArea";
import DropDownMenu from "../common/forBookingHall/dropDownMenu";
import axios from 'axios'

export default {
  components: {
    Navigation,
    Banner,
    Notice,
    FigureArea,
    DropDownMenu
  },
  data() {
    return {
      newsListTwo: [],
      newsListFour: [],
      dateControl: true,
      usetimeControl: false,
      reserveControl: false,
      restControl: false
    };
  },
  created() {
    // 通知公告获取
    axios.get("http://39.108.179.140:8991/news?type=0&pi=0&ps=8")
      .then(response => {
        console.log(response);
        this.newsListTwo = response.data.data.list;
      })
      .catch(error => {
        console.log(error);
      });
    // 管理制度获取
    axios.get("http://39.108.179.140:8991/news?type=1&pi=0&ps=8", {}, "get")
      .then(response => {
        console.log(response)
        this.newsListFour = response.data.data.list;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getEvent(val){
      this.$router.push('/bookcenter');
    }
  }
};
</script>
<style lang="scss" scoped type="text/scss">
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
/* 定义scss通用样式*/
@mixin font-common-style($indent, $color: #000) {
  color: $color;
  font-size: 12px;
  font-weight: bold;
  text-indent: $indent;
}
@mixin wh-common-style($w, $h) {
  width: $w;
  height: $h;
}
@mixin position-common-style($type, $top, $left, $bottom, $right) {
  position: $type;
  top: $top;
  left: $left;
  bottom: $bottom;
  right: $right;
}
#banner-container {
  margin: 10px auto;
  .el-carousel__item,
  .is-active,
  .is-animating {
    height: 200px;
    width: 1448px !important;
  }
}

.left,
.right {
  width: 49%;
}
.left {
  float: left;
  margin-left: 10px;
  .notice-head-up {
    margin: 1px auto;
    height: 30px;
    border-bottom: solid 1px #069;
    .ballActivity {
      float: left;
      @include wh-common-style(80px, 30px);
      @include font-common-style(20px, #fff);
      line-height: 30px;
      @include position-common-style(relative, "", "", "", "");
      background: green;
      img {
        @include wh-common-style(20px, 20px);
        @include position-common-style(absolute, 4px, 1px, "", "");
      }
    }
    .more {
      @include wh-common-style(80px, 30px);
      line-height: 30px;
      float: right;
      @include font-common-style("");
      text-align: right;
    }
    .more:hover {
      cursor: pointer;
    }
  }
  .notice-head-down {
    margin: 1px auto;
    height: 30px;
    border: solid 1px #eee;
    background: #eee;
    .notice-content {
      float: left;
      @include wh-common-style(80px, 30px);
      @include font-common-style(20px, "#000");
      line-height: 30px;
      position: relative;
      img {
        /*display:inline-block;*/
        @include wh-common-style(20px, 20px);
        @include position-common-style(absolute, 4px, 1px, "", "");
      }
    }
  }
}
.right {
  float: right;
  margin-right: 10px;
  margin-top:7px;
  .bread {
    margin-left: 33%;
  }

  .notice-head-up {
    margin: 1px auto;
    height: 30px;
    padding: 3px 5px;
    border-bottom: solid 1px #ccc;
    .fieldChoose,
    .sports {
      display: inline-block;
      float: left;
      margin-right: 15px;
      background: none;
    }
    .more {
      @include wh-common-style(80px, 35px);
      line-height: 35px;
      float: right;
      @include font-common-style("", #069);
      text-align: right;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .notice-head-down {
    margin: 1px auto;
    height: 30px;
    border: solid 1px #eee;
    background: #eee;
    .notice-content {
      float: left;
      @include wh-common-style(80px, 30px);
      @include font-common-style(20px);
      line-height: 30px;
      @include position-common-style(relative, "", "", "", "");
      img {
        /*display:inline-block;*/
        width: 20px;
        height: 20px;
        @include position-common-style(absolute, 4px, 1px, "", "");
      }
    }
  }
}
</style>