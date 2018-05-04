<template>
  <div>
    <header>
       <!-- <img src='../assets/images/logo.png'> -->
       <div><router-link to='/login'>登录</router-link></div>
       <ul>

         <li><router-link to='demo'>Demo</router-link></li>
         <li><router-link to='/'>预定大厅</router-link></li>
         <li><router-link to='/filterBox'>预订中心</router-link></li>
         <li><router-link to=''>场馆简介</router-link></li>
         <li><router-link to=''>管理制度</router-link></li>
       </ul>
    </header>
     
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped type="text/css">
  $greenColor: #005824;
  
  $lightGreenColor:#007731;
  $whiteColor:#FFF;
  $width:100%;
  $height:90px;

  @mixin verticalCenter($height) {
      height: $height;
      line-height: $height;
  }

  *{
    margin: 0;
    padding:0;
    font-size:16px;
    color:$whiteColor;
  }
  div{ 
    height:$height;
    width:$width;
    background-color:$greenColor;
  }
  header{
    position: relative;
    width: 1024px;
    height: $height;
    margin:0 auto;
    a{
      text-decoration: none;
    }
    div{
      position: absolute;
      top:0;
      right:0;
      @include verticalCenter(2em);
      width: 2em;
      padding:0 1em;
      background-color:rgba(0,0,0,0.3);
      border-radius: 5px;
      
    }
    img{
      position: absolute;
      top:50%;
      left:0;
      transform:translate(0,-50%);

    }
    ul{
      position: absolute;
      bottom: 0;
      right:0;
      height: 40px;
      li{
        display: inline-block;
        background-color: $lightGreenColor;
        @include verticalCenter(40px);
        padding:0 2em ;
      }
    }
  }
  
</style>
