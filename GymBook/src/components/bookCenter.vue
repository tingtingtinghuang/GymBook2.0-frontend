<template>
    <div>
        <Navigation> </Navigation> 
        <div class="container">
            <Breadcrumb/>
            <FilterBox/>
            <!-- <Collect/> -->
        </div>
    </div>
</template>
<script>
import Navigation from '../common/navigation';
import FilterBox from '../common/forBookCenter/filterBox';
import GymBlock from '../common/forBookCenter/gymBlock';
import Breadcrumb from '../common/breadcrumb'
import swimmingSvg from '../assets/images/swimming.svg'
import Collect from '../common/forBookCenter/collect'
    export default{
        components:{
            Navigation,
            GymBlock,
            FilterBox,
            Breadcrumb,
            Collect
        },
        data(){
            return {
                image:swimmingSvg
            }
        },
        mounted:function(){
            
        }
    }

</script>
<style lang="scss" scoped type="text/scss">
.container{
    width:1024px;
    margin:0 auto;
}
</style>