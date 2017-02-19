<template>
  <div>
    <div class="pagetop row">
      <div class="col-xs-3">多吃一碗</div>
      <div class="col-xs-6"></div>
      <div class="col-xs-3 toRegiest">已有账号？<a @click="toLogin">登录</a></div>
    </div>
    <div class="register">
      <div class="message">注册一个新账号</div>
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
          <a class="btn btn-primary submit" @click="test" href="javascript:void(0)">注册</a>
        </form>
    </div>
  </div>
</template>

<script>
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
      test() {
        layer.msg('登录成功')
      },
      toLogin(){
        var vm = this
        vm.$router.replace({ path: '/login' })
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
</style>
