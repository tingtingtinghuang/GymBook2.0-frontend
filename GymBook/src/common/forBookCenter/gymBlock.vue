<template>
    <div class='container'>
        <img :src='image' >
        <el-card class="box-card">
            <div>
                {{name}}
            </div>
            <div>
                {{address}}
            </div>
            <div>
                <el-rate
                    v-model="star"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
            </div>
        </el-card>
    </div>
   
</template>

<script>
// import swimmingSvg from '../../assets/images/swimming.svg'

    export default {
        data(){
            return{
            //    star:3.7,
            //    image:swimmingSvg
            }
        },
        props:['star','image','name','address'],
        mounted:function(){
            
        }
       
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';

.container{
    width:230px;
    margin-right: 20px;
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
    }
    img{
        float: left;
        padding-top:20px;
    }
}

</style>
