<template>
	<div>
		<div class="main">
			<!-- 头部导航搜索-->
			<div class="top_header">
				<div class="form">
					<div class="input_box">
						<input type="search" class="new-input" required="required" placeholder="搜索鲜花、蛋糕、礼品" style="color:#000" />
						<span class="search_fdj"></span>
					</div>
				</div>
			</div>
			<div class="categories">
				<div class="left_list">
					<ul>
						<li v-for="item in banner" @click="select(item.id,item.sortId)" :class="{ 'search-condition-yes': sortId==item.id}">{{item.title}}</li>
					</ul>
				</div>
			</div>
			<div class="right_main">
				<div class="active">
					<div class="top_banner">
						<a href="" v-if="sortId==1">
							<img src="../../static/icon/all_banner_zhongqiu.jpg" />
							<div class="layer_text">
								<p>相思念•以礼寄情让爱回家</p>
							</div>
						</a>
						<a href="" v-if="sortId==2">
							<img src="../../static/icon/all_cla_ban_business flower.jpg" />
							<div class="layer_text">
								<p>浪漫告白·卡罗拉红玫瑰11枝 ¥235</p>
							</div>
						</a>
						
					</div>
					<div class="product">
						<p class="title">大家都在找</p>
						<div class="pro_list">
							<ul v-if="sortId==1">
								<li v-for="item in sort">
									<a href="#">
										<img :src="'../../static/icon/'+item.sortImg" />
										<p>{{item.sortName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==2">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==3">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==4">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==5">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==6">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==7">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
							<ul v-if="sortId==8">
								<li v-for="item in products">
									<a @click="jumpToproDetail(item.id)">
										<img :src="'../../static/imgs/'+item.proImage"/>
										<p>{{item.proName}}</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<foot :show="1"></foot>
	</div>
</template>

<script>
	import f from './foot.vue'
	export default {
		components: {
			'foot': f // 添加底部导航组件
		},
		data() {
			return {
				banner: [{					
						title: '热销产品',
						sortId:'',
						id: '1'
					},
					{					
						title: '鲜花',
						sortId:'f7cb0f9ddfc04c67b4a51ccb8d32fc34',
						id: '2'
					},
					{						
						title: '蛋糕',
						sortId:'19d96fc898ee43099c1ede76d2c50f65',
						id: '3'
					},
					{					
						title: '礼篮',
						sortId:'1d64ef49d6f94046897228120dcb0495',
						id: '4'
					},
					{					
						title: '永生花',
						sortId:'80265b20f133495590497bef35c7184b',
						id: '5'
					},
					{						
						title: '特色礼品',
						sortId:'3197d89599aa405b96f62535d3d5e655',
						id: '6'
					},
					{
						title: '品牌公仔',
						sortId:'a345663ee2d5426ea5809f6d3f0c52cc',
						id: '7'
					},
					{
						title: '绿植花卉',
						sortId:'3f387b7b70c74e6189379fd360954e49',
						id: '8'
					}
				],
				sort: '',
				products:'',
				type: '',
				sortId: ''
			}
		},
		methods: {
			select(id,sortId) {
				var that=this
				that.sortId = id;
					$.ajax({
						type:"get",
						url:"/flowers/product?sortId="+sortId,
						dataType: "json",
						async:true,
						success(ret){
							that.products=ret.data;
						}
					});		
			},
			getAllSort() {
				var that = this
				$.ajax({
					type: "get",
					url: "/flowers/sort",
					dataType: "json",
					async: true,
					success(ret) {
						that.sort = ret.data;
						console.log(ret);
					}
				})
			},
			jumpToproDetail(id){
				this.$router.push('/proDetail?id='+id);
			}
		},
		created() {
			//this.sortId=id;
			this.select('1');
			this.getAllSort();
		}
	}
</script>
<style scoped>
	.top_header {
		background-color: rgba(245, 245, 245, .9);
		height: 44px;
		padding: 7px 16px;
	}
	
	.form {
		margin-bottom: 0;
		height: 100%;
		background: #fff;
	}
	
	.input_box {
		height: 100%;
	}
	
	.new-input {
		background: none repeat scroll 0 0 #FFFFFF;
		line-height: 2.2em;
		height: 100%;
		width: calc(100% - 30px);
		padding: 10px 0px;
		border-radius: 2px;
		outline: none;
		font-weight: normal;
		text-indent: 5px;
		font-size: 12px;
		border: 0px;
	}
	
	.search_fdj {
		display: inline-block;
		width: 24px;
		height: 24px;
		background: url(../../static/icon/icon_Search.png) no-repeat;
		background-size: 24px;
		margin-top: 10px;
		margin-right: 22px;
		position: absolute;
		right: 0;
		top: 0;
		float: right;
	}
	
	.left_list {
		width: 25%;
		float: left;
		overflow-y: scroll;
		height: 576px;
		background-color: rgba(245, 245, 245, .9);
	}
	
	.left_list ul li {
		line-height: 48px;
		text-align: center;
	}
	
	.search-condition-yes {
		background-color: #fff;
		border-right: none;
		color: #f60;
	}
	
	.left_list ul li.active {
		background-color: #fff;
		border-right: none;
		color: #f60;
	}
	
	.right_main {
		margin-left: 25%;
		width: 75%;
		padding: 8px;
		overflow-y: scroll;
		font-size: 12px;
	}
	
	.right_main .top_banner {
		width: 100%;
		position: relative;
	}
	
	.layer_text {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .3);
	}
	
	.right_main .top_banner img {
		width: 100%;
		display: block;
	}
	
	.layer_text p {
		color: #fff;
		position: absolute;
		top: 50%;
		margin-top: -6px;
		text-align: center;
		width: 100%;
	}
	
	.right_main .product .title {
		margin-top: 19px;
		margin-bottom: 21px;
		font-size: 12px;
	}
	
	.right_main .pro_list ul,
	.right_main .pro_color_list ul {
		overflow: hidden;
	}
	
	.right_main .pro_list li {
		float: left;
		width: 33.3%;
		height: 7em;
		text-align: center;
	}
	
	.right_main .pro_list img {
		width: 56px;
		display: block;
		margin: 0 auto;
	}
	
	.right_main .pro_list p {
		margin: 3px 0 5px 0;
		font-size: 10px;
	}
	
	ul,
	li,
	i {
		list-style: none outside none;
		padding: 0;
		margin: 0;
		font-style: normal;
	}
	
	a {
		text-decoration: none;
		color: #666;
		-webkit-tap-highlight-color: transparent;
	}
</style>