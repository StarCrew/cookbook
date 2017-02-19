<template>
<div>
  <div class="pagetop row">
    <div class="col-xs-3">多吃一碗</div>
    <div class="col-xs-6"></div>
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
        <a class="btn btn-primary submit" @click="test" href="javascript:void(0)">登录</a>
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
    test() {
      var vm = this
      vm.$http.get('/api/login/getAccount')
        .then((response) => {
          console.log(response)
          let params = {
            account: vm.account,
            password: vm.password
          }
          return vm.$http.post('/api/login/createAccount',params)
        })
        .then((response) => {
          console.log(response)
          layer.msg('登录成功')
        })
        .catch ((reject) => {
          console.log(reject)
       })

    },
    toRegiest(){
      var vm = this
      vm.$router.replace({ path: '/register' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pagetop {
    padding: 20px 40px;
    border-bottom: 1px solid #eee
  }
  .logoimg{
    width: 280px;
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
</style>
