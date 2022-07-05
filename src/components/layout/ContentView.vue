<script>
import { computed } from 'vue'
import { useStore, mapGetters, mapActions } from 'vuex'

export default {
    props: {},
    computed: mapGetters([
        'getListToJson',
        'getList'
    ]),
    setup() {
        const store = useStore();
        const addToList = (item) => store.dispatch(`addToList`, item);
        const findElementData = (id) => {
            return store.state.App.elements
                .find((item) => {
                    return (item.items.find((itemFind) => itemFind.id === id) !== undefined);
                })
                .items
                .find(itemFind => itemFind.id === id);
        };
        return {
            // getList: computed(() => store.getters.getList),
            addToList,
            findElementData,
        }
    },
    methods: {
        onDrop(evt) {
            const item = evt.dataTransfer.getData(`item`);
            this.addToList(this.findElementData(item));
            console.log(item);
        },
        onDragover(ev) {
            ev.preventDefault();
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
        {{ getListToJson }}
    </div>
</template>

<style scoped>
</style>