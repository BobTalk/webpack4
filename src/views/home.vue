<template>
  <div>
    <p class="home">{{home}}</p>
    <i class="font_icon icon-cuowu"></i>
    <p>
        <el-input-number v-model="home" :min="1" :max="10" label="描述文字">
        </el-input-number>
    </p>
    <img :src="urlImg"/>
    <hr>
    <img src="@/assets/imgs/arrow.svg" alt="">
    <hr>
    <div class="img_bg"> </div>
  </div>
</template>

<script>
import urlImg from "@/assets/imgs/code.jpg";
export default {
    name: "Home",
    data(){
        return {
            urlImg,
            home:"首页"
        };
    }
};
</script>

<style lang="stylus" scoped>
    .home{
        font-size 16px
    }
    .img_bg{
        background url("../assets/imgs/code.jpg") 100% 100%
        width 500px
        height 500px
    }
</style>