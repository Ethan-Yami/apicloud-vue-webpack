exports.install = function (Vue, options) {

    Vue.prototype.config = {
    	url:"http://192.168.126.139",
    	mode:"development",
    };

    Vue.prototype.ajax = function(){

    	let conf = this.config;

		if(conf.mode=='development'){

				

		}else if(conf.mode=='production'){


		}    	
    };

    
    
};