<template>
	<!-- 企业信息-->
	<div class="bussiness">
		<div class="bussiness_box">
		    <router-link :to="{name:s.href}" v-for="(s,i) in src" :key='s.href' @click.native="change(i)" >
	       	  	<span :class='active'></span>
	       	  	<p :class='{checked: i==show}'>{{s.title}}</p>
	          </router-link>
		</div>

		<div class="bussiness_img_box">
		  <swiper :options="swiperOption" >
             <!-- slides -->
             <swiper-slide class="swiper-no-swiping"><img src="../assets/icon/brand001.jpg"></swiper-slide>
             <swiper-slide class="swiper-no-swiping"><img src="../assets/icon/brand002feben.jpg"></swiper-slide>
             <swiper-slide class="swiper-no-swiping"><img src="../assets/icon/brand003.jpg"></swiper-slide>
             <swiper-slide class="swiper-no-swiping"><img src="../assets/icon/brand004.jpg"></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
			
		</div>
		<div class="brand_text">
			<router-link :to="{name:s.href}" v-for="(s,i) in src" :key='s.href'>
				   <p :class='active'>{{s.message}}</p>      <!--绑定p元素的样式 -->
			</router-link>	
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			active:'hy',
			show:0,
			swiperOption: {
               pagination : '.swiper-pagination',
               paginationClickable :true,
             },
				src: [
					{href: '', title: '行业龙头',message:'专注鲜花礼品12年，2016年获评“鲜花行业龙头企业”'},
				    {href: '', title: '品牌理念',message:'花礼网倡导勇敢表达爱，享受爱的美好'},
				    {href: '', title: '3小时送达',message:'覆盖全国1000+城市，最快1~3小时送达'},
				    {href: '', title: '送前实拍',message:'坚持公开所有花款实拍，严格管控质量'},				
				],
				flag:0
			}
		},
		methods:{
			change(i){
				if(i==0){
					this.active='hy'
				}
				if(i==1){
					this.active='pp'
				}
				if(i==2){
					this.active='sd'
				}
				if(i==3){
					this.active='sh'
				}
				this.show=i;
				$('.swiper-pagination span').eq(i++).trigger('click'); //一个div触发swiper滑动
			}
		},
	}
</script>

<style scoped>
.bussiness{
	border-bottom: 8px solid #f5f5f5;
	height: 93vw;
	max-height: 470px;
}
.bussiness_box{
	padding: 12px 3% 14px;
	overflow: hidden;
}
.bussiness_box ul{
	list-style: none;
	overflow: hidden;
	padding: 12px 3% 14px;
}
.bussiness_box a{
	float: left;
    width: 25%;
    text-align: center;
    color: #9b9b9b;
    font-size: 12px;
    text-decoration: none;
}
.bussiness_box a img{
	width: 48px;
	height: 48px;
    margin: 0 auto;
    margin-bottom: 5px;
}
.bussiness_box a p{
	margin-bottom: 0px;
}
.bussiness_box a p.checked{
	color:#fe6600;
}

.bussiness_box a span{
	display: block;
    width: 48px;
    height: 48px;
    margin: 0 auto 5px;
    margin-top:5px ;
    background-size: contain;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.bussiness_box a:nth-child(1) span{
	background-image: url(../assets/icon/brand_icon01.png);
}
.bussiness_box a:nth-child(2) span{
	background-image: url(../assets/icon/brand_icon02.png);
}
.bussiness_box a:nth-child(3) span{
	background-image: url(../assets/icon/brand_icon03.png);
}
.bussiness_box a:nth-child(4) span{
	background-image: url(../assets/icon/brand_icon04.png);
}

.bussiness_box a:nth-child(1).router-link-active span.hy{
	background-image: url(../assets/icon/brand_icon010.png);
}

.bussiness_box a:nth-child(2) span.pp{
	background-image: url(../assets/icon/brand_icon020.png);
}
.bussiness_box a:nth-child(3) span.sd{
	background-image: url(../assets/icon/brand_icon030.png);
}
.bussiness_box a:nth-child(4) span.sh{
	background-image: url(../assets/icon/brand_icon040.png);
}

.brand_text a:nth-child(1) p{
	display: none;
}
.brand_text a:nth-child(2) p{
	display: none;
}
.brand_text a:nth-child(3) p{
	display: none;
}
.brand_text a:nth-child(4) p{
	display: none;
}

.brand_text a:nth-child(1) p.hy{
	display: block;
}
.brand_text a:nth-child(2) p.pp{
	display: block;
}
.brand_text a:nth-child(3) p.sd{
	display: block;
}
.brand_text a:nth-child(4) p.sh{
	display: block;
}

.bussiness_img_box{
    padding: 2px 16px 0 16px;
}
.bussiness_img_box img{
    	width: 100%;
    	height: 100%;
    	padding-bottom:5px ;
   }
.brand_text {
    padding: 5px 16px!important;
    font-weight: 700!important;
    text-align: center;
    line-height: 23px!important;
}  
.brand_text p {
    font-size: 12px;
    color: #232323;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 8px;
    text-align: center;
}
.brand_text a{
	text-decoration: none;
}



</style>