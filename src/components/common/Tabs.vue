<script lang="ts">
import { computed } from '@vue/reactivity';
import { useStore, mapGetters } from 'vuex';

export default {
    props: {
        tabs: Array<Object>,
        tabActivate: String
    },
    computed: {},
    methods: {
        tabActivate(event, name) {
            event.preventDefault();
            event.stopPropagation();
            if (this.activate !== name) {
                this.activate = name;
                this.$emit(`tabActivate`, name);
            }
        },
    },
    setup() {

    },
    data() {
        return {
            activate: this.tabActivate
        }
    }
}
</script>

<template>
    <ul class="flex flex-wrap flex-nowrap text-sm font-medium">
        <li
            v-for="(tab, index) in tabs"
            :key="tab.name"
            class="mr-2"
        >
            <button
                class="relative flex p-1 text-sm transition rounded focus:outline-none hover:bg-gray-200 active:bg-gray-300 text-gray-600 hover:text-gray-700 mr-0"
                :class="{
                    'text-black-500': (activate == tab.name),
                    'bg-gray-200': (activate == tab.name),
                }"
                @click="tabActivate($event, tab.name)"
            >
                <component
                    :is="tab.icon"
                    class="w-3 mr-1 mt-1"
                ></component>
                <span v-if="tab.title && tab.title != ''">{{ tab.title }}</span>
            </button>
        </li>
    </ul>
</template>
