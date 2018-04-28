<template>
  <div class="nav">
    <nav>
      <div class="logo">
        <img src="../../assets/logo.png" />
      </div>
      <div class="navbar">
        <div class="login">
          <router-link to=''>登录</router-link>
        </div>
        <div class="main">
          <router-link to='/'>预定大厅</router-link>
          <router-link to='/reserve'>预订中心</router-link>
          <router-link to='/introduction'>场馆简介</router-link>
          <router-link to=''>管理制度</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'navigation'
}
</script>