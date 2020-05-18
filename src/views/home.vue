<template>
  <div>
    <p>{{home}}</p>
    <p>
        <el-input-number v-model="home" :min="1" :max="10" label="描述文字">
        </el-input-number>
    </p>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {
            home:'首页'
        }
    }
}
</script>

<style>

</style>