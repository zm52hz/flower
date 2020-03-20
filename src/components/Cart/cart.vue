<template>
	<div>
		<!-- 头部导航-->
		<div class="header">
			<div class="fl">
				<a @click="back">
					<span>
					<img src="../../../static/icon/headChevronLeft.png" style="width:24px;height:24px;float: left;margin-left:12px;"/>
				</span>
				</a>
			</div>
			<div class="logo">
				购物车
			</div>
			<div class="Category">
				<a href="#">
					<span>
	    		   <img src="../../../static/icon/headerIconMore.png" style="height: 24px;width: 24px;float: left;margin-right: 12px;"/>	
	    		</span>
				</a>
			</div>
		</div>
		<div class="content">
			<div class="my-cart">
				<span class="red">
				共<span id="cart_totalnum">{{cart.totalNum}}</span>件商品
				</span>
				<div class="btn_area-rt">
					<a href="#" class="btn-type">去结算</a>
				</div>
			</div>

			<div class="pro_detail_box">
				<ul>
					<li class="first"  v-for="(val, index) in cartItems">
						<div class="pro_li">
							<div class="proimg" style="display:inline-block;">
								<a href="#">
									<p>
										<img :src="'../../../static/imgs/'+val.product.proImage" width="55px" height="65px" />
									</p>
								</a>
							</div>
							<div class="protitler" style="display: inline-block;">
								<a href="#">
									<p class="p-name">
										[鲜花]<u>{{val.product.proName}}</u>
									</p>
								</a>
								<p class="p-price">现价
									<span class="red">￥{{val.product.proPrice}}</span>
								</p>
								<div class="setAmount">
									<span style="float: left;">数量：</span>
									<a @click="changeCartItemQuantity(val,val.quantity,'minus')"  class="min cover"></a>
									<input @change="changeCartItemQuantity(val,val.quantity,'')" v-model="val.quantity" type="text" name="quantity" maxlength="2" :value='val.quantity' size="2" class="common-input_1" />
									<a @click="changeCartItemQuantity(val,val.quantity,'add')" class="add"></a>
								</div>
							</div>
							<a  @click="deleteCartItemById(val,index)">
								<div style="float: right;margin-right: 10px;">
									<span class="icon_ljt"></span>
								</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="pay-tip" style="background: #FFFCF1;font-size: 13px;margin-top: 25px;margin-top:0px;">
				<font color="#666666">
					<a class="link_ft15" href="#">
						<继续挑选</a>
							<font class="#666666" style="float:right">
								合计：<span style="color: #f60;">￥{{cart.totalPrice}}</span>
							</font>
				</font>
			</div>
		</div>
		<!-- 底部-->
		<div class="gg1">
			<div>
				<div class="ft_gwc2">
					<p>
						<span class="c_666">合计：</span>
						<span class="c_f60">￥{{cart.totalPrice}}</span>
					</p>
				</div>
				<a href="#" class="ft_gwc1">
					<div class="gwc_btn_2">去结算</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cart: [],	
				cartItems:[],
				totolPrice:'',
				totolNum:''
			}
		},
		created() {
            this.gainCart();
		},
		methods: {
			gainCart() {
				var that = this
				$.ajax({
					type: "get",
					url: "/flowers/cart",
					dataType: 'json',
					async: true,
					success: function(ret) {
						console.log(ret)
						that.cart=ret.data;
                        that.cartItems=ret.data.list;
					}
				});
			},
			deleteCartItemById(val,index){
				var that = this
				var id=val.product.id
				$.ajax({
					type: "delete",
					url: "/flowers/cart/"+id,
					dataType: 'json',
					async: true,
					success: function(ret) {
						if(ret.StatusCode==200){
							that.cart=ret.data;
							that.cartItems=ret.data.list;
							//that.cartItems.splice(index,1)
						}
					}
				});
			},
			changeCartItemQuantity(val,quantity,type){
				var that=this
				if(type=="minus"&&quantity>1){
					quantity=quantity-1;
				}else if(type=='add'&quantity<10){
					quantity=quantity+1;
				}else if(quantity>10){
					quantity=10
				}
				$.ajax({
					type:'put',
					url:'/flowers/cart',
					data:{"id":val.product.id,"quantity":quantity},
					dataType:'json',
					async:true,
					success(ret){
						if(ret.StatusCode==200){
							that.cart=ret.data;
							that.cartItems=ret.data.list;
						}
					}
				});
			},
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.header {
		display: block;
		position: relative;
		height: 44px;
		text-align: right;
		overflow: hidden;
		cursor: pointer;
		background-color: rgba(250, 250, 250, 0.9);
		border-bottom: 1px solid #e4e4e4;
	}
	
	.fl {
		float: left;
	}
	
	.fl a {
		display: block;
		padding: 10px 0 0 0;
		text-decoration: none;
		color: #666;
	}
	
	.header .logo {
		margin: 0 auto;
		text-align: center;
		width: 50%;
		height: 44px;
		line-height: 44px;
		color: #232323;
		cursor: pointer;
		font-size: 17px;
	}
	
	.Category {
		width: 10%;
		position: absolute;
		right: 0;
		top: 0;
		cursor: pointer;
	}
	
	.Category a {
		display: block;
		padding: 10px 0 0 0;
		text-decoration: none;
		color: #666;
	}
	
	.content {
		background: #FFFFFF;
		overflow: hidden;
		padding-bottom: 15px;
		border-bottom: 1px solid #e4e4e4;
	}
	
	.my-cart {
		background-color: #f4f4f4;
		border-bottom: 1px solid #e4e4e4;
		border-top: 1px solid #e4e4e4;
		box-shadow: 0 1px 0 #FFFFFF inset;
		padding: 9px 8px;
		position: relative;
		margin: 8px 0;
	}
	
	.red {
		color: #F60;
	}
	
	.my-cart .btn_area-rt {
		float: right;
		right: 10px;
		top: 9px;
	}
	
	.btn-type {
		background: #F60;
		padding: 6px 10px;
		font-size: 1em;
		color: #fff;
		margin-left: 3px;
		-webkit-border-radius: 3px;
		cursor: pointer;
		text-align: center;
	}
	
	.pro_detail_box li {
		border-bottom: 1px solid #dbdbdb;
		padding: 15px 0 15px 6px;
		position: relative;
		margin-bottom: 15px;
		width: 100%;
	}
	
	.pro_li {
		color: #666666;
	}
	
	.protitler {
		height: 100%;
		width: 220px;
		margin: 0px;
		padding: 0px;
	}
	
	.proimg {
		width: 55px;
		height: 51px;
	}
	
	.p-name {
		font-size: 1em;
		margin: 0;
		width: 220px;
	}
	
	.p-price {
		line-height: 28px;
		margin: 0;
		width: 220px;
	}
	
	.setAmount .min {
		height: 25px;
		width: 24px;
		float: left;
		position: relative;
		border: 1px solid #DCDCDC;
	}
	
	.setAmount .add {
		height: 25px;
		width: 24px;
		float: left;
		position: relative;
		border: 1px solid #DCDCDC;
	}
	
	.setAmount .common-input_1 {
		color: #333;
		border-style: solid;
		border-color: #dcdcdc;
		border-image: none;
		border-width: 1px 0px;
		height: 25px;
		width: 32px;
		border-radius: 0px;
		text-align: center;
		line-height: 20px;
		float: left;
		font-size: 15px;
		margin: 0;
		padding-left: 0;
	}
	
	.setAmount .add::after {
		content: "";
		position: absolute;
		left: 0px;
		top: 0px;
		width: 24px;
		height: 25px;
		background: url(../../../static/icon/add.png) no-repeat;
		background-size: 10px;
		background-position: center;
	}
	
	.setAmount .min::after {
		content: "";
		position: absolute;
		left: 0px;
		top: 0px;
		width: 24px;
		height: 25px;
		background: url(../../../static/icon/min.png) no-repeat;
		background-size: 10px;
		background-position: center;
	}
	
	.icon_ljt {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(//img02.hua.com/m/ljt.png) no-repeat;
		background-size: 15px;
		background-position: center;
	}
	
	.pay-tip {
		border-radius: 3px 3px 3px 3px;
		margin: 12px auto;
		border: 1px solid #DDD4C7;
		width: 90%;
		padding: 10px;
	}
	
	.gg1 {
		position: fixed;
		bottom: 0;
		background: none repeat scroll 0 0 #fff;
		width: 100%;
		max-width: 640px;
		height: 43px;
		display: table;
		z-index: 9999;
		opacity: .95;
		border-top: 1px solid #dbdbdb;
	}
	
	.ft_gwc2 {
		width: 60%;
		float: left;
		text-align: left;
		margin-top: 3px;
	}
	
	.ft_gwc2 p {
		padding-left: 10px;
		margin: 0px;
		font-size: 14px;
		line-height: 37px;
	}
	
	.c_666 {
		color: #666;
	}
	
	.c_f60 {
		color: #F60;
	}
	
	.ft_gwc1 {
		width: 40%;
		float: left;
	}
	
	.gwc_btn_2 {
		background: #ff6600;
		line-height: 44px;
		color: #fff;
		font-size: 15px;
		text-align: center;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none outside none;
		padding: 0;
		margin: 0;
		font-style: normal;
	}
	
	a {
		color: #666;
		text-decoration: none;
	}
</style>