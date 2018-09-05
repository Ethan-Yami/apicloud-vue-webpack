<template>
  

    <el-container>
      <el-header>

        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="16" style="  display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;align-items: center;">

              <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect"  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
              </el-menu>

          </div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

      </el-header>
      <el-container>
        <el-aside class='el-menu-side' style="width: auto;">
         
              <el-menu default-active="1-4-1" class="el-menu-vertical-side" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

                <el-menu-item index="8" @click="handleSide">
                  <i class="el-icon-menu"></i>
                  <span>收起菜单</span>                 
                </el-menu-item>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                  </template>
                  <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>



        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>


</template>
<style>
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
  .el-menu-vertical-side:not(.el-menu--collapse){width:200px;height: 99%;
    min-height: 400px; }

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
        isCollapse: true,
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