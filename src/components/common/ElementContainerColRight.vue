<script lang="ts">
import { computed } from '@vue/reactivity';
import { useStore, mapGetters } from 'vuex';

export default {
    computed: {},
    setup() {
        const store = useStore();
        return {
            obj: computed(() => store.getters.getItemActivated),
        }
    },
    methods: {

    },
}
</script>

<template v-if="obj && obj.name">
    <div class="w-full p-2">
        <component
            :is="obj.componentColRight"
            :obj="obj"
            class=""
        ></component>
    </div>
</template>
