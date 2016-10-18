<template>
  <div id="app">

    <ul v-infinite-scroll="loadMore" 
    infinite-scroll-immediate-check="false" 
    infinite-scroll-disabled="busy" 
    infinite-scroll-distance="30">
    <li v-for="(item,index) in lists">{{item}}</li >
  </ul>
  <div v-if="loading">加载中...</div>
</div>
</template>

<script>

  export default {
    name: 'app',
    components: {
    }
    ,data(){
      return {
        lists:[1,2,3],
        loading:false,
        busy:true
      }
    },
    mounted(){
      this.$nextTick(function () {
        console.log('mounted');
      this.loadMore()
    })
    },
    methods:{
      getRandArr(num=20){
        var arr=[]
        for (var i = num - 1; i >= 0; i--) {
          arr.push(Math.round(Math.random()*100))
        }
        return arr
      },
      loadMore(){
        console.log('loadMore....');
        this.busy=this.loading=true
        setTimeout(()=>{
          this.lists=this.lists.concat(this.getRandArr(20))
          this.busy=this.loading=false
        },1000)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul{
  }

  li{
    height: 30px;
    text-align: center;
    line-height: 30px;
    list-style: none;
  }
  li:nth-child(odd){
    background-color: #eee
  }
</style>
