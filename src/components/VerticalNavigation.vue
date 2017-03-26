<template>
  <div>
    <ul class="vertical-menu">
      <li v-for="(item,index) in navigation" class="vertical-item">
        <a><i class="menu-icon"
              v-bind:style="{ backgroundPositionY:  index*(-40) + 'px' }"></i>
          <span class="menu-name">{{ item.name }}</span>
          <i v-if="item.sub" class="icon arrow-icon"></i>
          <div v-if="item.sub" class="vertical-menu-sub">
            <ul class="sub">
              <li v-for="item in item.sub" class="sub-cat">
                <div class="row">
                  <span class="col-xs-2 sub-title" v-if="item.subcategory"><a>{{ item.subcategory }}</a></span>
                  <div class="col-xs-10">
                    <span v-for="item in item.subname" class="col-xs-3 sub-name">
                      <a :title="item">{{ item }}</a>
                    </span>
                  </div>
                </div>
                </li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import datas from '../data.json'
export default {
  name: '',
  data () {
    return {
      navigation:[],
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      fontSize:12
    }
  },
  created: function() {
    var vm = this
    vm.navigation = datas
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .menu-icon {
  display: inline-block;
  vertical-align: middle;
  background: none no-repeat 0;
  background-image: url(../assets/vertical3.png);
  text-indent: 49px;
  width: 32px;
  height: 32px;
  margin-right: 14px;
}
  .vertical-menu>li>a:hover{
    background: rgba(255,255,255,0);
  }
 .vertical-menu a:hover>span {
   background: #922;
 }
  .icon {
    display: inline-block!important;
    background: none no-repeat 0;
    background-image: url(../assets/icon.png);
    text-indent: -999em;
  }

  .vertical-item {
    position: relative;
  }

  .arrow-icon {
    position: absolute;
    left: 110px;
    bottom: 8px;
    background-position: -10px -60px;
    width: 10px;
    height: 15px;
  }

  .vertical-menu-sub {
    display: none;
    position: absolute;
    left: 140px;
    top: 0px;
    background-color: #e8e6e3;
    padding: 20px;
    width: 400px;
    z-index: 100;
  }

 .sub-title{
   padding-right: 0;
 }

 .vertical-menu .vertical-item:hover .vertical-menu-sub{
    display: block;
  }

  .sub-cat {
    padding: 11.2px 0;
    font-size: 12px;
  }

  .sub-cat .sub-name{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .sub-cat:not(:last-child) {
    border-bottom: 1px solid #c7c3be;
  }

  .sub-name {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
</style>
