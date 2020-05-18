<template>
    <div id='app'>
        <router-view v-wechat-title='$route.meta.title'></router-view>
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {}
    }
}
</script>
<style lang="stylus" scoped>
    .d{
        margin 0
    }
</style>