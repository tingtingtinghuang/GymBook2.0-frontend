<template>
  <div>
    <div>hello，welcome to Demo page！</div>
    <br>
    <div>{{gymDetail}}</div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
export default {

    computed: {
      ...mapState({
        // 注意这里的demo和模块名相对应
        gymDetail: ({
          demo
        }) => demo.gymDetail
      })
    },
    beforeMount() {
      this.getGym().then(() => {
        console.log(this.gymDetail)
      })
    },
    methods: {
      ...mapActions([
        'getGym'
      ])
    }
  }
</script>