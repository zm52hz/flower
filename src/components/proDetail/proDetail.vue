<template>
	<div>
		<div :class="bgc_head_bar">
			<div class="head_bar_box">
				<a @click="back" class="goback">
					<img src="../../../static/icon/headChevronLeft.png" />
				</a>
				<a  href="#" class="gohome">
					<img src="../../../static/icon/backhome.png" />
				</a>
				<p :class="top_pro_title">{{product.proName}}</p>
			</div>
		</div>

		<!-- 主图部分-->
		<div class="main_pro_banner">
			<swiper :options="swiperOption">
				<!-- slides -->
				<swiper-slide><img :src="'../../../static/proImage/a_'+proImg"></swiper-slide>
				<swiper-slide><img :src="'../../../static/proImage/b_'+proImg"></swiper-slide>
				<swiper-slide><img :src="'../../../static/proImage/c_'+proImg"></swiper-slide>
				<swiper-slide><img :src="'../../../static/proImage/d_'+proImg"></swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination1" slot="pagination"></div>
			</swiper>
		</div>

		<!-- 产品文字信息-->
		<div class="main_pro_text">
			<div class="info_box">
				<div class="collect_box">
					<img src="../../../static/icon/icon_collect.png" />
				</div>
				<p class="info_title">
					{{product.proName}} - {{product.proDesc}}
					<span class="cuxiao_tip">特价</span>
				</p>
				<div class="price_part">
					<span class="now_price">￥{{product.proPrice}}</span>
					<del class="before_price">￥{{product.proPrice/0.8}}</del>
				</div>
				<div class="info_huayu_box">
					<span style="float: left;">花语</span>
					<p class="info_huayu">					
						{{product.proLeaguage}}
					</p>
				</div>
				<div class="info_huayu_box">
					<span style="float: left;">包装</span>
					<p class="info_huayu">
						{{product.proPack}}
					</p>
				</div>
				<div class="info_huayu_box">
					<span style="float: left;">配送</span>
					<p class="info_huayu">
						全国
					</p>
				</div>
				<div class="info_huayu_box">
					<span style="float: left;">附送</span>
					<p class="info_huayu">
						下单填写留言，即免费赠送精美贺卡！
					</p>
				</div>
			</div>
		</div>

		<!-- 订单评价-->
		<div class="advice">
			<p class="advice_title">订单评价
				<a href="#" class="advice_arrow">273条</a>
			</p>
			<div class="advice_list">
				<ul>
					<li>
						<img class="head_img" src="../../../static/imgs/1.jpg" />
						<div class="star_img">
							<img src="../../../static/icon/star5.png" />
							<p>2017-9-18</p>
						</div>
						<div class="advice_text_box">
							<p class="user_name">912348</p>
							<p class="user_advice">爱的色放</p>
							<p class="user_area">广东省吴川市</p>
						</div>
					</li>
					<li>
						<img class="head_img" src="../../../static/imgs/1.jpg" />
						<div class="star_img">
							<img src="../../../static/icon/star5.png" />
							<p>2017-9-18</p>
						</div>
						<div class="advice_text_box">
							<p class="user_name">912348</p>
							<p class="user_advice">爱的色放</p>
							<p class="user_area">广东省吴川市</p>
						</div>
					</li>			
				</ul>
			</div>
		</div>

	<div class="footer_cart">
		<div class="cart_md">
			<ul>
				<li>
					<a href="#">
						<i class="middle_line"></i>
						<img src="../../../static/icon/icon_custom_service.png" />
						<span>客服</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="middle_line"></i>
						<img src="../../../static/icon/icon_phone.png" />
						<span>电话</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../../../static/icon/bottonmIcon_CartDefault.png" />
						<span>购物车</span>
					</a>
				</li>
			</ul>
			<a class="go_buy"  @click="shopping">立刻购买</a>
			<a class="add_cart" @click="addProToCart">加入购物车</a>
			<a class="sale_out">缺货或下架</a>
		</div>
	</div>

	</div>
</template>

<script>
	import footCart from './footerCart.vue'

	export default {
		components: {
			'foot': footCart
		},
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination1',
				},
				product:{},
				id:'',
				proImg:'',
				scroll: '',
				bgc_head_bar: 'head_bar1',
				top_pro_title: 'top_pro_title1'
			}
		},
		methods: {
			changeScrollTop() {
				//document.documentElement.scrollTop;
				this.scroll = document.body.scrollTop;
				if(this.scroll > 0 && this.scroll <= 380) {
					this.bgc_head_bar = "head_bar2"
					this.top_pro_title = "top_pro_title1";
				} else if(this.scroll > 380) {
					this.bgc_head_bar = "head_bar3"
					this.top_pro_title = "top_pro_title";
				} else {
					this.bgc_head_bar = "head_bar1"
				}
			},
			loadData(id){
				var that=this
			    $.ajax({
			    	type:"get",
			    	url:"/flowers/product/"+id,
			    	dataType: 'json',
			    	async:true,
			    	success:function(ret){
			    		//console.log(ret);
			    		that.product=ret.data;
			    		that.proImg=that.product.proImage
			    	}
			    });	
			},
			//在使用ajax请求后台数据时要注意that和this的使用
			addProToCart(){
			    var that=this
			    $.ajax({
			    	type:"post",
			    	url:"/flowers/cart?id="+this.id,
			    	dataType: 'json',
			    	async:true,
			    	success(ret){
			    		if(ret.StatusCode==200){
			    			that.$router.push('/cart');
			    		}
			    		//console.log(ret);
			    	}
			    });
			},
			shopping(){
				this.$router.push({path:'/fillOrder',query:{id:this.id}});
			},
			back(){
				this.$router.go(-1);
			}
		},
		created(){
			var id=this.$route.query.id;
			this.id=id;
			this.loadData(id);
		},
		mounted: function() {
			window.addEventListener('scroll', this.changeScrollTop);
		}
	}
