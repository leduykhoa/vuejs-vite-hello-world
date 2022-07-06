<script>

export default {
    props: {
        obj: Object
    },
    methods: {
        onDragstart(evt, item) {
            evt.dataTransfer.dropEffect = `move`;
            evt.dataTransfer.effectAllowed = `move`;
            evt.dataTransfer.setData(`item`, item.name)
        },
    },
}
</script>

<template v-if="obj && obj.name">
    <div
        class="w-full"
        draggable="true"
        @dragstart="onDragstart($event, obj)"
    >
        <div class="relative hover:border-red-500 hover:border h-14 min-h-full">
            <div class="absolute top-0 right-0 left-auto bg-red-500 py-1 px-2">{{ obj.title }}</div>
            <component
                :is="obj.componentContentView"
                class=""
            ></component>
        </div>
    </div>
</template>
