<template>
  <div class="all">
   <div class="header">
     <!-- 箭头 -->
     <div class="header-nav">
        <van-icon name="arrow-left" class="header-nav-icon"/>
     </div>
     <!-- 头部导航栏 -->
     <div class="header-title">
       <div class="header-title-hot">24小时最热榜</div>
       <div class="header-title-bottom">排序根据销量、搜索热度、好评等综合计算得出</div>
     </div>
     
     <!-- 轮播图 -->
     <div class="scrop">
       <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item class="swipe"><img src="@/assets/imgs/srollpicture.webp" class="swipe-one" alt=""></van-swipe-item>
          <van-swipe-item class="swipe"><img src="@/assets/imgs/scroll2picture.webp" class="swipe-one" alt=""></van-swipe-item>
          <van-swipe-item class="swipe"><img src="@/assets/imgs/srollpicture.webp" class="swipe-one" alt=""></van-swipe-item>
          <van-swipe-item class="swipe"><img src="@/assets/imgs/scroll2picture.webp" class="swipe-one" alt=""></van-swipe-item>
        </van-swipe> 

     </div>
   </div>
    <HotBill  :product="product" ></HotBill>
    <LastBill :lastproduct="lastproduct"></LastBill>
    <div class="sort"><span>品类热销榜</span></div>
    <SortBill :sortproduct="sortproduct"></SortBill>
    
  </div>
</template>

<script>
import HotBill from "@/components/Hotbill.vue"
import LastBill from "@/components/Lastbill.vue"
import SortBill from "@/components/Sortbill.vue"

export default {
  components: {
    HotBill,
    LastBill,
    SortBill
  },
  data(){
    return {
      product:[
        {
          leftTab:'https://img.youpin.mi-img.com/static/weex_images/v1/gold.png',
          img:'https://img.youpin.mi-img.com/pic_square/102607_bb2ccae19f0c0632439557204ce34a97.jpg@base@tag=imgScale&F=webp?275_0',
          //  产品的名字
          name: "云米互联网电热水器Air（60L双胆优享版)",
          // 介绍
          msg: "双胆速热 60L大容量",
          //  价格
          price: "123"
      },
         {
          leftTab:'https://img.youpin.mi-img.com/static/weex_images/v1/silver.png',
          img:'https://img.youpin.mi-img.com/shopmain/3a30e8286e0281eff72a762d93babb50.jpg@base@tag=imgScale&F=webp?275_0',
          //  产品的名字
          name: "云米互联网电热水器Air（60L双胆优享版)",
          // 介绍
          msg: "双胆速热 60L大容量",
          //  价格
          price: "123"
      },
      {
          leftTab:'https://img.youpin.mi-img.com/static/weex_images/v1/bronze.png',
          img:'https://img.youpin.mi-img.com/pic_square/102495_917736b3eccd8177c7b7fd3b391dfb9f.jpg@base@tag=imgScale&F=webp?275_2',
          //  产品的名字
          name: "云米互联网电热水器Air（60L双胆优享版)",
          // 介绍
          msg: "双胆速热 60L大容量",
          //  价格
          price: "123"
      },

      ],
      lastproduct:[
        {
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        },
        {
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        },
        {
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        },
        {
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        },{
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        },
        {
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        },
        {
          img:"https://img.youpin.mi-img.com/shopmain/d819c1ad69314d779058dc096cba9fc4.png@base@tag=imgScale&w=800&h=800&F=webp?275_3",
          name:"云米智能马桶（包安装）",
          price:"2345"
        }
      ],
      sortproduct:[
        {
          title:"母婴热销榜",
          name:"童心童趣好玩",
          hot:"热度↑513%",
          img:"https://img.youpin.mi-img.com/goods/946762670e2eea4d7d5d9070deda17aa.jpg@base@tag=imgScale&F=webp?466_1"
        }
        
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  // height: 230px;
  background-image: url('../assets/imgs/backgroundred.webp');
  background-size: 100%;
  &-nav {
    height: 32px;
    width: 100%;
    font-size: 24px;
    padding-top: 5px;
    // padding-left: 10px;
    color: #fff;
    &-icon{
      margin-left: 10px;
    }
  }
  &-title{
    width: 100%;
    &-hot{
      margin-top: 25px;
      text-align: center;
      color: #fff;
      font-size: 21px;
    }
    &-bottom{
      margin-top:5px;
      color: #fff;
      font-size: 10px;
      text-align: center;
    }
  }
}
.header-bar{
  width:100%;
  height: 38px;
}

.swipe{
  text-align: center;
  margin-top:10px;
  &-one{
    width:95%;
  }
}
.sort{
  margin:0.5rem 0rem 0.5rem 1rem;
}


</style>
