<template>
  <div class="box box-solid">
    <div class="box-header with-border">
      <h3 class="box-title">排行版</h3>

      <div class="box-tools">
        <button type="button" class="btn btn-box-tool" data-widget="collapse">
          <i class="fa fa-minus"></i>
        </button>
      </div>
    </div>
    <div class="box-body no-padding">
      <ul class="nab nav-pills nav-stacked">
        <li v-for="(item,index) in pop">
          <span class="popnum">{{ index }}</span>
          <a href=""><span class="popname">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      pop: [{
        name: '家常菜'
      },{
        name: '汤圆'
      },{
        name: '烘焙'
      },{
        name: '蛋挞'
      },{
        name: '蔬菜'
      },{
        name: '面食'
      },{
        name: '早餐'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-stacked > li {
    height: 27px;
  }

  .nav-stacked > li > a{
    color: #922;
  }

  .nav-stacked > li > a:hover{
    color: #fff;
    background: #922;
  }

  .popnum {
    display: inline-block;
    width: 21px;
    color: #909090;
    padding-right: 7px;
  }
</style>
