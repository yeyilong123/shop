<template>
  <div class="cart">
    <van-nav-bar title="购物车" />
    <van-card
      v-for="(item, index) in productList"
      :key="index"
      :num="item.number"
      :price="item.productId.price"
      :desc="item.productId.attr.publish"
      :title="item.productId.attr.name"
      :thumb="item.productId.img"
    >
      <div slot="footer">
        <van-button size="mini" @click="delCart(item.productId._id, index)">删除</van-button>
      </div>
    </van-card>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import url from "@/service.config.js";
import axios from "axios";
export default {
  data() {
    return {
      productList: []
    };
  },
  created() {
    if (JSON.stringify(this.userInfo) == "{}") {
      this.$toast.fail("请登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "post",
        data: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          // console.log(res);
          for (let item of res.data) {
            this.productList.push(item);
          }
        })
        .catch(() => {
          // console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      this.$toast({
        message: "程序猿正在加紧开发此功能",
        icon: "like-o"
      });
    },
    delCart(id, index){
      axios({
        url: url.delCart,
        method: 'get',
        params: {
          userId: this.userInfo._id,
          productId: id
        }
      }).then((res)=>{
        if(res.data.deletedCount == 1){
          this.productList.splice(index, 1)
        }else{
          this.$toast.fail('哎呀出错啦，等会再试吧')
        }
      }).catch(()=>{
        // console.log(err)
      })
    }
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice(){
      return this.productList.reduce((sum, elem)=>{
        sum+=(elem.number*elem.productId.price)
        return sum
      }, 0) * 100
    }
  }
};
</script>

<style lang="scss">
.submit-bar {
  margin-bottom: 1rem;
}
</style>
