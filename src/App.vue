<template>
    <div id="app">
        <div class="container">
            <div class="aside">
                <aside-comp></aside-comp>
            </div>
            <div class="article">
                <div class="header-comp">
                    <head-comp></head-comp>
                </div>
                <div class="main">
                    <router-view ></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import asideComp from '@/components/Tree.vue'
import headComp from '@/components/Header.vue'
export default {
    name: "App",
    data(){
        return {};
    },
    components:{
        asideComp,
        headComp
    }
};
</script>
<style scoped lang='stylus'>
    .container{
        display flex
        background #F4F4F4
    }
    .aside{
        flex-basis 15%
    }
    .article{
        flex 1
        .main{
            margin 10px 0 0 10px
        }
    }
</style>