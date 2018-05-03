<template>
  <div>
    <div class="tabs">
        <ul>
            <li v-for="(tab,index) in tabs" v-bind:key="index" >
                <a href="#" @click="selectTab(tab)" v-bind:class="{ 'active': tab.isActive }">{{ tab.name }}</a>
            </li>
        </ul>
          
    </div>
    <div class="tabs-details">
        <slot></slot>
    </div>
</div>


</template>
<script>
export default {
  
  data() {
    return { tabs: [] };
  },
  
  created() {
    this.tabs = this.$children;
  },
  
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
  
}

</script>

<style scoped>
div{
    width:100%;
    font-size:18px;
    border-bottom: 1px solid #e6e6e6;
}
ul {
    display: flex;
}

li {
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
}

a {
    display: block;
    color: #999;    
    text-decoration: none;
    font-family: arial, sans-serif;
    padding: 0 10px;
    line-height: 56px;
    font-size: 18px;
    width: 170px;
    text-align: center;
}

a:hover, a:focus {
    background: #fff;
    
}
.active{
    border-bottom: 2px solid #0b4b77;
    
}
a.active{
    color: #0b4b77;
}
</style>
