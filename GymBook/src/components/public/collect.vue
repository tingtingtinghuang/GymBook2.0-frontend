<template>
  <div class="collect">
    <div class="sidebar">
      <a class="alpha" 
      v-for="n in 26" 
      :key="n"
      :href="'#' +String.fromCharCode(64 + n)">
        {{String.fromCharCode(64 + n)}}
      </a>
    </div>
    <div class="main">
      <div class="item-section" 
      v-for="n in 26" 
      :key="n"
      :id="String.fromCharCode(64 + n)">
        <div class="title">{{String.fromCharCode(64 + n)}}</div>
        <div class="item-box" 
          v-for="n in Math.floor(Math.random() * 7) + 1"
          :key="n">
          <div class="icon">
            <i class="fas fa-table-tennis"></i>
          </div>
          <div class="desc">
            <h4>北校园兵乓球室</h4>
            <p>地址:乒乓球室</p>
            <el-rate 
              :value="parseInt(Math.floor(Math.random() * 5) + 1)"
              void-icon-class="el-icon-star-on"
              disabled>
            </el-rate>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name : 'collect'
}
</script>