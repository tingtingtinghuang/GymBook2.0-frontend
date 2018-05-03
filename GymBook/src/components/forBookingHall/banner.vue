<template>
    <div id="banner-container">
        <div class="block">
            <span class="demonstration"></span>
            <el-carousel height="180px" autoplay>
                <el-carousel-item :key="1">
                    <img src="../../../assets/bookingHall/banner_01.jpg" alt="">
                </el-carousel-item >
                <el-carousel-item :key="2">
                    <img src="../../../assets/bookingHall/banner_02.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item :key="3">
                    <img src="../../../assets/bookingHall/banner_03.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style>
    #banner-container{
        padding:4px 10px 5px 10px;
    }
    .el-carousel__item{
        /*width:1920px;*/
        /*height:100px;*/
    }
    .el-carousel__item img{
        width:98.5%;
    }
</style>