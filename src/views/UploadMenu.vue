<template>
  <div class="col-sm-10">
    <h4 class="upload-title">请上传菜谱</h4>
    <br>
    <div class="form-group">
      <label class="col-sm-3">请填写菜谱标题:</label>
      <div class="input-group col-sm-9">
        <div class="input-group-addon">
          <i class="fa fa-hand-peace-o"></i>
        </div>
        <input type="text" class="form-control" v-model="content.title">
      </div>
      <!-- /.input group -->
    </div>
    <div class="form-group">
      <label class="col-sm-3">请添加菜谱的简介:</label>
      <div class="col-sm-9" style="padding: 0;">
        <textarea class="form-control" type="text" v-model="content.synopsis"></textarea>
        <p class="help-block">还剩{{ remain }}个字</p>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-3">请添加菜谱的食材:</label>
      <div class="col-sm-9" style="padding: 0;">
        <textarea class="form-control" type="text" v-model="content.material"></textarea>
        <p class="help-block">还剩{{ remain }}个字</p>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-3">请添加菜谱的封面:</label>
      <div class="col-sm-9 cover" style="padding: 0;">
        <span class="mailbox-attachment-icon has-img">
          <img src="../assets/cover-default.jpg" alt="Cover" id="cover">
        </span>
        <div class="mailbox-attachment-info">
          <a class="mailbox-attachment-name hiddenUpload">
            <i class="fa fa-camera">
              <input type="file" name="image" class="upload" value=""
                     id="inputCover"
                     @change="updateCover"/>
            </i> 封面.png
          </a>
          <span class="mailbox-attachment-size">
          </span>
        </div>
      </div>
    </div>
    <div class="form-group" v-for="(item,index) in step">
      <label class="col-sm-3">步骤{{ index+1 }}:</label>
      <div class="col-sm-9">
        <textarea class="form-control description" type="text" placeholder="请添加描述"
                  v-model="item.description"
                  rows="5"></textarea>
        <p class="help-block">还剩{{ remain }}个字</p>
        <div class="cover">
          <span class="mailbox-attachment-icon has-img add">
            <img alt="illustration" :id="index" :class="item.illustration?'':'hideImg'">
            <i class="fa fa-plus-circle" @click="addImg(item)" :class="item.illustration?'hideIcon':''">
              <span class="add">添加图片</span>
              <input type="file" name="image" :id="'cookbookFile'+index"
                     class="cookbookFile upload"
                     @change="updateImg(index)"
                     @click = 'openImg(index)'
                     value="" />
            </i>
          </span>
          <div class="mailbox-attachment-info">
            <a class="mailbox-attachment-name hiddenUpload">
              <i class="fa fa-camera">
                <input type="file" name="image" :id="'cookbookFile'+index"
                       v-if="item.illustration"
                       class="cookbookFile upload"
                       @change="updateImg(index)"
                       @click = 'openImg(index)'
                       value="" />
              </i> 说明图片.png
            </a>
            <span class="mailbox-attachment-size">
              2.67 MB
            </span>
          </div>
        </div>
      </div>

    </div>
    <div class="form-group">
      <label class="col-sm-3"></label>
      <div class="col-sm-9">
        <div class="add">
          <div class="addStep" @click="addStep">
            <i class="fa fa-plus-circle">
              <span class="">添加步骤</span>
            </i>
          </div>
        </div>
      </div>

    </div>
    <div class="box-footer">
      <button type="submit" class="btn btn-info pull-right"
              @click="upLoadCover">确定</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'uploadMenu',
  data () {
    return {
      _id: '',
      content:  {
        title: '',
        synopsis: '',
        cover: '',
        material: '',
        step: []
      },
      step:[{
        description: '',
        illustration: ''
      }],
      remain: 100,
    }
  },
  mounted() {
    var vm = this
    vm.id = JSON.parse(localStorage.getItem('id'))
    vm._id = vm.id._id
    console.log(vm.step[0].illustration)
  },
  methods: {
    // 添加步骤
    addStep() {
      var vm = this
      if(vm.step[vm.step.length-1].description == ''||
         vm.step[vm.step.length-1].illustration == '') {
        layer.msg('请把上一步骤填写完整')
        console.log(vm.step[vm.step.length-1].description)
        console.log(true == '')
      }
      else {
        vm.step.push({
          description: '',
          illustration: ''
        })
      }

    },
    // 打开预览
    openImg(index) {
      var vm = this
      vm.step[index].illustration = true
    },
    // 预览图片
    updateImg(index) {
      var vm = this
      var preview = document.getElementById(index);
//      console.log(preview)
      var img = document.getElementById('cookbookFile'+index).files[0]
      var reader = new FileReader()
      reader.onloadend = function () {
        preview.src = reader.result
      }
      if (img) {
        reader.readAsDataURL(img)
      } else {
        preview.src = ""
        vm.step[index].illustration = false
      }
    },
    // 添加图片
    addImg () {

    },
    // 预览封面
    updateCover() {
      var vm = this
      var preview = document.getElementById('cover');
      var img = document.getElementById('inputCover').files[0]
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

    // 上传封面
    upLoadCover() {
      var vm = this
      var dataCover = new FormData()
      var coverImg = document.getElementById('inputCover').files[0]
      dataCover.append('upload',document.getElementById('inputCover').files[0])
      if(coverImg !== undefined) {
        vm.$http.post('/api/upDate/upLoadCookBook', dataCover).then((response) => {
            console.log(response.data.msg)
            if (response.data.type == 'SUCCESS') {
              vm.content.cover = response.data.msg
              vm.upLoadStepImg()
            }

          })
          .then((response) => {
            // 错误响应
            console.log(response)
          })
          .catch((reject) => {
            console.log(reject)
          })
      }
    },

    // 上传步骤图片
    upLoadStepImg(){
      var vm = this
      var j = 0
      console.log(vm.step.length)
      while(j<vm.step.length) {
        console.log('1')
        var imgId = 'cookbookFile'+j
        var data = new FormData()
        var img = document.getElementById(imgId).files[0]
        data.append('upload',document.getElementById(imgId).files[0])
        if(img !== undefined) {
          console.log('2')
          vm.$http.post('/api/upDate/upLoadCookBook', data).then((response) => {
              console.log(response.data.msg)
              if (response.data.type == 'SUCCESS') {
                vm.step[j].illustration = response.data.msg
                console.log(j)
                console.log(vm.step[j].illustration)
                console.log(response.data.msg)
                j++
                layer.msg(response.data.msg)
                if(j == vm.step.length-1){
                  console.log('hhh')
                  vm.save()
                }
              }
            })
            .then((response) => {
              // 错误响应
              console.log(response)
            })
            .catch((reject) => {
              console.log(reject)
            })
        }
      }
    },

    // 发布菜谱
    save() {
      var vm = this
      var content = {
        title: vm.content.title,
        synopsis: vm.content.synopsis,
        cover: vm.content.cover,
        material: vm.content.material,
        step: vm.step
      }
      var cookbook = {
        userId: vm._id,
        content: content
      }
      console.log(cookbook)


//      vm.$http.post('/api/login/createCookBook',cookbook)
//        .then((response) => {
//          console.log(response.data)
//          if(response.data.type == "SUCCESS") {
//
//          }
//          else if(response.data.type == "ERROR") {
//            layer.msg(response.data.msg)
//          }
//        })
//        .then((response) => {
//          // 错误响应
//          console.log(response)
//        })
//        .catch ((reject) => {
//          console.log(reject)
//        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label {
    color: #737373;
    font-weight: normal;
  }

  .cover {
    width: 200px;
    border: 1px solid #eee;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 0;
    position: relative;
  }

  a:hover {
    background: rgba(255,255,255,0);
    color: #666;
  }

  .hiddenUpload {
    position: relative;
  }

  .upload {
    opacity: 0;
    position: absolute;
    top: 0;
    z-index:10;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }


  .form-group {
    margin-bottom: 15px;
    overflow: hidden;
  }

  .upload-title {
    text-align: center;
  }

  .col-sm-3 {
    text-align: right;
  }

  .description {

  }

  .add {
    font-size: 20px;
    line-height: 80px;
    cursor: pointer;
  }

  .fa-plus-circle{
    width: 100%;
  }

  .add {
    /*width: 100%;*/
  }

  .addStep {
    border: 1px #e9e9e9 solid;
    display: block;
    text-align: center;
    /*color: #666;*/
    height: 34px;
    line-height: 34px;
    width: 100px;
    border-radius: 3px;
    background: #d22a15;
    color: #ffffff;
  }

  .addStep .fa {
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }

  .hideImg {
    visibility: hidden;
    height: 0!important;
    position: absolute;
  }

  .hideIcon {
    visibility: hidden;
    height: 0!important;
    position: absolute;
  }
</style>
