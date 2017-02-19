<template>
  <div class="container">
    <top></top>
    <div class="row page">
      <div class="col-xs-2">
        <ver></ver>
      </div>
      <div class="col-xs-7">
        <div class="box box-solid news">
          <div class="box-header">
            <h3 class="box-title">对食物的喜好强烈的人对人的喜好也就很直接</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <img src="../assets/news/image1.jpg" alt="多人美味">
                  <div class="detail">
                    <a class="detail-title">打火锅</a>
                    <div class="detail-people">100人做过</div>
                    <div class="detail-desc">
                      冬天，最适宜打火锅，这样，就能把一整年的情绪，通通随着蒸汽随空飘散
                    </div>
                  </div>
                  <div class="carousel-caption">
                    多人美味
                  </div>

                </div>
                <div class="item">
                  <img src="../assets/news/image2.jpg" alt="酱肘子">
                  <div class="detail">
                    <a class="detail-title">大爱酱肘子</a>
                    <div class="detail-people">100人做过</div>
                    <div class="detail-desc">
                      超级难做，虽然说是牛排，但是图片就是酱肘子啊我能说什么，
                      好了，有空的时候约上朋友，亲自下厨做个酱肘子
                    </div>
                  </div>
                  <div class="carousel-caption">
                    酱肘子
                  </div>
                </div>
                <div class="item">
                  <img src="../assets/news/image3.jpg" alt="一人食">
                  <div class="detail">
                    <a class="detail-title">单身狗的冬至</a>
                    <div class="detail-people">100人做过</div>
                    <div class="detail-desc">
                      窗外下着雨，屋里开着暖气，我喝着羊肉汤，吃着凉拌羊肉和饺子，
                      蘸着自己做的油泼辣子，脚下趴着小刀和奶油，我的冬至这样过
                    </div>
                  </div>
                  <div class="carousel-caption">
                    一个人也不能把胃饿坏了
                  </div>
                </div>
              </div>
              <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                <span class="fa fa-angle-left"></span>
              </a>
              <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                <span class="fa fa-angle-right"></span>
              </a>
            </div>
          </div>
          <!-- /.box-body -->
        </div>
        <gallery></gallery>
      </div>
      <div class="col-xs-3">
        <pop></pop>
      </div>
    </div>


  </div>
</template>

<script>
  import PageTop from '../components/PageTop.vue'
import VerticalNavigation from '../components/VerticalNavigation.vue'
import Gallery from '../components/Gallery.vue'
import PopChart from '../components/PopChart.vue'
export default {
  name: 'home',
  components: {
    'top': PageTop,
    'ver': VerticalNavigation,
    'gallery': Gallery,
    'pop': PopChart
  },
  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news a:hover {
    background: rgba(255,255,255,0);
  }

  .box {
    box-shadow: none    ;
  }

  .detail-title{
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail {
    position: absolute;
    max-width: 29%;
    display: inline-block;
    top: 0;
    bottom: 0;
    padding: 28px 28px 28px 21px;
    font-size: 12px;
    color: #333;
    height: 100%;
    background-color: #e8e6e3;
  }

  .detail a:hover{
    color: #922;
  }

  .detail-people {
    color: #999;
    line-height: 1;
  }

  .news .carousel-inner > .item > img{
    display: inline-block;
    max-width: 70%;
  }

  .carousel-indicators {
    left: 35%;
  }

  .detail-title {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .detail-desc {
    margin-top: 18px;
  }

  @media screen and (min-width: 768px){
    .carousel-caption {
      width: 70%;
      left: 0;
      right: 0;
    }
  }
</style>
