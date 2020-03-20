<template>
<div class="banner" >  
    <!-- logo-->
    <div>
    	<h></h>
    </div>
   	
   	<!-- 头部动画-->
   	<div>
   		<ti></ti>
   	</div>
    
    <!-- 商品类型-->
    <div>
    	<pro></pro>
    </div>
     
     <!-- 精选鲜花-->
    <div class="featured">
    	<div class="title">
    		<div class="title_line"></div>
    		<p class="title_name">鲜花精选</p>
    	</div>
    </div>
    
    <!-- 商品列表 -->
    <div>
    	<request></request>
    </div>
 
   <!-- 企业信息-->
    <div>
    	<business></business>
    </div>
    
    <!-- 用户板块-->
    <div>
    	<userbox></userbox>
    </div>
    
    <div>
    	<foot :show=0></foot>
    </div>
   	
</div>
</template>


<script >
	import f from './foot.vue'
	import header from './header.vue'
	import title from './title.vue'
	import protype from './protype.vue'
	import request from  './request.vue'
	import business from './business.vue'
	import userbox from './userbox.vue'
	
	export default {
		components: {
			'foot': f ,// 添加底部导航组件
			'h':header,
			'ti':title,
			'pro' : protype,
			'request':request,
			'business':business,
			'userbox':userbox
		},
		 created:function(){
        	this.checkscroll;
        },
		 data() {
      return {
       
      }
   }
	}
</script>

<style scoped>
	body{
   	font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    min-width: 320px;
    max-width: 640px;
    background-color: #fff;
    color: #232323;
    margin: 0 auto;
   	}
    .featured{
    	overflow: hidden;
    }
    .title_line{
    	width: 160px;
    	height: 1px;
    	background-color: #bbb;
    	margin: 22px auto 0;   
    }
    .title_name{
    	width: 90px;
    	text-align: center;
    	background-color: #FFFFFF;
    	font-size: 16px;
    	color: #222;
    	margin: -12px auto 13px;
    }
</style>