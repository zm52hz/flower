<template>
	<div style="background: #F0EFED; height: 100%;">
		<div class="user-info">
			<div class="header-bar">
				<a href="" class="goback">
					<img src="../../static/icon/goBack.png" />
				</a>
			</div>
			<img src="../../static/icon/backgroundv3.png" width="100%" height="132px" />
			<div class="user-box">
				<div class="no-login">
					<p style="margin: 0px;">您好，欢迎来到有家花店</p>
					<a href="" class="login-btn">登录/注册</a>
				</div>
			</div>
		</div>
		<div class="top-bar clearfix">
			<ul>
				<li id="dfk">
					<a href="#">
					  <img src="../../static/icon/iconPcObligation@2x.png" />
					  <p>待付款</p>
					</a>
				</li>
				<li id="jrps">
					<a href="#">
					  <img src="../../static/icon/iconPcExpress@2x.png" />
					   <p>今日配送</p>
					</a>
				</li>
					<li id="dpj">
					<a href="#">
					  <img src="../../static/icon/iconPcEvaluate@2x.png"/>
					   <p>待评价</p>
					</a>
				</li>
					<li>
					<a href="#">
					  <img src="../../static/icon/iconPcAllOrder@2x.png" />
					  <p>全部订单</p>
					</a>
				</li>
			</ul>
		</div>
	    <div class="link-box clearfix">
	    	<ul>
	    		<li>
	    			<a href="#">
	    				<img  src="../../static/icon/iconPcTicket@2x.png"/>
	    				<p>优惠券</p>
	    			</a>
	    		</li>
	    		<li>
	    			<a href="#">
	    				<img  src="../../static/icon/iconPcIntegral@2x.png"/>
	    				<p>积分</p>
	    			</a>
	    		</li>
	    			<li>
	    			<a href="#">
	    				<img  src="../../static/icon/iconClock@2x.png"/>
	    				<p>生日/纪念日提醒</p>
	    			</a>
	    		</li>
	    			<li>
	    			<a href="#">
	    				<img  src="../../static/icon/icon_collect.png"/>
	    				<p>我的收藏</p>
	    			</a>
	    		</li>
	    		<li>
	    			<a href="#">
	    				<img  src="../../static/icon/iconPcPay@2x.png"/>
	    				<p>在线付款</p>
	    			</a>
	    		</li>
	    		<li>
	    			<a href="#">
	    				<img src="../../static/icon/bottomIconSeviceDefault@2x.png"/>
	    				<p>联系客服</p>
	    			</a>
	    		</li>
	    			<li>
	    			<a href="#">
	    				<img  src="../../static/icon/iconHelp@2x.png"/>
	    				<p>帮助</p>
	    			</a>
	    		</li>
	    			<li>
	    			<a href="#">
	    				<img  src="../../static/icon/iconAbout@2x.png"/>
	    				<p>关于花礼</p>
	    			</a>
	    		</li>
	    	</ul>
	    </div>
	    <div class="account">
	    	<span>账户管理</span>
	    	<a href="#">
	    	   <p>管理收货地址等</p>
	    	</a>
	    </div>
	    <div class="banner-maidian">
	    	<a href="#">
	    		<img src="../../static/icon/banner@2x.png"/>
	    	</a>
	    </div>
	    <foot :show="3"></foot>
	</div>	
</template>

<script>
	import f from './foot.vue'
	export default {
		components: {
			'foot': f // 添加底部导航组件
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
.user-info{
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	position: relative;
}
.header-bar{
	position: absolute;
	top: 0px;
	height: 44px;
	width: 100%;
}
.header-bar .goback{
	display: inline-block;
	padding: 10px 5px 5px 14px;
}
.header-bar .goback img {
    width: 24px;
    height: 24px;
}
.user-info .user-box {
    position: absolute;
    top: 33%;
    left: 0;
    width: 100%;
    height: 60px;
    text-align: center;
}
.no-login {
    color: #fff;
}
.login-btn {
    display: inline-block;
    width: 100px;
    background: #fe6600;
    color: #fff;
    font-size: 14px;
    padding:0px;
    height: 25px;
    line-height: 24px;
    border-radius: 12px;
    letter-spacing: 2px;
    border-radius: 10px;
    margin-top: 5px;
}

.top-bar {
    background-color: #fff;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
}

.clearfix {
    clear: both;
    margin-bottom: 10px ;
}

.top-bar ul > li {
    width: 25%;
    float: left;
    padding: 15px 0;
    text-align: center;
    position: relative;
    box-sizing: border-box;
}

.top-bar ul > li p {
    font-size: 11px;
    line-height: 12px;
    margin-bottom: 0;
    color: #666666;
}

.link-box {
    background: #fff;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
}

.link-box ul > li {
    float: left;
    width: 25%;
    text-align: center;
    height: 93px;
    box-sizing: border-box;
}

.link-box ul > li p {
	color: #666666;
    font-size: 11px;
    line-height: 20px;
    padding-bottom: 4px;
    margin-bottom: 0px;
}

.link-box ul > li img {
    width: 32px;
    margin-top: 20px;
}

.link-box li:nth-child(1),.link-box li:nth-child(2),.link-box li:nth-child(3),.link-box li:nth-child(4){
	border-bottom: 1px solid #eee;
}
.link-box li:nth-child(1),.link-box li:nth-child(2),.link-box li:nth-child(3),.link-box li:nth-child(5),.link-box li:nth-child(6),.link-box li:nth-child(7){
	border-right: 1px solid #eee;
}

.account {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding: 0 16px;
    margin-top: 10px;
    box-sizing: border-box;
}

.account span {
    font-size: 14px;
    font-weight: 500;
}

.account a{
	float: right;
}

.account a p {
    font-size: 11px;
    color: #666666;
    padding-right: 15px;
    background: url(../../static/icon/arrow_right_default.png) no-repeat right center;
    background-size: 12px 12px;
}

.banner-maidian {
    width: 100%;
    max-width: 640px;
    margin: 10px auto 61px;
}

.banner-maidian img {
    width: 100%;
}

li img {
    width: 32px;
}
a:link {
    text-decoration: none;
}

ul, li, i {
    list-style: none outside none;
    padding: 0;
    margin: 0;
    font-style: normal;
}

body{
	background: #F0EFED;
	
}
</style>