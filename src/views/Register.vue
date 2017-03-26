<template>
  <div>
    <div class="pagetop row">
      <div class="col-xs-3"><img src="../assets/title.png" class="title"></div>
      <div class="col-xs-6"></div>
      <div class="col-xs-3 toLogin">已有账号？<a @click="toLogin">登录</a></div>
    </div>
    <div class="register row">
      <div class="message">注册一个新账号</div>
      <div class="col-xs-2"></div>
      <div class="col-xs-3 col-xs-7">
        <img src="../assets/logo.png" class="logoimg">
      </div>

        <form :model="registerModel" label-width="50px" class="registerforms">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-fw fa-user"></i>
              </div>
              <input type="text" class="form-control" placeholder="请输入账号(英文)"
                     v-model="registerModel.account" required="required">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-fw fa-lock"></i>
              </div>
              <input type="password" class="form-control" placeholder="请输入密码(不少于六位)"
                     v-model="registerModel.password"
                     @keyup.enter="" required="required">
            </div>

          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-fw fa-lock"></i>
              </div>
              <input type="password" class="form-control" placeholder="请确认密码"
                     v-model="registerModel.confirm"
                     @keyup.enter="" required="required">
            </div>

          </div>
          <a class="btn btn-primary submit" @click="register" href="javascript:void(0)">注册</a>
        </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data () {
      return {
        registerModel: {
          account: '',
          password: '',
          confirm: ''
        }
      }
    },

    methods: {
      register() {
        var vm = this
        if(vm.registerModel.account.length == 0 ||
           vm.registerModel.password.length == 0 ||
           vm.registerModel.confirm.length == 0) {
          layer.msg('用户信息不完整')
        }
        else if(vm.registerModel.password != vm.registerModel.confirm) {
          layer.msg('密码不一致')
        }
        else {
          let params = {
            account: vm.registerModel.account,
            password: vm.registerModel.password,
          }
          vm.$http.post('/api/login/getAccount',params).then((response) => {
            console.log(response.data)
            if(response.data.type == "SUCCESS") {
              layer.msg('该账号已经存在，请重新选一个')
            }
            else{
              vm.$http.post('/api/login/createAccount',params)
                .then((response) => {
                  console.log(response.data)
                  if(response.data.type == "SUCCESS") {
                    layer.msg('注册成功')
                    vm.$router.push({ path:'/login' })
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
      toLogin(){
        var vm = this
        vm.$router.push({ path: '/login' })
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

  .message{
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 40px;
  }

  .register {
    padding: 40px;
  }

  .registerforms {
    margin: 0 auto;
    width: 300px;
  }


  .toLogin {
    height: 50px;
    line-height: 50px;
  }
</style>
