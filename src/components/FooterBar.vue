<template>
  <div>
    <van-tabbar active-color="#FF6000" v-model="active" @change="change">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" :to="isLogin">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  created(){
      this.active = parseInt(localStorage.getItem('active'))
        this.whichPage();
  },
  methods: {
      change(active){
          localStorage.setItem('active', active);
      }
  }
};
</script>

<style lang="scss" scoped>
</style>