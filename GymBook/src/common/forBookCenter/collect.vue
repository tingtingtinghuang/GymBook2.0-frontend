<template>
  <div>
      <ul>
          <li v-for='(value,key) in gymList' v-bind:key='key'>
              {{key}}
          </li>
      </ul>
      <div>
          <div v-for='(value,key) in gymList' v-bind:key='key'>
            <a name=''>{{key}}</a>
            
            <GymBlock star=3.7 name="val" address="value.addr" :image='image'/>
            
            
          </div>
      </div>
  </div>
</template>
<script>
import GymBlock from './gymBlock';
export default {
    data(){
        return {
            key:'',
            
                // gymList:{g:'123',y:'bb'}
        }
        
    },
    computed:{
        // gymListtest:function(){
        //     return JSON.parse(JSON.stringify(this.gymList));
        // }
    },
    props:['gymList'],
        
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
ul{
    float: left;
    padding-top: 8px;
    li{
        list-style: none;
        font-size: 16px;
        line-height: 36px;
        padding: 2px 0;
    }
}
</style>
