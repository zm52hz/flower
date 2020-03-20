<template>
	<div>
		<div class="header">
			<div class="header-btn_fh fl">
				<a @click="back">
					<span>
						<img src="../../../static/icon/headChevronLeft.png" style="width:24px;height:24px;float: left;margin-left:12px;"/>
					</span>
				</a>
			</div>
			<div class="logo">
				填写订单
			</div>
		</div>
		<form>
			<div class="login_box">
				<p style="margin:0 auto;font-size:12px;">
					已有花礼账户请
					<a href="#" class="login_btn">登 录</a>
					后结算,未注册可在此页直接下单
				</p>
			</div>
			<div class="shopping_box">
				<div class="sh_name">
					<p>
						收货人姓名:
						<input type="text" class="to_name" />
					</p>
				</div>
				<div class="sh_phone">
					<p>
						收货人手机:
						<input type="text" class="to_mobile" />
					</p>
				</div>
				<div class="sh_phone">
					<p>
						配送地区:
						<input type="text" class="to_mobile" />
					</p>
				</div>
				<div class="sh_phone">
					<p>
						详细地址:
						<input type="text" class="to_mobile" />
					</p>
				</div>
				<div class="sh_phone">
					<p>
						送达日期:
						<input type="text" class="to_mobile" />
					</p>
				</div>
				<div class="porduct">
					<div class="single" v-if="">
						<img :src="'../../../static/imgs/'+product.proImage" />
						<div class="price_num">
							<p class="pro_price">
								￥<span>{{product.proPrice}}</span>
							</p>
							<p class="order_pro_num">
								x<span>1</span>
							</p>
						</div>
						<p class="detail_text">[鲜花]{{product.proName}}</p>
					</div>
				</div>
				<div class="op_name">
					<p>
						<span class="name_key" style="float:left">您的姓名:</span>
						<input type="text" style="width:54%;padding-left:14px" class="name_box" />
					</p>
				</div>
				<div class="op_name">
					<p>
						<span class="name_key" style="float:left">您的手机:</span>
						<input type="text" style="width:54%;padding-left:14px" class="name_box" />
					</p>
				</div>
				<div class="op_name">
					<p>
						<span class="name_key" style="float:left">贺卡留言:  </span>
						<span style="color:#999;font-size:12px;margin-left: 8px;">（选填）</span>
						<input type="text" style="width:54%;padding-left:14px" class="name_box" />
					</p>
				</div>
				<div class="order_info">
					<p>
						<span class="key">商品金额:</span>
						<span class="value">￥{{product.proPrice}}</span>
					</p>
				</div>
			</div>

			<div class="footer_bar">
				<div class="line"></div>
				<div style="position:relative">
					<p style="color:#f60;">
						实付款:￥
						<span>{{product.proPrice}}</span>
						<a href="" class="settle_accounts">去结算</a>
					</p>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				product: {}
			}
		},
		created() {
			var id = this.$route.query.id;
			this.getProductInfo(id);
		},
		methods: {
			getProductInfo(id) {
				var that = this
				$.ajax({
					type: "get",
					url: "/flowers/product/" + id,
					dataType: 'json',
					async: true,
					success(ret) {
						that.product = ret.data;
						console.log(ret);
					}
				});
			},
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.header {
		display: block;
		position: relative;
		color: #fff;
		text-align: right;
		overflow: hidden;
		cursor: pointer;
		background: rgba(250, 250, 250, 0.9);
		height: 44px;
		border-bottom: 1px solid #e4e4e4;
	}
	
	.fl {
		float: left;
	}
	
	.header-btn_fh a {
		display: block;
		padding: 7px 0 0 0;
		height: 34px;
	}
	
	.header-btn_fh span {
		display: inline-block;
		height: 24px;
		width: 24px;
		background: none;
	}
	
	.header .logo {
		margin: 0 auto;
		text-align: center;
		width: 50%;
		cursor: pointer;
		font-size: 17px;
		height: 44px;
		line-height: 44px;
		color: #232323
	}
	
	.form {
		background-color: #fff;
		font-size: 14px;
	}
	
	.login_box {
		width: 100%;
		color: #999;
		text-align: center;
		padding: 16px 0;
		border-bottom: 4px solid #F0EFED;
	}
	
	.login_btn {
		display: inline-block;
		background-color: #f60;
		width: 46px;
		height: 16px;
		line-height: 17px;
		text-align: center;
		color: #fff;
		font-size: 12px;
		border-radius: 3px;
		margin: 0 4px;
	}
	
	.shopping_box>div {
		padding: 13px 12px;
		border-bottom: 1px solid #F0EFED;
		color: #444;
	}
	
	.single {
		overflow: hidden;
	}
	
	.single img {
		float: left;
		width: 44px;
		height: 48px;
	}
	
	.single .price_num {
		float: right;
		line-height: 21px;
	}
	
	.order_pro_num {
		font-size: 12px;
		margin-top: 8px;
		text-align: right;
	}
	
	.single .detail_text {
		margin-left: 78px;
		margin-right: 75px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
	}
	
	.order_person>div {
		padding: 12px;
		border-bottom: 1px solid #F0EFED;
		color: #444;
		width: 100%;
	}
	
	.order_info {
		padding: 11px;
		text-align: right;
		border-top: 4px solid #F0EFED;
	}
	
	.order_info .value {
		display: inline-block;
		color: #f60;
		width: 48px;
		margin-left: 22px;
	}
	
	.footer_bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		line-height: 49px;
		font-size: 16px;
		color: #000;
		background-color: #fff;
	}
	
	.footer_bar p {
		padding-left: 15px;
		font-size: 15px;
		text-align: right;
	}
	
	.footer_bar .line {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 1px;
		width: calc(100% - 130px);
		background-color: #F0EFED;
	}
	
	.footer_bar .settle_accounts {
		float: right;
		color: #fff;
		text-align: center;
		background-color: #f60;
		width: 130px;
		font-size: 16px;
		margin-left: 14px;
	}
	
	input:not([type="radio"]),
	button,
	textarea {
		font-family: inherit;
		font-size: inherit;
		font-weight: inherit;
		border: 0;
		background: 0 0;
		outline: 0;
	}
	
	p {
		margin: 0;
	}
	
	a {
		text-decoration: none;
		color: #666;
	}
</style>