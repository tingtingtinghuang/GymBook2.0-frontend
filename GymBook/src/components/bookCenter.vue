<template>
    <div>
        <Navigation> </Navigation> 
        <div class="container">
            <Breadcrumb/>
            <FilterBox/>
            <div class='leftBar'>
                <GymBlock star=3.7 name='北校园乒乓球' address='地址：乒乓球室' :image='image'/>
            </div>
            
        </div>
    </div>
</template>
<script>
import Navigation from '../common/navigation';
import FilterBox from '../common/forBookCenter/filterBox';
import GymBlock from '../common/forBookCenter/gymBlock';
import Breadcrumb from '../common/breadcrumb'
import swimmingSvg from '../assets/images/swimming.svg'

    export default{
        components:{
            Navigation,
            GymBlock,
            FilterBox,
            Breadcrumb
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