<template>
	  <div class="header">
   		<div :class="bgc">
   			<div style="overflow: hidden; padding:7px 0;">
   				<div class="search_login_box" >
   					<div class="search_box">
   						<a href="#">
   							<span class="search_icon"></span>
   							<input type="search" id="sq" name="sq" class="new_input" required="required" placeholder="七夕情人节" style="color:#232323;width:80%;"/>
   						</a>
   					</div>
   					<div class="notice" style="display: none;">
   						<a href="#">
   							<span class="notice_icon"></span>
   						</a>
   					</div>
   					<div class="login">
   						<a href="#">登录</a>
   					</div>
   				</div>
   			</div>
   		</div>
   	</div>
</template>

<script>
	export default{
		data(){
			return{
				scroll:0,
				bgc:''
			}
		},
		methods:{
			change(){
				//document.documentElement.scrollTop;
				this.scroll=document.body.scrollTop;
				if(this.scroll>0){
					this.bgc="white"
				}else{
					this.bgc="add_border_bottom"
				}
				//console.log(this.scroll);
			}
		},
		mounted:function(){
			window.addEventListener('scroll',this.change);
		}
		
	}
</script>

<style>

 .header{
 	position: fixed; 
 	top: 0px; 
 	z-index: 999;
 	width: 100%;
 	min-width: 320px;
  max-width: 640px;
 	background: rgba(255, 255, 255, 0);
 }
 .add_border_bottom{
 	width: 100%;
 	height: 42px;
 }
 .white{
 	width: 100%;
 	height: 42px;
 	background-color: #FFFFFF;
 }
.search_box {
    float: left;
    max-width: 460px;
    height: 28px;
    width: 76%;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding-top: 7px;
    }
.search_login_box {
    width: 80%;
    width: calc(100% - 102px);
    float: right;
    }
 .search_icon {
    float: left;
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url(../assets/icon/icon_Search.png) no-repeat center;
    background-size: 24px 24px;
    padding: 3px 4px 0 12px;
    box-sizing: content-box;
    opacity: .5;
}
.new_input {
    float: left;
    outline: 0;
    font-size: 10px;
    border: none;
    background-color: #f5f5f5!important;
    height: 12px;
    line-height: 12px;
    margin-top: 2px;
    text-indent: 2px;
}
.notice{
	float: right;
	width: 24%;
	text-align: center;
}
.notice_icon{
	display: inline-block;
	width: 24px;
	height: 24px;
	background: url(../assets/icon/my_icon_new.png) no-repeat center;
	background-size: 16px 16px;
	margin-top: 2px;
}
.login {
    float: right;
    font-size: 12px;
    color: #494949;
    margin-top: 7px;
    width: 24%;
}
.login a {
    display: inline-block;
    width: 100%;
    color: #494949;
    text-align: center;
}
</style>