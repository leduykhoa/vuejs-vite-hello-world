<script>

import Header from './Header.vue';
import ColLeft from './ColLeft.vue';
import ColRight from './ColRight.vue';
import ContentView from './ContentView.vue';

export default {
    components: {
        Header,
        ColLeft,
        ColRight,
        ContentView
    },
    methods: {
        setShowColRight() {
            this.showColRight = true;
            console.log(`running`);
        },
        handleItemChangeItem(event) {
            // console.log(`handleItemChangeItem`, event);
            // this.showColRight = false;
            // setTimeout(this.setShowColRight, 900);
        }
    },
    data() {
        return {
            showColRight: true
        }
    }
};
</script>

<template>
    <div class="w-full flex flex-row bg-slate-200 py-1">
        <Header />
    </div>

    <div class="flex flex-row h-96 min-h-screen">
        <div class="w-60 max-w-xs basis-1/4 bg-slate-300">
            <ColLeft />
        </div>
        <div class="basis-3/4">
            <ContentView @item-change-event="handleItemChangeItem" />
        </div>
        <div class="w-60 max-w-xs bg-slate-300">
            <ColRight />
        </div>
    </div>
</template>