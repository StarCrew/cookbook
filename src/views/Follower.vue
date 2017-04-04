<template>
  <div>

    <div class="box-header with-border">
      <h3 class="box-title">全部粉丝</h3>

    </div>
    <!-- /.box-header -->
    <div class="box-body no-padding">
      <ul class="users-list clearfix">
        <li>
          <div class="userAvater">
            <img :src="userAvatarPath" alt="User Image">
          </div>
          <div class="followMesage">
            <a class="users-list-name" href="#">伊东歌词太郎子</a>
            <span class="check"><i class="fa fa-fw fa-check"></i>已关注</span>
            <span class="signature">简介：谁家唱断的锦瑟丝弦谁比肩天涯仗剑</span>
            <a class="cancelFollow"><i class="fa fa-fw fa-odnoklassniki"></i> 移除粉丝</a>
          </div>
        </li>
        <li>
          <div class="userAvater">
            <img src="../../../../background/userAvatar/648ac377jw8exk9g0sx1gj20k20k20u4.jpg" alt="User Image">
          </div>
          <div class="followMesage">
            <a class="users-list-name" href="#">咕哒子</a>
            <span class="check"><i class="fa fa-fw fa-plus"></i>加关注</span>
            <span class="signature">简介：我最酷了吧</span>
            <a class="cancelFollow"><i class="fa fa-fw fa-odnoklassniki"></i> 移除粉丝</a>
          </div>
        </li>
        <li>
          <div class="userAvater">
            <img src="../../../../background/userAvatar/005NswPRjw8fdek5mljhpj30e60e80t6.jpg" alt="User Image">
          </div>
          <div class="followMesage">
            <a class="users-list-name" href="#">意大利</a>
            <span class="check"><i class="fa fa-fw fa-plus"></i>加关注</span>
            <span class="signature">简介：一生只推意大利面</span>
            <a class="cancelFollow"><i class="fa fa-fw fa-odnoklassniki"></i> 移除粉丝</a>
          </div>
        </li>
        <li>
          <div class="userAvater">
            <img src="../../../../background/userAvatar/92bac459jw8f3w9b1k84dj20ro0rodh6.jpg" alt="User Image">
          </div>
          <div class="followMesage">
            <a class="users-list-name" href="#">渡边鱼子酱</a>
            <span class="check"><i class="fa fa-fw fa-check"></i>已关注</span>
            <span class="signature">简介：土豆和马铃薯，美少女和我</span>
            <a class="cancelFollow"><i class="fa fa-fw fa-odnoklassniki"></i> 移除粉丝</a>
          </div>
        </li>
      </ul>
      <!-- /.users-list -->
    </div>
    <!-- /.box-body -->
    <div class="text-center">
      <a href="javascript:void(0)" class="uppercase">View</a>
    </div>
    <!-- /.box-footer -->
  </div>
</template>

<script>
  export default {
    name: 'follower',
    data () {
      return {
        userAvatarPath: require('../../../../background/userAvatar/1490775770817.jpg')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:hover {
    background: rgba(255,255,255,0);
  }

  .users-list>li {
    background: #f2f2f5;
    width: 290px;
    height: 100px;
    margin: 6px 0 0 6px;
    border-radius: 2px;
    padding: 16px 16px 16px 16px;
  }

  .users-list>li img {
    width: 60px;
    height: 60px;
    float: left;
  }

  .userAvater {
    width: 66px;
    height: 68px;
    float: left;
    padding-top: 9px;
    border-right: 1px solid #d9d9d9;
    cursor: pointer;
  }

  .followMesage {
    margin-left: 82px;
    text-align: left;
  }

  span {
    display: block;
  }

  .signature {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #999;
    font-size: 12px;
  }

  .cancelFollow {
    float: right;
    padding: 6px;
    cursor: pointer;
    color: #696e78;
    border-color: #d9d9d9;
    background: #ffffff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    font-size: 12px;
    height: 24px;
    line-height: 15px;
    border-radius: 2px;
    text-align: center;
    display: inline-block;
  }
</style>
