<template>
    <div class="follow">
        <img :src="src">
        <label>关注</label>
    </div>
</template>

<style>
.follow>img{
    width: 24px;
    height: 24px;
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
