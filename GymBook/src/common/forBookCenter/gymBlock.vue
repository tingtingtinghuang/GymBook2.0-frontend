<template>
    <div class='container' v-on:click='route'>
        <img :src='image' >
        <el-card class="box-card">
            <div class='name'>
                {{name}}
            </div>
            <div class='address'>
                {{address}}
            </div>
            <div>
                <el-rate
                    v-model="star"
                    disabled
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
            </div>
        </el-card>
    </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';

    export default {
        data(){
            return{
            //    star:3.7,
            //    image:swimmingSvg
            }
        },
        props:['star','image','name','address','id'],
        computed:{
            ...mapState({
            // 注意这里的demo和模块名相对应
            gymList: ({
                    bookCenter
            }) => bookCenter.gymList
          })
        },
        methods:{
          route:function(){
              this.$router.push({ path: `/reserve/${this.id}` });
          }
        }

    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';

.container{
    width:280px;
    margin-left: 20px;
    display: inline-block;
    border: 1px solid transparent;
    &:hover{
        border: 1px solid $deep-blue;
        border-radius: 5px;
    }
    .box-card{
        // width:200px;
        border:none;
        box-shadow:none;
        div{
          margin:5px;
        }
        .name{
          color:$deep-blue;
          font-size: 18px;
        }
        .address{
          color:black;
        }
    }
    img{
        float: left;
        padding:30px 0 0 10px;
    }
}

</style>
