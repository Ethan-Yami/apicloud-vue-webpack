const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
	mode:"production",
	entry: {
		api: "./vue/src/js/api.js",
		login:"./vue/src/js/login.js",
	},
	output:{
	  	/*path:path.resolve(__dirname,"dist"),*/
	  	path:path.resolve(__dirname,"/app/html"),
	  	filename:"js/[name].js",
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"Login System",
			filename:"index.html",
			template:"index.html"			
		}),
		new HtmlWebpackPlugin({
			title:"Login System",
			filename:"login.html",
			template:"index.html"
			
		}),
		new VueLoaderPlugin()
	],
	module: {
	    rules: [
	      {
	        test: /\.vue$/,
	        loader: 'vue-loader',	      
           
	      },
	      // this will apply to both plain `.js` files
	      // AND `<script>` blocks in `.vue` files
	      {
	        test: /\.js$/,
	        loader: 'babel-loader',	    
            exclude: '/node_modules/'
	      },
	      // this will apply to both plain `.css` files
	      // AND `<style>` blocks in `.vue` files
	      {
	        test: /\.css$/,
	        use: [
	          'vue-style-loader',
	          'style-loader',
	          'css-loader'
	        ],
	        exclude: '/node_modules/'
	      },
	       
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|jpg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
         
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        
        }
      }
	    ]
  },
};