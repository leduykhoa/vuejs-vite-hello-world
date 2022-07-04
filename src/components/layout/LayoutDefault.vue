<script setup>
import { ref } from 'vue'
import Header from './Header.vue';
import ColLeft from './ColLeft.vue';
import ColRight from './ColRight.vue';

defineProps({})
const count = ref(0)
</script>

<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 bg-slate-200 text-center">
            <img
                alt="Vue logo"
                class="mx-auto"
                src="./../../assets/logo.png"
            />
            <Header />
        </div>
        <div class="col-start-1 col-end-2 bg-slate-300">
            <ColLeft />
        </div>
        <div class="col-start-2 col-end-6 bg-slate-400">
            content
        </div>
        <div class="col-start-6 col-end-7 bg-slate-300">
            <ColRight />
        </div>
    </div>
</template>

<style scoped>
</style>