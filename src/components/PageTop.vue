<template>
  <div class="row page-top">
    <div class="col-xs-2">
      <router-link to="/home">
        <img src="../assets/title.png" class="title">
      </router-link>

    </div>
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
              <img :src="userAvatarPath" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ userName }}</span>
            </a>
            <ul class="dropdown-menu">
              <div class="widget-user-header bg-aqua-active user-header">
                <h6 class="widget-user-desc text-center">{{ signature }}</h6>
              </div>
              <router-link to="/personal">
                <div class="widget-user-image">
                  <img class="img-circle" :src="userAvatarPath" alt="User Avatar">
                </div>
              </router-link>
              <div class="box-footer">
                <div class="row">
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <router-link to="/following">
                        <h5 class="description-header">{{ followingCount }}</h5>
                        <span class="description-text">关注</span>
                      </router-link>

                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <router-link to="/follower">
                        <h5 class="description-header">{{ followerCount }}</h5>
                        <span class="description-text">粉丝</span>
                      </router-link>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4">
                    <div class="description-block">
                      <router-link to="/collection">
                        <h5 class="description-header">{{ collectionCount }}</h5>
                        <span class="description-text">收藏</span>
                      </router-link>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
                <div class="row user-footer">
                  <!--<li class="user-footer">-->
                    <router-link class="pull-left" to="/uploadMenu">
                      <button class="btn btn-primary btn-flat">上传作品</button>
                    </router-link>
                    <router-link class="pull-right" to="/updateUser">
                      <button class="btn btn-primary btn-flat">修改资料</button>
                    </router-link>
                  <!--</li>-->
                </div>
              </div>
            </ul>
          </li>
          <i class="fa fa-sign-out" alt="退出登录" @click="toLogin"></i>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'pageTop',
  data () {
    return {
      isLogin: true,
      id: '',
      imgPath: '',
      userAvatarPath: '',
      _id: '',
      account: '',
      avatar: '',
      collectionCount: 0,
      followerCount: 0,
      followingCount: 0,
      password: '',
      signature: '',
      productionCount: 0,
      userName: ''
    }
  },
  created: function() {
    var vm = this
    vm.getMessage()
  },
//  mounted: function() {
//    var vm = this
////    vm.imgPath = JSON.parse(localStorage.getItem('userAvatar')).toString()
////    vm.userAvatarPath = require('../../../../background/userAvatar'+vm.imgPath)
//  },
  methods: {
    getMessage() {
      var vm = this
      vm.id = JSON.parse(localStorage.getItem('id'))
      vm._id = vm.id._id
      vm.account = vm.id.account
      vm.avatar = vm.id.avatar
      vm.collectionCount = vm.id.collectionCount
      vm.followerCount = vm.id.followerCount
      vm.followingCount = vm.id.followingCount
      vm.password = vm.id.password
      vm.productionCount = vm.id.productionCount
      vm.userName = vm.id.userName
      vm.signature = vm.id.signature
      localStorage.setItem('userAvatar',JSON.stringify(vm.avatar))
      vm.imgPath = JSON.parse(localStorage.getItem('userAvatar')).toString()
      vm.userAvatarPath = require('../../../../background/userAvatar'+vm.imgPath)
    },
    toLogin() {
      var vm = this
      vm.$router.push({ path: '/login' })
    },
    toRegister() {
      var vm = this
      vm.$router.push({ path: '/register' })
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

  .input-group {
    margin-top: 8px;
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

  .title {
    cursor: pointer;
  }

  a:hover {
    background: rgba(255,255,255,0);
  }

  .description-header {
    margin: 0;
    padding: 0;
    color: #2c3e50;
    font-weight: 600;
    font-size: 16px;
  }

  .description-text {
    text-transform: uppercase;
    color: #2c3e50;
  }

  .user-footer {
    padding-left: 15px;
    padding-right: 15px;
  }

  .pull-left {
    margin-left: 10px;
  }

  .fa-sign-out {
    color: #922;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }

</style>
