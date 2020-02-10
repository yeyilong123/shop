<template>
  <div class="loginprofile">
    <div class="loginprofile-title">我的</div>
    <div class="profile-header">
      <div class="avatar-url">
        <img
          src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1581251737&di=6e8a05faec70ed52e29a26e9d7bafa4b&src=http://pic.90sjimg.com/design/01/44/52/22/58f96ffc02266.png"
          alt
        />
      </div>
      <span class="nickname">{{userInfo.userName}}</span>
    </div>

    <div class="loginprofile-container">
      <van-grid class="loginprofile-container-grid" :column-num="5">
        <van-grid-item icon="paid" text="待付款" />
        <van-grid-item icon="send-gift-o" text="待发货" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="records" text="评价" />
        <van-grid-item icon="cash-back-record" text="售后" />
      </van-grid>

      <div class="loginprofile-container-btn">
        <van-button @click="quit" round type="danger" size="large">退出</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["loginAction"]),
    quit() {
      this.loginAction({});
      this.$toast.success("退出成功");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.loginprofile {
  position: relative;
  &-title {
    position: absolute;
    color: #f5f5f5;
    font-size: 0.35rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
  }
  &-container {
    margin: 0.3rem 0.2rem 0 0.2rem;
    &-btn {
      margin-top: 1rem;
    }
  }
}

.profile-header {
  background-image: url(data:image/jpeg;base64,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);
  background-size: cover;
  height: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.avatar-url {
  margin-top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  overflow: hidden;
  border-radius: 50%;
}

.nickname {
  margin-top: 0.15rem;
  font-size: 0.4rem;
  font-weight: 400;
}
</style>