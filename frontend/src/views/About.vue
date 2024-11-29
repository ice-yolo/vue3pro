<template>
    <div>
        <h1>hello vue!</h1>
        <button @click="() => { router.push('/home') }">go to home</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
</script>

<style lang="scss" scoped></style>