<template>
  <div class="col-sm-10">
    <h4>基本信息</h4>
    <form class="form-horizontal">
      <div class="box-body">
        <!--昵称-->
        <div class="form-group">
          <label for="userName" class="col-sm-2 control-label">昵称</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="userName"
                   placeholder="昵称"
                   v-model="userName">
          </div>
        </div>
        <!--密码-->
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password"
                   placeholder="用户密码"
                   v-model="password">
          </div>
        </div>
        <!--确认密码-->
        <div class="form-group">
          <label for="confirmPassword" class="col-sm-2 control-label">确认密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="confirmPassword"
                   placeholder="用户密码"
                   v-model="confirmPassword">
          </div>
        </div>
        <!--个性签名-->
        <div class="form-group">
          <label for="signature" class="col-sm-2 control-label">个性签名</label>
          <div class="col-sm-10">
              <textarea type="text" class="form-control" id="signature"
                     placeholder="请填写个性签名"
                     v-model="signature" @keyup="changeSign"></textarea>
            <p class="help-block">请不要超过70个字,还剩{{ remain }}个字</p>
          </div>
        </div>
        <!--头像-->
        <div class="form-group">
          <label for="avatarInputFile" class="col-sm-2 control-label">头像</label>
          <div class="col-sm-10">
            <img class="img-circle"
                 id="preview"
                 :src="userAvatarPath"
                 alt="User Avatar">
            <input type="file" id="avatarInputFile"
                   accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                   @change="updateAvatar">
            <!--<p class="help-block">Example block-level help text here.</p>-->
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="col-sm-2"></div>
      <div class="box-footer col-sm-10">
        <button type="submit" class="btn btn-default"
                @click="cancel">取消</button>
        <button type="submit" class="btn btn-info pull-right"
                @click="save">确定修改</button>
      </div>
      <!-- /.box-footer -->
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'user',
  data () {
    return {
      id: '',
      userName: '',
      password: '',
      confirmPassword: '',
      signature: '',
      imgPath: '',
      userAvatarPath: '',
      remain: ''
    }
  },
  mounted: function() {
    var vm = this
    vm.getMessage()
  },
//  mounted: function() {
//    var vm = this
//    vm.imgPath = JSON.parse(localStorage.getItem('userAvatar')).toString()
//    vm.userAvatarPath = require('../../../../background/userAvatar'+vm.imgPath)
//    vm.remain = 70 - vm.signature.length
//  },
  methods: {
    getMessage() {
      var vm = this
      vm.id = JSON.parse(localStorage.getItem('id'))
      console.log(vm.id)
      vm._id = vm.id._id
      vm.account = vm.id.account
      vm.avatar = vm.id.avatar
      vm.password = vm.id.password
      vm.confirmPassword = vm.id.password
      vm.userName = vm.id.userName
      vm.signature = vm.id.signature
      localStorage.setItem('userAvatar',JSON.stringify(vm.avatar))
      vm.imgPath = JSON.parse(localStorage.getItem('userAvatar')).toString()
      vm.userAvatarPath = require('../../../../background/userAvatar'+vm.imgPath)
    },
    // 修改个性签名
    changeSign() {
      var vm = this
      vm.remain = 70 - vm.signature.length
      if(vm.remain<0) {
        layer.msg('超过字数限制')
      }
    },
    // 修改头像,头像预览
    updateAvatar() {
      var vm = this
      var preview = document.getElementById('preview');
      var img = document.getElementById('avatarInputFile').files[0]
      var reader = new FileReader()
      reader.onloadend = function () {
        preview.src = reader.result
      }
      if (img) {
        reader.readAsDataURL(img)
      } else {
        preview.src = ""
      }
    },
    // 确定修改
    save() {
      var vm = this
      var data = new FormData()
      var img = document.getElementById('avatarInputFile').files[0]
      data.append('upload',document.getElementById('avatarInputFile').files[0])
      if(img !== undefined) {
        vm.$http.post('/api/upDate/userAvatar',data).then((response) => {
            console.log(response.data)
            if(response.data.type == 'SUCCESS') {
              localStorage.setItem('userAvatar',JSON.stringify(response.data.msg))
              vm.avatar = response.data.msg
              var userData = {
                _id: vm._id,
                userName: vm.userName,
                password: vm.password,
                signature: vm.signature,
                avatar: vm.avatar
              }
              vm.$http.post('/api/update/userMessage',userData).then((response) => {
                  console.log(response.data)
                  if(response.data.type == 'SUCCESS') {
                    layer.msg(response.data.msg)
                    localStorage.setItem('id',JSON.stringify(response.data.data))
                  }
                  else {
                    layer.msg('更新失败')
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
            else {
              layer.msg('更新失败')
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
    // 取消修改
    cancel() {
      var vm = this
//      vm.$router.push({ path:'/home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-circle {
  width: 90px;
  height: 90px;
  border: 3px solid #fff;
}

  label {
    color: #737373;
    font-weight: normal;
  }

  h4 {
    font-weight: bold;
  }
</style>
