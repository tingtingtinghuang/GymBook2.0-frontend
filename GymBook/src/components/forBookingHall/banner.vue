<template>
    <div id="banner-container">
        <div class="block">
            <span class="demonstration"></span>
            <el-carousel height="180px" autoplay interval="4000">
                <el-carousel-item :key="1">
                    <img src="../../assets/bookingHall/banner_01.jpg" alt="#">
                </el-carousel-item >
                <el-carousel-item :key="2">
                    <img src="../../assets/bookingHall/banner_02.jpg" alt="#">
                </el-carousel-item>
                <el-carousel-item :key="3">
                    <img src="../../assets/bookingHall/banner_03.jpg" alt="#">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style>

    /*.el-carousel__item{*/
        /*width:1448px;*/
        /*height:180px;*/
    /*}*/
    /*.el-carousel__item img{*/
        /*height:100%;*/
    /*}*/
</style>