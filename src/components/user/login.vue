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
				会员登录
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
			<div class="email_autocomplete">
				<input type="text" class="common-input-user" placeholder="请输入邮箱/手机号码" nodetype="email" config="{width:245,height:35}" style="color: rgb(176, 176, 176);"/>
			</div>
		</div>
	</div>
</template>

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
	
	.content{
		margin-right: 0;
       margin-bottom: 0px;
       margin-left: 0;
       padding: 6px 8px;
	}
	
	.email_autocomplete {
       position: relative;
       margin: 0px;
       padding: 0px;
}
.common-input-user {
    background-color: #F9F9F9;
    border: 1px solid #e2e2e2;
    height: 24px;
    line-height: 24px;
    padding: 8px 0;
    width: 100%;
    text-indent: 8px;
    -webkit-appearance: none;
    outline: none;
}
</style>