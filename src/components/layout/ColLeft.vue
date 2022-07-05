<script>
import { useStore } from 'vuex';
import ElementViewIcon from '../common/ElementViewIcon.vue';

export default {
    props: {},
    components: {
        ElementViewIcon
    },
    setup() {
        const store = useStore();
        return {
            elements: store.state.App.elements
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-1 m-3">
        <div
            v-for="(group, indexGroup) in elements"
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