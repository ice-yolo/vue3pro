<template>
    <div>
        <h2>Home</h2>
        <button @click="() => { router.push('/about') }">Go to About</button>
        <div class="pro" v-for="item in arr" :key="item">
            <!-- 名称 -->
            <div>{{ item.name }}</div>
            <!-- 价格 -->
            <div>{{ item.price }}</div>
            <!-- 图片 -->
            <img :src="item.img" alt=""></img>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

let router = useRouter()

const arr = ref([])
let getData = async() => {
    let { data: { ls } } = await axios.get('http://localhost:3000/ls')
    arr.value = ls
}

onMounted(() => {
    getData()
})
</script>

<style lang="scss" scoped>

.pro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 200px;
    background-color: #ccc;
    margin: 10px;
    border-radius: 10px;
}

img {
    width: 100px;
    height: 100px;
}

button {
    margin: 20px;
}

</style>