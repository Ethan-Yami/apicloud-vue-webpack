<template>
  <div id="out">

    <div class="middle">
       
       <div id="inner">
          
          <el-form :model="accountForm" status-icon :rules="rules" ref="accountForm" label-width="40px" style="padding-top: 66px;">
 
          <el-form-item label="账号" prop="account">
            <el-input v-model.number="accountForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="accountForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-radio-group v-model="accountForm.permission" size="medium">
              <el-radio border label="root">管理员</el-radio>
              <el-radio border label="employee">员工</el-radio>
            </el-radio-group>
          </el-form-item>
          
          <el-form-item style="text-align: center;">
            <el-button type="primary" @click="handleSign('accountForm')">登录系统</el-button>
          </el-form-item>
        </el-form>
    

        </div>
    </div>
   

  </div>
</template>
<style>
  #out{width:100%;height:100%;background-image:url('./images/4.jpg'); 
    background-repeat:no-repeat; background-size:100% 100%;
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;}
  .middle {
    display: table-cell;
    vertical-align: middle;
  }
  #inner{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    max-width: 440px;
    width: calc(100% - 40px);
    padding: 44px;
    margin-bottom: 28px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 3px rgba(0,0,0,.55);
    -moz-box-shadow: 0 2px 3px rgba(0,0,0,.55);
    box-shadow: 0 2px 3px rgba(0,0,0,.55);
    border: 1px solid #818c94;
    border: 1px solid rgba(0,0,0,.4);
    min-width: 320px;
    min-height: 338px;
   
  }

</style>
<script>

  export default {

    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else{
          callback();
        }       
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
        
          callback();
        }
      };     
     return {
      accountForm: {
        account: '',
        password: '',
        permission:"root"
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],      
        account: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
    },
    methods:{
      handleSign(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log('23323 submit!!');              
              api.alert("HRLLO");
              api.ajax({
                url: 'http://192.168.1.82/api/index',
                method: 'post',
                data: {
                  values:this.accountForm,
                }
              },function(ret, err) {
                  if (ret) {
                      api.alert({ msg: JSON.stringify(ret) });
                  } else {
                      api.alert({ msg: JSON.stringify(err) });
                  }
              });


          } else {            
            console.log('error submit!!');
            return false;
          }
        });
        //alert(JSON.stringify(this.accountForm));
      }
    }
  }
</script>