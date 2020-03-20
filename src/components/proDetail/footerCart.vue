<template>
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
			<a href="#" class="go_buy">立刻购买</a>
			<a href="#" class="add_cart">加入购物车</a>
			<a href="#" class="sale_out">缺货或下架</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				src: [{
						href: 'home',
						value: 'home',
						name: 'home',
						title: '客服'
					},
					{
						href: 'category',
						value: 'category',
						name: 'category',
						title: '电话'
					},
					{
						href: 'cart',
						value: 'cart',
						name: 'cart',
						title: '加入购物车'
					},
					{
						href: 'my',
						value: 'my',
						name: 'my',
						title: '立刻购买'
					},
				],
				flag: 0
			}
		},

	}
</script>

<style scoped>
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
	
</style>