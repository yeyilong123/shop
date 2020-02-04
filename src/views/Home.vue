<template>
  <div class="container">
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left" size="1.3em"></van-icon>
      <van-icon name="cart-o" slot="right" size="1.3em"></van-icon>
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
          <div class="hot-swiper-content">
            <div class="hot-swiper-content-image">
              <img :src="item.img_url" alt />
            </div>
            <div class="hot-swiper-content-name">{{item.title}}</div>
            <div class="hot-swiper-content-price">￥{{item.m_price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <div class="variety-item-image">
            <img :src="item.img_url" />
          </div>
          <div class="variety-item-name">{{item.title}}</div>
          <div class="variety-item-description">
            <span class="variety-item-description-price">￥{{item.m_price}}</span>
            <span class="variety-item-description-writer">作者: {{item.attr.作者}}</span>
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
import url from '@/service.config.js'

export default {
  data() {
    return {
      carouselImg: [
        {
          name: "img1",
          src:
            "http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg"
        },
        {
          name: "img2",
          src:
            "http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg"
        },
        {
          name: "img3",
          src:
            "http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg"
        }
      ],
      hotProducts: [],
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
  created(){
    axios.get(url.getHotProducts).then((res) => {
      this.hotProducts = res.data
    })
    axios.get(url.getVarietyItem).then((res) => {
      this.varietyItem = res.data
    })
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
  z-index: 999!important;
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
      &-image{
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
      &-price{
        color: #EB5613;
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
    padding: 0.1rem;
    flex-basis: 45%;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.15rem;
    &-image{
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

    &-description{
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      width: 2.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &-price{
        color: #EB5613;
      }
      &-writer{
        margin-left: 0.5rem;
        font-size: 0.1rem;
        color: #999;
      }
    }
    
  }
  
}
</style>