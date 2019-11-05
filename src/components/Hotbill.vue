<template>
  <div class="hotbill-bg">

    <!-- 渲染商品信息 -->
    <div class="hotbill"  v-for="(val,key) in product" :key="key">
      <img :src="val.leftTab"  class="hotbill-left-tab" alt="">

      <!-- 商品卡片左边 -->
      <div class="hotbill-left">
        <img :src="val.img"  alt="" />
      </div>

      <!-- 商品卡片右边 -->
      <div class="hotbill-right">
        <div class="hotbill-right-title" >{{val.name}}</div>
           <div class="hotbill-right-des">
            <span>推荐 | {{val.msg}}</span>
           </div>

        <!-- 商品卡片右边底部 -->
        <div class="hotbill-right-bottom">
          <span class="hotbill-right-bottom-price">¥{{val.price}}</span>
          <img src="../assets/icons/cart.png" alt=""> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.hotbill-bg{
  background-color:  rgb(177, 29, 26);
}
.hotbill{
  display: flex;
  width: 95%;
  margin: 0 auto;
  background: #fff;
  position: relative;
  border-bottom: 1px solid rgb(209, 209, 206);
  &-left-tab{
    width: 38px;
    height: 43px;
    position: absolute;
    left: 0px;
    top: -1px;

  }
  &-left{
    flex: 1;
    img{
      width: 100px;
      height: 100px;
      margin:10px 10px 10px 10px;
    }
  }
  &-right{
    width: 0;
    flex: 2;
    margin:10px 10px 10px 0px;
    
    &-des{ //商品描述
          font-size: 12px;
          font-weight: bold;
          color: rgb(159, 130, 87);
          span{
            background-color: rgb(245, 242, 238);
            padding:3px;
          }
    }

    &-title{//商品标题
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-size: 16px;
    }

    &-bottom{//底部描述
        position: relative;
        margin-top:38px;
        width: 100%;
        height: 1.5rem;

      &-price{
        width:1rem;
        height:1rem;
        position: absolute;
        left:0;
        font-size: 14px;
        color: rgb(169, 33, 18);
        font-weight: 500;
      }
      img{
        width:1rem;
        height:1rem;
        position: absolute;
        right:0;
        top:0.3rem;
        text-align: 2rem;
      }
    }
    
  }
}
</style>
