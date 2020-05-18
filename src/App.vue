<template>
    <div id='app' class="container">
        <router-view v-wechat-title='$route.meta.title'></router-view>
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {
            test: '测试webpack',
            title:''
        }
    }
}
</script>
<style scoped lang='stylus'>
    .container{
        font-size: 60px;
        color: red;
        background: yellow;
        transform:scale(0.5);
        box-shadow: 0 10px 10px #f3f3f3
    }
</style>