<template>
<!--  <div class="filterbox">
    <div class="input-box">
      <input v-model="searchMsg" type="text" placeholder="关键字">
      <div class="search-btn">搜寻</div>
    </div>
    <div class="checkbox-group">
      <div class="title">预定类型</div> 
      <div v-for="item in place.selection"
        @click="place.selected = item"
        :key="item"
        :class="{ 'active': place.selected == item }"
        class="checkbox-btn">{{item}}</div>
    </div>
    <div class="checkbox-group">
      <div class="title">所属校区</div> 
      <div 
        v-for="item in type.selection"
        @click="type.selected = item"
        :key="item"
        :class="{ 'active': type.selected == item }"
        class="checkbox-btn">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchMsg: '',
      type: {
        selected :'全部',
        selection: ['全部','南校区','北校区','东校区','珠海校区']
      },
      place: {
        selected: '全部',
        selection: ['全部','场地']
      }
    }
  }
}
