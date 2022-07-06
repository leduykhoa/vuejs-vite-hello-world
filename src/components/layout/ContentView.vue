<script lang="ts">
import { computed } from '@vue/reactivity';
import { useStore, mapGetters } from 'vuex';
import { ElementInterface } from '../../IApp';
import { findElementData, getComponentContentView, getComponentColRight } from '../../App';
import ElementContainerContentView from './../common/ElementContainerContentView.vue';


export default {
    props: {},
    components: {
        ElementContainerContentView
    },
    computed: mapGetters([
        'getListToJson',
        'getList'
    ]),
    setup() {
        const store = useStore();
        const addToList = (item) => store.dispatch(`addToList`, item);
        const setActivated = (index) => store.dispatch(`setActivated`, index);
        return {
            addToList,
            setActivated,
            findElementData,
            getComponentContentView,
            getComponentColRight,
        }
    },
    methods: {
        onDrop(evt) {
            const item = evt.dataTransfer.getData(`item`);
            const type = evt.dataTransfer.getData(`type`);

            if (type && type === `add`) {
                const el: ElementInterface = {
                    ...this.findElementData(item),
                    ...{
                        componentContentView: this.getComponentContentView(item),
                        componentColRight: this.getComponentColRight(item)
                    }
                };
                this.addToList(el);
                this.setActivated(this.getList.length - 1);
                // this.itemChangeEvent();
            } else {

            }
            console.log(item);
        },
        onDragover(ev) {
            ev.preventDefault();
        },
        itemChangeEvent() {
            this.$emit(`itemChangeEvent`);
        },
        handleItemClick(index) {
            this.setActivated(index);
        }
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <div
        class="w-full h-full"
        @drop="onDrop($event)"
        @dragover="onDragover($event)"
        @dragover.prevent
        @dragenter.prevent
    >
        <!-- {{ getListToJson }} -->
        <div class="grid grid-cols-1">
            <ElementContainerContentView
                v-for="(item, index) in getList"
                :key="item.name"
                :obj="item"
                @click="handleItemClick(index)"
            />
        </div>
    </div>
</template>