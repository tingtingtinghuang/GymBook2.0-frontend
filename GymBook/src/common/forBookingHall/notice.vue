<template>
    <div id="notice-container">
        <slot name="head" class="head"> </slot>
        <div class="body">
            <ul>
                <li v-for="(item, index) in noticeArr" :key="index" @click="newsContent(item,index)">
                    <i class="el-icon-arrow-right"> </i>
                    <!--场馆列表该字段是content,其他列表为title-->
                    <span class="title">{{ item.content || item.title }}</span>
                    <div class="useTime" v-show="usetime">
                        <span class="start">{{ item.startTime }}</span>
                        <span>---></span>
                        <span class="end">{{ item.endTime }}</span>
                    </div>
                    <span class="reserve" v-show="reserve">预</span>
                    <span class="rest" v-show="rest">剩余{{item.remainingTime}}</span>
                    <span class="date" v-show="date">{{ item.createdAt }}</span>
                </li>
            </ul>
            <!-- 显示新闻具体内容 -->
            <el-dialog
              class='news-content-container'
              :title="newsTitle"
              :visible="dialogVisible"
              width="60%"
              :before-close="handleClose"
              >
              <div class='time-info'>
                <time class='time'>创建时间 {{ createdAt }}</time> 
                <time class='time'>更新时间 {{ updatedAt }}</time> 
                <span class='count'>浏览量：{{ view }}</span>
              </div>
                <span v-html='newDetail'>##</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="close">关闭</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  // 要是显示的场馆信息，则不显示日期
  props: {
    noticeArr: "",
    date: {
      default: true
    },
    usetime: {
      default: false
    },
    reserve: {
      default: false
    },
    rest: {
      default: false
    }
  },
  data() {
    return {
      newId: "",
      dialogVisible: false,
      newDetail: "",
      newsTitle: "",
      createdAt: "",
      updatedAt: "",
      view: ""
    };
  },
  methods: {
    close() {
      this.dialogVisible = false;
      this.newDetail = "";
    },
    handleClose() {
      this.dialogVisible = false;
      this.newDetail = "";
    },
    newsContent(item, index) {
      this.dialogVisible = true;
      axios
        .get(`http://39.108.179.140:8991/news/${item.id}`)
        .then(response => {
          console.log(response);
          let data = response.data.data;
          this.newDetail = data.html;
          this.newsTitle = data.title;
          this.createdAt = data.createdAt;
          this.updatedAt = data.updatedAt;
          this.view = data.view;
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#notice-container {
  width: 97%;
  margin: 5px auto 15px auto;
  height: 240px;
  border: solid 1px #ccc;
  .body {
    ul {
      margin: 0 auto;
      width: 97%;
      height: 200px;
      padding: 2px 10px;
      overflow-y: auto;
      .blackStyle {
        color: #000 !important;
      }
      li {
        margin: 1px auto;
        font-size: 14px;
        padding: 4px;
        list-style: none;
        border-bottom: dashed 1px #ccc;
        text-align: left;
        color: #069;
        &:hover {
          background: #ccc;
          color: #000;
          cursor: pointer;
        }
        .useTime {
          display: inline-block;
        }
        span.title {
          display: inline-block;
          width: 55%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .date {
          float: right;
        }
        .useTime {
          margin-right: 10px;
        }
        .reserve {
          display: inline-block;
          margin-right: 20px;
          text-align: center;
          width: 30px;
          height: 20px;
          border-radius: 6px;
          color: #fff;
          background: rgb(0, 51, 102);
          &:hover {
            cursor: pointer;
          }
        }
        .rest {
          float: right;
          color: #f93;
        }
      }
    }
    .news-content-container {
      .time-info {
        font-size: 12px;
        color: #999;
        margin-bottom: 15px;
        .time,
        .count {
          display: block;
        }
      }
    }
  }
}
</style>