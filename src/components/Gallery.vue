<template>
  <div>
    <div class="box box-solid">
      <div class="box-header">
        <h3 class="box-title">新菜谱</h3>
        <div class="box-tools pull-right">
          <span class="label label-danger">8 New</span>
          <div class="right-action">
            <div class="icon left-arrow left-arrow-disable">&lt;</div>
            <div class="icon right-arrow">&gt;</div>
          </div>
        </div>
      </div>
      <!-- /.box-header -->
      <div class="box-body no-padding">
        <ul class="photo-gallery clearfix">
          <li class="col-md-2">
            <img src="../assets/lastest/1.jpg" class="img-circle">
            <div class="text">
              <div class="inner">日式拉面</div>
            </div>

          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/2.jpg">
            <div class="text">
              <div class="inner">日式拉面</div>
            </div>
            <div class="tags">
                <span class="label-holder">
                  <span class="label label-info">早餐</span>
                </span>

                <span class="label-holder">
                  <span class="label label-danger">fruits</span>
                </span>

                <span class="label-holder">
                  <span class="label label-success">toast</span>
                </span>

                <span class="label-holder">
                  <span class="label label-warning arrowed-in">diet</span>
                </span>
            </div>
          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/3.jpg">
            <div class="text">
              <div class="inner">Jane</div>
            </div>
          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/4.jpg">
            <a href="#"><div class="text">
              <div class="inner">John</div></div></a>
          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/5.jpg">
            <a href="#">Alexander</a>
          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/6.png">
            <a href="#">Sarah</a>
          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/7.jpg">
            <a href="#">Nora</a>
          </li>
          <li class="col-md-2">
            <img src="../assets/lastest/8.jpg">
            <a href="#">Nadia</a>
          </li>
        </ul>
        <!-- /.users-list -->
      </div>
      <!-- /.box-body -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .photo-gallery > li {
    /*width: 20%;*/
    float: left;
    padding: 10px;
    text-align: center;
    position: relative;
  }

  .photo-gallery>li img {
    border-radius: 50%;
    max-width: 100%;
    z-index: 5;
    min-height: 90px;
    min-width: 90px;
    border: 3px solid;
    border-color: transparent;
    border-color: rgba(255, 255, 255, 0.2);
  }

  .photo-gallery>li a{
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .photo-gallery>li:hover .text{
    opacity: 1;
  }

  .photo-gallery .text {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    text-align: center;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.55);
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }

  .photo-gallery .text>.inner {
    position: relative;
    top: 50%;
    margin-top: -25%;
    padding: 4px 0;
    display: inline-block;
    vertical-align: middle;
    max-width: 90%;
    cursor: pointer;
    z-index: 100;
  }
</style>
