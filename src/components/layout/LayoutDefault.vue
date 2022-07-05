<script>
import { defineComponent, ref } from 'vue'
import Header from './Header.vue';
import ColLeft from './ColLeft.vue';
import ColRight from './ColRight.vue';
import App from '../../App';
import ContentView from './ContentView.vue';

export default {
    props: [],
    components: {
        Header,
        ColLeft,
        ColRight,
        ContentView
    },
    data() {
        return {
            App: App,
            
        }
    }
};
</script>

<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-7 bg-slate-200 text-center">
            <img
                alt="Vue logo"
                class="mx-auto w-10"
                src="./../../assets/logo.png"
            />
            <Header :App="App" />
        </div>
    </div>

    <div class="flex flex-row h-96 min-h-screen">
        <div class="w-60 max-w-xs basis-1/4 bg-slate-300">
            <ColLeft :App="App" />
        </div>
        <div class="basis-3/4 bg-slate-400">
            <ContentView :App="App" />
        </div>
        <div class="w-60 max-w-xs bg-slate-300">
            <ColRight :App="App" />
        </div>
    </div>
</template>

<style scoped>
</style>