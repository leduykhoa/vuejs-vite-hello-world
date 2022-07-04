<script setup>
import App from './../../App';
import ElementViewIcon from '../common/ElementViewIcon.vue';
defineProps({
    App: App
});
</script>

<template>
    <div class="grid grid-cols-1 m-3">
        <div
            v-for="(group, indexGroup) in App.elements"
            class=""
        >
            <h3 class="text-xl font-medium px-3">{{ group.title }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-bottom">
                <ElementViewIcon
                    v-for="(item, index) in group.items"
                    :key="item.id"
                    :obj="item"
                />
            </div>
        </div>

    </div>
</template>



<style scoped>
</style>