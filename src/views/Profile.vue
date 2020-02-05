<template>
  <div class="profile">
    <van-tabs v-model="active">
      <img src="" alt="">
      <van-tab title="登录" class="profile-container">
        <div>
          <van-cell-group class="profile-container-input">
            <van-field label="用户名" required clearable v-model="loginUsername" placeholder="请输入用户名" />
            <van-field label="密码" required clearable v-model="loginPassword" placeholder="请输入密码" />
          </van-cell-group>
          <div class="profile-container-btn">
            <van-button color="#FF5000" round type="primary" size="large">登  录</van-button>
          </div>
        </div>
      </van-tab>
      <van-tab title="注册" class="profile-container">
        <div>
          <van-cell-group class="profile-container-input">
            <van-field label="用户名" required clearable v-model="registUsername" placeholder="请输入用户名" />
            <van-field label="密码" required clearable v-model="registPassword" placeholder="请输入密码" />
          </van-cell-group>
          <div class="profile-container-btn">
            <van-button color="#FF5000" round type="primary" size="large">注  册</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      loginUsername: '',
      loginPassword: '',
      registUsername: '',
      registPassword: '',
    };
  }
};
</script>

<style lang="scss">
.profile{
  &-container{
    margin-top: 2rem;
    padding: 0 0.5rem 0 0.5rem;
    &-btn{
      margin-top: 0.3rem;
    }
  }
}
</style>
