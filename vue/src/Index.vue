<template>
  
      <el-container>
        <el-aside class='el-menu-side' style="width: auto;">         
            
            <el-menu
            default-active="2"
            class="el-menu-vertical-side"
            @open="handleOpen"
            @close="handleClose" collapse="isCollapse">
            <el-menu-item index="2" @click="handleSide" style="padding-left: 0px;line-height: 28px;">
       
                <i class="el-icon-uspay-payment el-menu-logo"></i>  
                <br/>           
                <em class="el-menu-title">收银</em>
        
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <i>导航一</i>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>

            <el-menu-item index="4" @click='memberCenter'>
              <i class="el-icon-uspay-poweroff"></i>
              <br/>

              <span slot="title">退出</span>
            </el-menu-item>
           

          </el-menu>


        </el-aside>
        <el-main>Main</el-main>
      </el-container>

</template>
<style type="text/css" src="./assets/icon/iconfont.css"></style>
<style scoped>

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 62px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  .el-container {
    height: 100%;
    padding: 0;margin:0;
  }
  .el-header {
     padding: 0px; 
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    min-height: 64px;
    border-bottom: solid 1px #e6e6e6;
   background-color:#545c64;
   text-color:#fff;
   active-text-color:#ffd04b;
  }
  .el-menu--horizontal{border-bottom: none;}
  .el-menu-top{background-color:#545c64;
  text-color:#fff;active-text-color:#ffd04b; }
  .el-menu-vertical-side:not(.el-menu--collapse){width:156px;height: 100%;
    min-height: 400px;line-height:0px;}
  .el-menu--collapse{width: 88px;}
  .el-menu-item{height: 80px;font-size: 16px;padding-top: 10px;text-align: center;}
  .el-menu-item .el-menu-logo{font-size: 38px;}
  .el-menu-item .el-menu-title{padding: 0px;margin:0px;font-family: "PingFang SC";font-style: normal;position: relative;right: -6px;}
  .el-menu-item.is-active {
     color: #909399;
  }
  .el-main{width: 100%;height: 100%;background-color: white;}
  .el-menu--collapse{height: 100%;}

</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSide(){
        this.isCollapse = !this.isCollapse;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      memberCenter(){
        this.delUser();
        window.location.href = "./login.html";
      }
    }, 
    created:function(){
      console.log("created钩子");
      this.getUser();
      let user = this.config;
      console.log(user);
    }
  };
</script>