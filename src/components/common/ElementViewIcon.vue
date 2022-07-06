<script>

export default {
    props: {
        obj: Object
    },
    methods: {
        onDragstart(evt, item) {
            evt.dataTransfer.dropEffect = `move`;
            evt.dataTransfer.effectAllowed = `move`;
            evt.dataTransfer.setData(`item`, item.name);
            evt.dataTransfer.setData(`type`, `add`);
        },
    },
}
</script>

<template v-if="obj && obj.name ">
    <div
        class="p-2"
        draggable="true"
        @dragstart="onDragstart($event, obj)"
    >
        <div
            class="relative flex flex-wrap items-center justify-center text-center text-gray-500 transition bg-white rounded shadow-sm cursor-move group hover:bg-gray-300 hover:text-gray-900">
            <component
                :is="obj.icon"
                class="my-2 w-5"
            ></component>
            <div class="w-full text-center mb-3 text-xs truncate">{{ obj.title }}</div>
        </div>
    </div>
</template>
