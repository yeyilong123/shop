<template>
  <div class="detail">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <div class="detail-container">
      <img :src="detail.img" alt />
      <p class="detail-container-price">
        ￥{{detail.price}}
        <van-tag class="detail-container-tag" round type="success">促销价</van-tag>
      </p>
      <p class="detail-container-title">{{detail.title}}</p>
      <div class="detail-container-publishtitle">
        出版社
        <span class="detail-container-publish">{{detail.attr.publish}}</span>
      </div>
      <div class="detail-container-writertitle">
        作
        <span class="detail-container-space">作</span>家
        <span class="detail-container-writer">{{detail.attr.writer}}</span>
      </div>
      <div class="detail-container-writertitle">
        <span>
          地
          <span class="detail-container-space">作</span>区
        </span>
        <span class="detail-container-region">{{detail.attr.region}}</span>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="goServicer" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="buyNow" />
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.query.id
      }
    })
      .then(res => {
        this.detail = res.data;
      })
      .catch(() => {
      });
  },
  methods: {
    addCart() {
      if (JSON.stringify(this.userInfo) == "{}") {
        this.$toast.fail("请登录");
        setTimeout(() => {
          this.$router.push("/profile");
        }, 1000);
      } else {
        axios({
          url: url.addCart,
          method: "post",
          data: {
            productId: this.detail._id,
            userId: this.userInfo._id
          }
        })
          .then(res => {
            if (res.data == "") {
              axios({
                url: url.addToCart,
                method: "post",
                data: {
                  productId: this.detail._id,
                  userId: this.userInfo._id,
                  number: 1
                }
              })
                .then(res => {
                  if(res.data.code == 200){
                    this.$toast.success('加入购物车成功')
                  }else{
                    this.$toast.fail('哎呀出错啦，等会再试吧')
                  }
                })
                .catch(() => {
                  this.$toast.fail('哎呀出错啦，等会再试吧')
                });
            } else {
              axios({
                url: url.addNumber,
                method: "post",
                data: {
                  productId: this.detail._id,
                  userId: this.userInfo._id,
                }
              })
                .then(res => {
                  if(res.data.code == 201){
                    this.$toast.success('购物车数量+1')
                  }else{
                    this.$toast.fail('哎呀出错啦，等会再试吧')
                  }
                })
                .catch(() => {
                  this.$toast.fail('哎呀出错啦，等会再试吧')
                });
            }
          })
          .catch(() => {
          });
      }
    },
    goServicer(){
      this.$toast({
        message: "客服小姐姐暂时不在线哦",
        icon: "contact"
      });
    },
    goCart(){
      this.$router.push('/cart')
    },
    buyNow(){
      this.$toast({
        message: "请先加入购物车再购买哦",
        icon: "cart-o"
      });
    }
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style lang="scss">
.detail {
  &-container {
    img {
      width: 100%;
      height: 5rem;
    }
    &-price {
      color: #ff7300;
      font-size: 0.5rem;
      margin-left: 0.1rem;
    }
    &-title {
      font-weight: bolder;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
    }
    &-publishtitle {
      margin-top: 0.2rem;
      margin-left: 0.1rem;
      color: #999;
    }
    &-publish {
      color: #000;
      margin-left: 0.1rem;
    }
    &-writertitle {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      color: #999;
    }
    &-writer {
      color: #000;
      margin-left: 0.1rem;
    }
    &-space {
      color: #fff;
    }
    &-region {
      color: #000;
      margin-left: 0.1rem;
    }
  }
}
</style>