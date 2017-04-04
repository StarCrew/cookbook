<template>
<div>
  <div class="pagetop row">
    <div class="col-xs-1"></div>
    <div class="col-xs-8"><img src="../assets/title.png" class="title" @click="toHome"></div>
    <div class="col-xs-3 toRegiest">没有账号？<a @click="toRegiest">注册</a></div>
  </div>
  <div class="row login">
    <div class="message">经常登录的同志才能快高长大</div>
    <div class="col-xs-2"></div>
    <div class="col-xs-3">
      <img src="../assets/logo.png" class="logoimg">
    </div>
    <div class="login-box col-xs-7">
      <form :model="loginModel" label-width="50px" class="loginforms">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-fw fa-user"></i>
            </div>
            <input type="text" class="form-control" placeholder="账号"
                   v-model="loginModel.account" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-fw fa-lock"></i>
            </div>
            <input type="password" class="form-control" placeholder="密码"
                   v-model="loginModel.password"
                   @keyup.enter="" required="required">
          </div>
        </div>
        <a class="btn btn-primary submit" @click="login" href="javascript:void(0)">登录</a>
      </form>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'login',
  data () {
    return {
      loginModel: {
        account: '',
        password: ''
      }
    }
  },

  methods: {
    // 登录
    login() {
      var vm = this
      if(vm.loginModel.account.length == 0||vm.loginModel.password.length == 0) {
        layer.msg('用户信息不完整')
      }
     else {
        let params = {
          account: vm.loginModel.account,
          password: vm.loginModel.password
        }
        vm.$http.post('/api/login/getAccount',params)
          .then((response) => {
            console.log(response.data.data)
            if(response.data.type == "SUCCESS") {
              layer.msg('登录成功')
              vm.$router.push({ path:'/home' })
              localStorage.setItem('id',JSON.stringify(response.data.data))
            }
            else if(response.data.type == "ERROR") {
              layer.msg(response.data.msg)
            }
          })
          .then((response) => {
            // 错误响应
            console.log(response)
          })
          .catch ((reject) => {
            console.log(reject)
          })
      }


    },
    // 跳转到登录页
    toRegiest(){
      var vm = this
      vm.$router.push({ path: '/register' })
    },
    // 跳转到主页
    toHome() {
      var vm = this
      vm.$router.push({ path: '/home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pagetop {
    padding: 10px 40px;
    border-bottom: 1px solid #eee
  }

  .message{
    /*clear: both;*/
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 40px;
  }

  .login {
    padding: 40px 100px;
  }

  .title {
    height: 50px;
  }
  .toRegiest {
    height: 50px;
    line-height: 50px;
  }
</style>
