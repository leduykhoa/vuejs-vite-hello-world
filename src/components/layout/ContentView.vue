<script lang="ts">
import { useStore, mapGetters } from 'vuex';
import ElementContainerContentView from './../common/ElementContainerContentView.vue';
import HeadingContentView from './../elements/heading/HeadingContentView.vue';
import { ElementInterface } from '../../IApp';
import { findElementData, getComponentContentView } from '../../App';


export default {
    props: {},
    components: {
        ElementContainerContentView,
        HeadingContentView
    },
    computed: mapGetters([
        'getListToJson',
        'getList'
    ]),
    setup() {
        const store = useStore();
        const addToList = (item) => store.dispatch(`addToList`, item);
        return {
            // getList: computed(() => store.getters.getList),
            addToList,
            findElementData,
            getComponentContentView,
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
                        componentContentView: this.getComponentContentView(item)
                    }
                };
                this.addToList(el);
            } else {

            }
            console.log(item);
        },
        onDragover(ev) {
            ev.preventDefault();
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
            />
        </div>
    </div>
</template>