<template>
  <div class="row page-top">
    <div class="col-xs-2"><img src="../assets/title.png" class="title"></div>
    <div class="col-xs-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="关键字">
        <div class="input-group-btn">
          <button type="button" class="btn btn-danger">搜索</button>
        </div>
      </div>
    </div>
    <div class="col-xs-5" v-if="!isLogin"></div>
    <div class="col-xs-4" v-if="isLogin"></div>
    <div class="col-xs-1 user-action" v-if="!isLogin">
      <a @click="toRegister">注册</a>
      <a @click="toLogin">登录</a>
    </div>
    <nav class="col-xs-3 navbar navbar-static-top" role="navigation" v-if="isLogin">
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">你有4条新消息</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- start message -->
                    <a href="#">
                      <div class="pull-left">
                        <img src="../assets/rice.png" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Sender Name
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Message Excerpt</p>
                    </a>
                  </li><!-- end message -->
                  ...
                </ul>
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu box-widget widget-user">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="../assets/rice.png" class="user-image" alt="User Image">
              <span class="hidden-xs">大大吃货</span>
            </a>
            <ul class="dropdown-menu">
              <div class="widget-user-header bg-aqua-active user-header">
                <h6 class="widget-user-desc text-center">享受人生，享受生活</h6>
              </div>
              <div class="widget-user-image">
                <img class="img-circle" src="../assets/rice.png" alt="User Avatar">
              </div>
              <div class="box-footer">
                <div class="row">
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <h5 class="description-header">3,200</h5>
                      <span class="description-text">关注</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <h5 class="description-header">13,000</h5>
                      <span class="description-text">粉丝</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4">
                    <div class="description-block">
                      <h5 class="description-header">35</h5>
                      <span class="description-text">收藏</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
                <div class="row">
                  <li class="user-footer">
                    <div class="pull-right">
                      <a href="#" class="btn btn-primary btn-flat">退出登录</a>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isLogin: true
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

  .img-circle {
    cursor: pointer;
  }

  .user-action{
    float: right;
    height: 49px;
    margin-top: -14px;
    padding-top: 8px;
    text-align: center;
    position: relative;
  }

  .user-action {
    background-color: #e8e6e3;
    width: 112px;
  }

  .user-header {
    background-color: #ae225b!important;
  }


  nav .user-body .text-center a:hover{
    background: rgba(255,255,255,0);
  }

  .nav > li > a {
    padding: 5px 15px!important;
  }

  .user-footer a{
    margin-right: 10px;
  }
</style>
