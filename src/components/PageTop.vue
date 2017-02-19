<template>
  <div class="row page-top">
    <div class="col-xs-2"></div>
    <div class="col-xs-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="关键字">
        <div class="input-group-btn">
          <button type="button" class="btn btn-danger">搜索</button>
        </div>
      </div>
    </div>
    <div class="col-xs-5"></div>
    <div class="col-xs-1 user-action">
      <a @click="toRegister">注册</a>
      <a @click="toLogin">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    toLogin() {
      var vm = this
      vm.$router.replace({ path: '/login' })
    },
    toRegister() {
      var vm = this
      vm.$router.replace({ path: '/register' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-top {
    margin: 14px 0;
  }

  .user-action {
    float: right;
    background-color: #e8e6e3;
    height: 49px;
    margin-top: -14px;
    width: 112px;
    padding-top: 8px;
    text-align: center;
    position: relative;
  }
</style>
