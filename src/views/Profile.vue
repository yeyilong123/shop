<template>
  <div class="profile">
    <van-tabs v-model="active">
      <img src alt />
      <van-tab title="登录" class="profile-container">
        <div>
          <van-cell-group class="profile-container-input">
            <van-field label="用户名" required clearable v-model="loginUsername" placeholder="请输入用户名" />
            <van-field
              label="密码"
              type="password"
              required
              clearable
              v-model="loginPassword"
              placeholder="请输入密码"
            />
          </van-cell-group>
          <div class="profile-container-btn">
            <van-button
              @click="loginHandel"
              color="#FF5000"
              round
              type="primary"
              size="large"
              :disabled="isDisable"
            >登 录</van-button>
          </div>
        </div>
      </van-tab>
      <van-tab title="注册" class="profile-container">
        <div>
          <van-cell-group class="profile-container-input">
            <van-field
              label="用户名"
              required
              clearable
              v-model="registUsername"
              placeholder="请输入用户名"
            />
            <van-field
              label="密码"
              type="password"
              required
              clearable
              v-model="registPassword"
              placeholder="请输入密码"
            />
          </van-cell-group>
          <div class="profile-container-btn">
            <van-button
              @click="registHandle"
              color="#FF5000"
              round
              type="primary"
              size="large"
              :disabled="isDisable"
            >注 册</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      active: 2,
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: "",
      isDisable: false
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    registHandle() {
      this.isDisable = true;
      axios({
        url: url.registUser,
        method: "post",
        data: {
          userName: this.registUsername,
          password: this.registPassword
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.registUsername = this.registPassword = "";
          } else {
            this.$toast.fail("注册失败");
          }
        })
        .catch(() => {
          this.$toast.fail("注册失败");
        });
      this.isDisable = false;
    },

    loginHandel() {
      this.isDisable = true;
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, 1000);
            })
              .then(() => {
                this.$toast.success("登录成功");
                this.loginAction(res.data.userInfo);
                this.$router.go(-1);
              })
              .catch(() => {
                this.$toast.fail("登录失败");
              });
          } else if (res.data.code == 201) {
            this.$toast.fail("用户名不存在");
          } else if (res.data.code == 202) {
            this.$toast.fail("密码错误");
          }
        })
        .catch(() => {
        });
      this.isDisable = false;
    }
  }
};
</script>

<style lang="scss">
.profile {
  &-container {
    margin-top: 2rem;
    padding: 0 0.5rem 0 0.5rem;
    &-btn {
      margin-top: 0.3rem;
    }
  }
}
</style>
