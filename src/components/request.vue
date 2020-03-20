<template>
	<div class="fea_pro_list">
		<router-link :to="'./proDetail?id='+item.id" v-for="item in product" :key='item.href'>	
			<div class="pro_li">
			   <div class="pro_box">
				 <img :src="item.proImage"/>
				 <div class="pro_text">
					<p class="pro_name">{{item.proName}}</p>
			        <p class="pro_detail">{{item.proDesc}}</p>
			        <p class="pro_price">￥{{item.proPrice}}</p>
				 </div>
			  </div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				product:[
				    {
				    	href: '#',
				    	proName:'一心一意',
				    	proDesc:'玫瑰11枝，粉色勿忘我0.3扎',
				    	proPrice: '￥133',
				    	proImage:'//img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg'
				    }
				]
			}
		},
		created(){
			var that=this
			$.ajax({
				url:"/flowers/product",
				type: 'GET', 
				dataType: 'json', 
				async: true,
				success:function(ret){
					that.product=ret.data;
		            that.product.forEach(function(item){
		            	item.proImage="../../static/imgs/"+item.proImage;
		            })
					console.log(ret);
				}
			})
		}
	}
</script>

<style scoped>
	.fea_pro_list{
		padding: 0 0 0 8px;
		overflow: hidden;
		padding-bottom: 18px;
		border-bottom: 8px solid #eee;
	}
	.pro_li{
	    float: left;
        width: calc(100% / 2);
        padding-right: 8px;
        padding-bottom: 8px;
	}
	.pro_box{
		border: 1px solid #efefef;
	}
	.pro_box img{
		display: block;
		width: 100%;
		padding: 3px;
		height: 49.6vm;
		max-height: 317px;
	}
	.pro_text{
		padding: 6px;
	}
	.pro_name{
		font-size: 12px;
        color: #232323;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0px;
	}
	.pro_detail{
		color: #777;
        font-size: 10px;
        line-height: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0px;
	}
	.pro_price{
	    color: #222;
        font-size: 12px;
        margin-bottom: 0px;
	}
	
</style>