</script>

<style scoped>
	.head_bar1 {
		position: fixed;
		top: 0px;
		width: 100%;
		height: 44px;
		z-index: 999;
		max-width: 640px;
		background: rgba(255, 255, 255, 0);
	}
	
	.head_bar2 {
		position: fixed;
		top: 0px;
		width: 100%;
		height: 44px;
		z-index: 999;
		max-width: 640px;
		background: rgba(255, 255, 255, 0.52);
	}
	
	.head_bar3 {
		position: fixed;
		top: 0px;
		width: 100%;
		height: 44px;
		z-index: 999;
		max-width: 640px;
		background: #FFFFFF;
	}
	
	.head_bar_box {
		width: 100%;
		height: 44px;
	}
	
	.head_bar_box .goback {
		display: inline-block;
		width: 43px;
		height: 43px;
		padding: 5px;
		float: left;
	}
	
	.head_bar_box .gohome {
		display: inline-block;
		width: 43px;
		height: 43px;
		padding: 5px;
		float: right;
	}
	
	.head_bar_box .goback img,
	.head_bar_box .gohome img {
		padding: 5px;
		border-radius: 50%;
		background: rgba(255, 255, 255, .5);
	}
	
	.top_pro_title {
		font-size: 17px;
		text-align: center;
		line-height: 44px;
		margin: 0 50px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.top_pro_title1 {
		display: none;
	}
	
	.main_pro_banner {
		height: 109vw;
		max-height: 700px;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.main_pro_text {
		border-bottom: 2px solid #f5f5f5;
	}
	
	.info_box {
		padding: 12px 16px 16px;
		border-bottom: 8px solid #f5f5f5;
	}
	
	.collect_box {
		float: right;
	}
	
	.collect_box img {
		width: 24px;
		position: relative;
		top: -2px;
	}
	
	.info_title {
		margin: 0;
		font-size: 14px;
		color: #232323;
	}
	
	.cuxiao_tip {
		color: #f60;
		margin-left: 5px;
	}
	
	.price_part {
		margin-top: 10px;
		margin-bottom: 2px;
	}
	
	.now_price {
		font-size: 20px;
		color: #f60;
		text-indent: -3px;
	}
	
	.before_price {
		font-size: 12px;
		color: #9b9b9b;
	}
	
	.info_huayu_box {
		padding-top: 10px;
		overflow: hidden;
		position: relative;
		margin-top: 0px;
	}
	
	.info_huayu {
		font-size: 12px;
		color: #9b9b9b;
		position: relative;
		text-align: justify;
		margin-left: 33px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	
	.advice_list {
		padding-bottom: 50px;
	}
	
	.advice_title {
		margin: 0px;
		padding: 9px 16px;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.advice_arrow {
		float: right;
		color: #9b9b9b;
		font-size: 10px;
		padding-right: 15px;
		background: url(../../../static/icon/arrow_right_default.png) no-repeat right;
		background-size: 12px;
	}
	
	.advice_list li {
		padding: 12px 16px;
		overflow: hidden;
	}
	
	.advice_list .head_img {
		width: 48px;
		float: left;
	}
	
	.star_img {
		width: 67px;
		float: right;
		margin-top: 8px;
	}
	
	.star_img img {
		width: 60px;
		float: right;
	}
	
	.star_img p {
		color: #9b9b9b;
		font-size: 10px;
		margin-top: 13px;
		text-align: right;
	}
	
	.advice_text_box {
		margin-left: 60px;
		width: 63%;
	}
	
	.user_name,
	.user_area {
		margin: 0;
		font-size: 10px;
		color: #9b9b9b;
	}
	
	.user_advice {
		margin: 0;
	}
	
	.user_area {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 13px;
		background: url(../../../static/icon/deliver_area_icon.png) no-repeat left;
		background-size: 12px;
	}
	
		.footer_cart {
		position: fixed;
		bottom: 0px;
		height: 49px;
		width: 100%;
		max-width: 640px;
	}
	
	.cart_md {
		background: #fff;
		overflow: hidden;
		height: 49px;
		text-align: center;
		font-size: 10px;
	}
	
	.cart_md ul {
		width: 40%;
		float: left;
		position: relative;
		padding: 0;
		margin: 0;	
	}
	
	.cart_md li {
		width: 33.33%;
		height: 45px;
		text-align: center;
		font-size: 10px;
		float: left;
		display: list-item;
		list-style: none outside none;
	}
	
	.cart_md li img {
		display: block;
		width: 24px;
		margin: 5px auto 0px;
	}
	
	.cart_md li a {
		display: inline-block;
		text-decoration: none;
		color: #666;
		width: 100%;
		height: 100%;
	}
	
	.middle_line {
		display: inline-block;
		width: 1px;
		height: 20px;
		background-color: #999;
		transform: scale(0.5, 1);
		float: right;
		margin-top: 14px;
	}
	
	.go_buy {
		background: #f60;
	}
	
	.add_cart {
		background: rgb(255, 167, 71);
	}
	
	.cart_md>a {
		display: inline-block;
		width: 30%;
		height: 49px;
		float: right;
		text-align: center;
		font-size: 14px;
		color: #fff;
		line-height: 49px;
	}
	
	img {
		width: 100%;
		max-width: 640px;
	}
	
	a {
		-webkit-tap-highlight-color: transparent;
		text-decoration: none;
		color: #666;
	}
	
	span {
		font-size: 12px;
	}
	
	ul,
	li,
	i {
		list-style: none outside none;
		padding: 0;
		margin: 0;
		font-style: normal;
	}
</style>