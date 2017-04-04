<template>
  <div class="col-md-8">
    <div class="box-header with-border">
      <h3 class="box-title">我的收藏</h3>

    </div>
    <!-- /.box-header -->
    <div class="box-body no-padding">
      <ul class="users-list clearfix">
        <li>
          <div class="header">
            <div class="userAvater">
              <img :src="userAvatarPath" alt="User Image">
            </div>
            <div class="followMesage">
              <div class="users-list-title" href="#">营养午餐</div>
              <span class="date"><i class="fa fa-clock-o"></i> 创建于2017-3-23</span>
              <span class="synopsis">简介：美味到不行的营养均衡套餐</span>
            </div>
          </div>

          <div class="cover">
            <img src="../assets/lastest/3.jpg">
          </div>
          <div class="feed_handle">
            <ul>
              <li><i class="fa fa-star-o"></i>已收藏</li>
              <li><i class="fa fa-commenting-o"></i> 15</li>
              <li><i class="fa fa-thumbs-o-up"></i> 25</li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- /.users-list -->
    </div>
    <!-- /.box-body -->
    <div class="text-center">
      <a href="javascript:void(0)" class="uppercase">View</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collection',
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

  .users-list-title {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    font-weight: bolder;
  }

  .users-list {
    padding: 20px 20px 4px;
  }

  .users-list>li {
    border: 1px #e9e9e9 solid;
    width: 100%;
    height: 450px;
    margin-bottom: 10px;
    border-radius: 2px;
    padding: 0px;
  }

  .date {
    color: #737373;
    font-size: 12px;
    text-align: right;
  }

  .users-list>li>img {
    width: 60px;
    height: 60px;
    float: left;
  }

  .header {
    overflow: auto;
    border-bottom: 1px solid #d9d9d9;
    padding: 0px 16px 0px 16px;
  }

  .userAvater {
    width: 66px;
    height: 68px;
    float: left;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-right: 9px;
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

  .synopsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
  }

  .feed_handle {
    border-top: 1px solid #d9d9d9;
    height: 38px;
  }

  .feed_handle ul li {
    display: inline-block;
    width:30%;
    height: 38px;
    line-height: 38px;
  }

  .feed_handle ul li:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }

  .cover {
    margin: 15px;
    height: 310px;
    overflow: hidden;
  }

  .cover img{
    border-radius: 0;

    width: 100%;
  }
</style>
