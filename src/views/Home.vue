<template>
  <div class="container">
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left" size="1.3em"></van-icon>
      <van-icon
        @click="$router.push('/profile')"
        slot="right"
        size="0.9em"
      >{{JSON.stringify(userInfo) == '{}' ? '未登录' : userInfo.userName}}</van-icon>
    </van-nav-bar>

    <div class="carousel">
      <div class="swiper-container">
        <van-swipe :autoplay="3000">
          <van-swipe-item class="carousel-item" v-for="(item, index) in carouselImg" :key="index">
            <img v-lazy="item.src" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in hotProducts" :key="index">
          <div class="hot-swiper-content" @click="goDetail(item._id)">
            <div class="hot-swiper-content-image">
              <img :src="item.img" alt />
            </div>
            <div class="hot-swiper-content-name">{{item.attr.name}}</div>
            <div class="hot-swiper-content-price">￥{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li @click="goDetail(item._id)" class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <div class="variety-item-image">
            <img :src="item.img" />
          </div>
          <div class="variety-item-name">{{item.attr.name}}</div>
          <div class="variety-item-description">
            <span class="variety-item-description-price">￥{{item.price}}</span>
            <span class="variety-item-description-writer">作者: {{item.attr.writer}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      carouselImg: [
        {
          name: "img1",
          src:
            "http://images.china-pub.com/edition07/images2012/900500/sfzmx_900500.png"
        },
        {
          name: "img2",
          src:
            "http://images.china-pub.com/edition07/images2012/900500/sjzt1912_900500.png"
        },
        {
          name: "img3",
          src:
            "http://images.china-pub.com/edition07/images2012/900500/yldxf_900500.jpg"
        },
        {
          name: "img4",
          src:
            "http://images.china-pub.com/edition07/images2012/900500/xgboost_900500.jpg"
        },
        {
          name: "img5",
          src:
            "http://images.china-pub.com/edition07/images2012/900500/java3_900500.jpg"
        }
      ],
      hotProducts: [
        {
          _id: "5e3f79b2e051ed04f4805b76",
          attr: {
            name: "中国孩子最喜欢看的格林童话"
          },
          img:
            "http://gi1.md.alicdn.com/bao/uploaded/i1/T1_GO7FClXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 35.8,
        },
        {
          _id: "5e3f79b2e051ed04f4805b80",
          attr: {
            name: "解密……即景创意摄影"
          },
          img:
            "http://gi2.md.alicdn.com/bao/uploaded/i2/T11F75FrXhXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 67.4,
        },
        {
          _id: "5e3f79b2e051ed04f4805b87",
          attr: {
            name: "《中国第一套儿童情景百科》海豚传媒"
          },
          img:
            "http://gi2.md.alicdn.com/bao/uploaded/i2/16326024110209043/T10_KZXpNgXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 718,
        },
        {
          _id: "5e3f79b2e051ed04f4805b88",
          attr: {
            name: "小狐狸童书绘本"
          },
          img:
            "http://gi4.md.alicdn.com/bao/uploaded/i4/18828031051952223/T1gR.YXiBeXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 39.8,
        },
        {
          _id: "5e3f79b2e051ed04f4805b8b",
          attr: {
            name: "卡尔·威特教育全书"
          },
          img:
            "http://gi3.md.alicdn.com/bao/uploaded/i3/T1vu2JXn4kXXaFSuM0_034807.jpg_430x430q90.jpg",
          price: 29.15,
        },
        {
          _id: "5e3f79b2e051ed04f4805b8d",
          attr: {
            name: "小狐狸童书绘本"
          },
          img:
            "http://gi4.md.alicdn.com/bao/uploaded/i4/12285020251880882/T1OqdFXDJcXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 29.8,
        },
        {
          _id: "5e3f79b2e051ed04f4805b91",
          attr: {
            name: "德国民法通论"
          },
          img:
            "http://gi3.md.alicdn.com/bao/uploaded/i3/T1obxvFz0hXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 48.5,
        },
        {
          _id: "5e3f79b2e051ed04f4805b8f",
          attr: {
            name: "解密(附光盘人像 & 魅态摄影)"
          },
          img:
            "http://gi3.md.alicdn.com/bao/uploaded/i3/T11WkOFH4dXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
          price: 67.4,
        },
        {
          _id: "5e3f79b2e051ed04f4805b9f",
          attr: {
            name: "小狐狸童书绘本"
          },
          img:
            "http://gi1.md.alicdn.com/bao/uploaded/i1/T1.tjIXhhdXXcAO0M7_064229.jpg_430x430q90.jpg",
          price: 45,
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },
      varietyItem: []
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    axios({
      url: url.getProductList,
      method: 'get',
      params: {
        region: '中国大陆',
        start: 50,
        limit: 30
      }
    }).then(res => {
      this.varietyItem = res.data
    });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
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
.container {
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  background: #f5f5f5;
}

.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  z-index: 999 !important;
}

.carousel {
  margin-top: 0.9rem;
  height: 2.5rem;
  &-item {
    img {
      width: 100%;
      height: 2.5rem;
    }
  }
}

.swiper-container {
  border-radius: 0.3rem;
}

.hot {
  border-radius: 0.3rem;
  background: #fff;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  &-title {
    width: 100%;
    height: 0.5rem;
    padding-left: 0.3rem;
    padding-top: 0.1rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    &-content {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      width: 1.9rem;
      &-image {
        text-align: center;
        img {
          width: 1.8rem;
          height: 1.8rem;
        }
      }
      &-name {
        margin-left: 0.1rem;
        margin-right: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; // 控制多行的行数
        -webkit-box-orient: vertical;
      }
      &-price {
        color: #eb5613;
      }
    }
  }
}

.variety {
  margin-top: 0.2rem;
  border-radius: 0.3rem;
  margin-bottom: 1.2rem;
  &-title {
    margin-left: 0.1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-item {
    position: relative;
    height: 4rem;
    padding: 0.1rem;
    flex-basis: 45%;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.15rem;
    &-image {
      text-align: center;
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    &-name {
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }

    &-description {
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      position: absolute;
      bottom: 0.1rem;
      width: 2.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &-price {
        color: #eb5613;
      }
      &-writer {
        margin-left: 0.5rem;
        font-size: 0.1rem;
        color: #999;
      }
    }
  }
}
</style>