<template>
  <div class="container">
    <top></top>
    <div class="row page">
      <div class="col-xs-2">
        <ver></ver>
      </div>
      <div class="col-xs-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import PageTop from '../components/PageTop.vue'
  import VerticalNavigation from '../components/VerticalNavigation.vue'
  export default {
    name: 'home',
    components: {
      'top': PageTop,
      'ver': VerticalNavigation,
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news a:hover {
    background: rgba(255,255,255,0);
  }

  .box {
    box-shadow: none    ;
  }

  .detail-title{
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail {
    position: absolute;
    max-width: 29%;
    display: inline-block;
    top: 0;
    bottom: 0;
    padding: 28px 28px 28px 21px;
    font-size: 12px;
    color: #333;
    height: 100%;
    background-color: #e8e6e3;
  }

  .detail a:hover{
    color: #922;
  }

  .detail-people {
    color: #999;
    line-height: 1;
  }

  .news .carousel-inner > .item > img{
    display: inline-block;
    max-width: 70%;
  }

  .carousel-indicators {
    left: 35%;
  }

  .detail-title {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .detail-desc {
    margin-top: 18px;
  }

  @media screen and (min-width: 768px){
    .carousel-caption {
      width: 70%;
      left: 0;
      right: 0;
    }
  }
</style>
