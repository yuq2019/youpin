<template>
  <div class="last-bg">
    <!-- 渲染商品信息 -->
    <div class="last" v-for="(val,key) in lastproduct" :key="key">
      <!-- 商品卡片左边 -->
      <div class="last-left">
        <div class="last-left-content">
          <span>{{key+4}}</span>
          <img :src="val.img" alt />
        </div>
      </div>

      <!-- 商品卡片右边 -->
      <div class="last-right">
        <div class="last-right-title">{{val.name}}</div>

        <!-- 商品卡片右边底部 -->
        <div class="last-right-bottom">
          <span class="last-right-bottom-price">¥{{val.price}}</span>
          <img src="../assets/icons/cart.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lastproduct"],
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.last-bg {
  background-color: rgb(219, 212, 212);
}
.last {
  display: flex;
  width: 95%;
  margin: 0 auto;
  background: #fff;
  position: relative;
  border-bottom: 1px solid rgb(209, 209, 206);
  height: 88px;
  padding-top: 10px;
  &-left {
    flex: 1.5;

    &-content {
      border-left: 2px solid rgb(221, 193, 31);
      margin-left: 12px;
      height: 66px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 16.56px;
        color: rgb(228, 187, 100);
      }
    }
    img {
      width: 66px;
      height: 66px;
      margin: 0px 10px 0px 10px;
    }
  }
  &-right {
    width: 0;
    flex: 3;
    margin: 10px 10px 0px 0px;

    &-des {
      //商品描述
      font-size: 12px;
      font-weight: bold;
      color: rgb(159, 130, 87);
      span {
        background-color: rgb(245, 242, 238);
        padding: 3px;
      }
    }

    &-title {
      //商品标题
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
    }

    &-bottom {
      //底部描述
      position: relative;
      width: 100%;
      height: 1.5rem;
      margin-top: 5px;
      &-price {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0;
        font-size: 18px;
        color: rgb(169, 33, 18);
        font-weight: 500;
      }
      img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: 0;
        top: 0.3rem;
        text-align: 2rem;
      }
    }
  }
}
</style>
