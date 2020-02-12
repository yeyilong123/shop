<template>
  <div class="category">
    <van-nav-bar title="商品分类" class="category-title"></van-nav-bar>
    <div>
      <van-row>
        <van-col span="7" class="category-left">
          <van-sidebar v-model="activeKey" class="category-nav" @change="selectCategory">
            <van-sidebar-item title="中国大陆" />
            <van-sidebar-item title="台湾" />
            <van-sidebar-item title="英国" />
            <van-sidebar-item title="美国" />
            <van-sidebar-item title="德国" />
            <van-sidebar-item title="法国" />
            <van-sidebar-item title="日本" />
            <van-sidebar-item title="其他地区" />
          </van-sidebar>
        </van-col>
        <van-col span="17" class="category-container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              v-model="Loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              class="category-content"
            >
              <div class="category-content-item" @click="goDetail(item._id)" v-for="(item, index) in productList" :key="index">
                <img :src="item.img" alt />
                <div class="category-content-item-detail">
                  <p class="category-content-item-detail-name">{{item.attr.name}}</p>
                  <p class="category-content-item-detail-price">￥{{item.price}}</p>
                  <span class="category-content-item-detail-writer">{{item.attr.writer}}</span>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      activeKey: 0,
      productList: [],
      country: "中国大陆",
      start: 0,
      limit: 10,
      finished: false,
      timer: null,
      isLoading: false,
      Loading: false
    };
  },
  methods: {
    selectCategory(index) {
      switch (index) {
        case 0:
          this.country = "中国大陆";
          break;
        case 1:
          this.country = "台湾";
          break;
        case 2:
          this.country = "英国";
          break;
        case 3:
          this.country = "美国";
          break;
        case 4:
          this.country = "德国";
          break;
        case 5:
          this.country = "法国";
          break;
        case 6:
          this.country = "日本";
          break;
        case 7:
          this.country = "其他地区";
          break;
        
        default:
          this.country = "中国大陆";
      }
      this.productList = [];
      this.finished = false;
      this.getProductList();
    },
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductList,
        method: "get",
        params: {
          region: this.country,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
          this.Loading = false
        })
        .catch(() => {
        });
    },
    onLoad() {
      this.getProductList();
      this.timer = null;
    },
    onRefresh() {
      this.productList = [];
      this.getProductList();
    },
    goDetail(id){
      this.$router.push({
        path: '/detail',
        query: {
          id: id
        }
      })
    }
  }
};
</script>

<style lang="scss">
.category {
  &-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: #fafafa;
    height: 0.9rem;
  }
  &-nav {
    margin-top: 0.9rem;
    margin-bottom: 1rem;
  }
  &-container {
    position: fixed;
    top: 0;
    bottom: 1rem;
    top: 0.9rem;
    right: 0;
    overflow-y: scroll;
  }
  &-content {
    &-item {
      margin-top: 0.4rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: 0.1rem;
      img {
        width: 1.8rem;
        height: 2rem;
        flex: 3;
      }
      &-detail {
        position: relative;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        flex: 7;
        &-name {
          margin-top: 0.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; // 控制多行的行数
          -webkit-box-orient: vertical;
        }
        &-price {
          position: absolute;
          bottom: 0.1rem;
          color: #eb5613;
          margin-bottom: 0.1rem;
        }
        &-writer {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1; // 控制多行的行数
          -webkit-box-orient: vertical;
          position: absolute;
          bottom: 0.1rem;
          left: 1.3rem;
          margin-bottom: 0.1rem;
        }
      }
    }
  }
}
</style>
