<template>
  <div>
      <ul>
          <li v-for='(value) in directionArray' v-bind:key='value'>
              <a :href="'#'+value">{{value}}</a>
          </li>
      </ul>
      <div class='gymList'>
          <div v-for='(gymArray,gymArraykey) in gymList' v-bind:key='gymArraykey'>
            <h3><a :name='gymArraykey'>{{gymArraykey}}</a></h3>
            <GymBlock v-for='(gym,gymkey) in gymArray'  v-bind:key='gymkey' star=3.7 :name='gym.title' :address='gym.addr' :image='image'/>
          </div>
      </div>
  </div>
</template>
<script>
import GymBlock from './gymBlock';
import swimmingSvg from '../../assets/images/swimming.svg'

export default {
    data(){
        return {
            href:'',
            star:0,
            name:'',
            address:'',
            image:swimmingSvg
        }
        
    },
    computed:{
      
    },
    props:['gymList','directionArray'],
        
    created:function(){
        // console.log(this.gymList);
        // this.gymList=JSON.parse(JSON.stringify(this.gymList))
    },
    components:{
        GymBlock
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/vars.scss';

ul{
    margin:0;
    padding:0;
    float: left;
    padding-top: 8px;
    li{
        list-style: none;
        font-size: 16px;
        line-height: 36px;
        padding: 2px 0;
        a{
            color: grey;
            text-decoration: none;
            display: block;
            padding: 0 10px;
            &:hover{
                background-color: $light-grey;
            }
        }
    }
}
.gymList{
    margin-left: 50px;
    padding-top: 18px;
    
}
</style>
