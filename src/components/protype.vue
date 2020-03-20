<template>
	<div class="pro_type_box">
		<div class="pro_type">
			 <router-link :to="{name:s.href}" v-for="s in src" :key='s.href'>
	       	  	<span></span>
	       	  	<p>{{s.title}}</p>
	          </router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				src:[
				    {href: 'flower', value: 'flower',name:'flower', title: '鲜花'},
				    {href: 'ImmortalFlower', value: 'ImmortalFlower',name:'ImmortalFlower', title: '永生花'},
				    {href: 'cake', value: 'cake',name:'cake', title: '蛋糕'},
				    {href: 'gift', value: 'gift',name:'gift', title: '礼品'},
				    {href: 'Chocolates', value: 'Chocolates',name:'Chocolates', title: '巧克力'},				
				]
			}
		}
	}
	
</script>

<style scoped>
	.pro_type_box{
		display: flex;      
        flex-wrap: wrap;
        border-top:1px solid #ddd;
        background-color:rgba(250,250,250,1);
	}
	.pro_type {
		width: 100%;
	  display: flex;      
      flex-wrap: nowrap;
      padding: 7px 3px 8px 3px;
      border-bottom: 8px solid #eee;
    }
    .pro_type_box a:nth-child(1) span{
    	background-image: url(../assets/icon/xianhua_icon.png);
    }
    .pro_type_box a:nth-child(2) span{
    	background-image: url(../assets/icon/yongshenghua_icon.png);
    }
    .pro_type_box a:nth-child(3) span{
    	background-image: url(../assets/icon/cake_icon.png);
    }
    .pro_type_box a:nth-child(4) span{
    	background-image: url(../assets/icon/gift_icon.png);
    }
    .pro_type_box a:nth-child(5) span{
    	background-image: url(../assets/icon/choclate_icon.png);
    }
    
    .pro_type_box a{
    	width: calc(100%/5);
    	font-size: 1.4rem;
		text-align: center;
		color: #333;
    }
    
    .pro_type_box a span{
    	display: block;
    	width: 48px;
    	height: 48px;
    	margin: 0 auto;
        margin-top:5px ;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50% 50%;
    }
    
    .pro_type_box a p{
    	color: #494949;
        font-size: 10px;
        text-align: center;
        margin-bottom: 4px;
        line-height: normal;
    }
</style>