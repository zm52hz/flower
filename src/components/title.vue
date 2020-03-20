<template>
	<swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide><img src="../assets/icon/new_banner_qixi_m.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/icon/new_banner_xingzuo_shizi.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/icon/new_banner_yongganai.png"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination1"  slot="pagination"></div>
    </swiper>
</template>

<script>
	export default{
	 data() {
        return {
         swiperOption: {      
          autoplay: 2500, 
          pagination : '.swiper-pagination1',
        }
      }
     }
	}
</script>

<style scoped>
	img{
		width: 100%;
		height: 100%;
	}
</style>