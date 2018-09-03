exports.install = function (Vue, options) {

    Vue.prototype.config = {
    	url:"http://192.168.126.139",
    	mode:"development",
    	user:{},
    };

    Vue.prototype.checkUser = function(){


    };

    Vue.prototype.saveUser = function(user){
    	var key = 'user';
	/*	var user = {};
		user.name = 'kenny';
		user.email = 'kenny@163.com';*/
		$api.setStorage(key, user);
		user = $api.getStorage(key);
		/*console.log('data--->'+user);*/
		/*this.config.user = user;*/
    };

    Vue.prototype.getUser = function(){
   		var key = 'user';
		user = $api.getStorage(key);
		/*console.log('data--->'+user);*/
		/*this.config.user = user;*/

    };
    
};