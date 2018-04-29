<template>
    <div class="follow">
        <img :src="src"><label>关注</label>
    </div>
</template>

<style>
.follow{
    border: 1px solid #000;
}
.follow:hover{
    background: rgb(218, 135, 174);
}
.follow>img{
    width: 20%;
    vertical-align: middle;
}
.follow>label{
    vertical-align: middle;
    padding-left: 3px;
}
</style>

<script>
import heart from '../../../assets/heart.png'
export default {
  data(){
      return{
          src:heart
      }
  }
}
</script>
