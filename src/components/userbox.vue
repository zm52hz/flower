<template>
	<div class="user_box">
		<div class="login_help">
			<ul class="user_login" style="margin-bottom: 16px;">
				<li>
					<a href="#">登录</a>
				</li>
				<li>
					<a href="#">注册</a>
				</li>
				<li>
					<a href="#">客服</a>
				</li>
			</ul>
			<ul style="margin-bottom:12px ;">
				<li>
					<a href="#">花语大全</a>
				</li>
				<li>
					<a href="#">查单</a>
				</li>
				<li>
					<a href="#">关于我们</a>
				</li>
			</ul>
		</div>
	    <div class="platform">
	    	<dl>
	    		<dt>
	    			<a href="#"> <img src="../assets/icon/iconPhone.png"/></a>
	    		</dt>
	    		<dd>客户端</dd>
	    	</dl>
	    	<dl>
	    		<dt>
	    			<a href="#"> <img src="../assets/icon/iconPc.png"/></a>
	    		</dt>
	    		<dd>电脑版</dd>
	    	</dl>
	    </div>
	    <div class="copyright">Copyright © 2005~2017 有家花店(www.yjhd.com) 版权所有</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
.login_help {
    border-bottom: 1px solid #eee;
    padding-top: 16px;
}	

.login_help ul{
	list-style: none;
	overflow: hidden;
	padding: 0px;
    margin: 0px;
}
.login_help ul li {
    float: left;
    list-style: none;
    text-align: center;
    font-size: 12px;
    width: calc(100%/3);
}

.user_login li{
	float: left;
	text-align: center;
	font-size: 12px;
	width: calc(100%/3);
}
.user_login li a {
    background-color: #eee;
    color: #444;
    border-radius: 2px;
    text-decoration: none;
    display: inline-block;
    padding: 4px 19px;
}

.login_help ul li a {
    display: inline-block;
    color: #444;
    padding: 4px 19px;
    text-decoration: none;
}
.platform {
    overflow: hidden;
    padding: 16px 10% 14px 10%;
    color: #777;
    font-size: 12px;
    border-bottom: 1px solid #eee;
}
.platform dl {
	float: left;
	width: 50%;
	text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
}
dt {
    font-weight: bold;
}
.copyright {
    font-size: 10px;
    text-align: center;
    color: #ccc;
    padding: 16px 0;
}
</style>