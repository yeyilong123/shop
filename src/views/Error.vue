<template>
  <div class="error">
    <div class="error-img">
      <img src="https://static.hdslb.com/error/very_sorry.png" alt />
    </div>
    <div class="error-container">
      <img src="https://hbimg.huabanimg.com/a9cd789a07d7cb2593b1f2ce330266504e46fcb7125f5-VOUmBu_fw658" alt="">
      <van-divider dashed></van-divider>
      <van-button class="error-container-btn" round plain type="primary" size="large" @click="goHome">返回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        goHome(){
            this.$router.push('/')
        }
    }
};
</script>

<style lang="scss">
.error {
  &-img {
    img {
      width: 100%;
    }
  }
  &-container{
      margin-left: 1rem;
      margin-right: 1rem;
      img{
          margin-top: 0.2rem;
          margin-bottom: 0.6rem;
      }
      &-btn{
          margin-top: 0.5rem;
      }
  }
}
</style>