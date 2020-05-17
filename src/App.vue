<template>
    <div id='app' class="container">
        <p>{{test}}</p>
        <img src="./static/imgs/code.jpg">
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {
            test: '测试webpack'
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