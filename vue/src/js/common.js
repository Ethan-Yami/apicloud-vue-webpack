exports.install = function (Vue, options) {

    Vue.prototype.config = {
    	url:"http://192.168.126.139",
    	mode:"development",
    	user:{},
    	server:{},
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
		this.config.user.id = user.id;
		this.config.user.username = user.username;
		this.config.user.salt = user.salt;

    };

    Vue.prototype.getUser = function(){
   		var key = 'user';
		user = $api.getStorage(key);
		console.log(user);
		if(undefined!=user && false!=user){
			this.config.user.id = user.id;
			this.config.user.username = user.username;
			this.config.user.salt = user.salt;
		}
    };

    Vue.prototype.delUser = function(){
   		var key = 'user';
		$api.rmStorage('user');		
    };
    
};