<template>
		<!-- 网页尾部 -->
		<div id="foot">
	       <div class="nav">
	       	  <router-link :to="{name:s.href}" v-for="(s,i) in src" :key='s.href'>
	       	  	<span :class='bg'></span>
	       	  	<p :class='{checked: i==show}'>{{s.title}}</p>
	          </router-link>
	       </div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				src: [
					{href: 'home', value: 'home',name:'home', title: '首页'},
				    {href: 'category', value: 'category',name:'category', title: '分类'},
				    {href: 'cart', value: 'cart',name:'cart', title: '购物车'},
				    {href: 'my', value: 'my',name:'my', title: '我的'},				
				],
				flag:0
			}
		},
		computed:{
			bg: function(){
				if(this.show==0){
					return 'home'
				}
				if(this.show==1){
					return 'category'
				}
				if(this.show==2){
					return 'cart'
				}
				if(this.show==3){
					return 'my'
				}
			}
		},
		props:['show']
	}
</script>

<style scope>
	#foot{
		position: fixed;
		z-index: 999;
		width: 100%;
		min-width: 320px;
        max-width: 640px;
		bottom: 0px;
	}
	.nav{
		display: flex;      
        flex-wrap: wrap;
        border-top:1px solid #ddd;
        background-color:rgba(250,250,250,1);
	}
	
	
	.nav a:nth-child(1) span{
		background-image: url(../assets/icon/home_icon_new.png);
	}
	.nav a:nth-child(2) span{
		background-image: url(../assets/icon/classify_icon_new.png);
	}
	.nav a:nth-child(3) span{
		background-image: url(../assets/icon/cart_icon_new.png);
	}
	.nav a:nth-child(4) span{
		background-image: url(../assets/icon/my_icon_new.png);
	}
	
	.nav a:nth-child(1).router-link-active span.home{
		background-image: url(../assets/icon/home_icon_click_new.png);
	}
	.nav a:nth-child(2) span.category{
		background-image: url(../assets/icon/classify_icon_click_new.png);
	}
	.nav a:nth-child(4).router-link-active span.my{
		background-image: url(../../static/icon/my_icon_click_new.png);
	}
	
	
	.nav a{
		width: calc(100% / 4);
		font-size: 1.4rem;
		text-align: center;
		color: #333;
	
	}
	.nav a span{
		display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        margin-top:5px ;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
	.nav a p{
		color: #494949;
        font-size: 10px;
        text-align: center;
        margin-bottom: 4px;
        line-height: normal;
	}
	.nav a p.checked{
		color: #fe6600; 
	}
	
	a:link{
		text-decoration: none;
	}
</style>