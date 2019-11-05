<template>
  <div>
    <div class="sort">
        <div class="sort-left">
           <div v-for="(val,key) in sortproduct" :key="key" class="sort-left-title">{{val.title}}</div>
           <div v-for="(val,key) in sortproduct" :key="key" class="sort-left-name">{{val.name}}</div>
           <div v-for="(val,key) in sortproduct" :key="key" class="sort-left-hot">{{val.hot}}</div>
           <div v-for="(val,key) in sortproduct" :key="key" ><img :src="val.img" alt=""></div>
        </div>
        <div class="sort-right"></div>
    </div>
      
  </div>
</template>
 
<script>
export default {
    props: ["sortproduct"],
    data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.sort{
    display: flex;

    &-left{
        flex: 1;
        position: relative;
        img{
            width:62px;
            height:62px;
            position: absolute;
            top:0.5rem;
            right:0.5rem;
        }
        &-title{
            width:100px;
            font-size: 11px;
            color: rgb(159, 130, 87);
            margin-top: 11.5px;
            margin-left: 1.2rem;
        }
        &-name{
            width:100px;
            font-size: 14px;
            line-height: 17px;
            color: rgb(51, 51, 51);
            margin-top: 5px;
            margin-left: 1.2rem;
        }
        &-hot{
            width:100px;
            font-size: 11px;
            line-height: 12px;
            color: rgb(213, 99, 17);
            margin-left:7.5px;
            margin-top: 5px;
            margin-bottom:1.2rem;
        }
    }
    &-right{
        flex: 1;
        background: #ededed
    }
}
</style>
