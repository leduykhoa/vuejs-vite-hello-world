<script>

export default {
    props: {
        obj: Object
    },
    methods: {
        onDragstart(evt, item) {
            evt.dataTransfer.dropEffect = `move`;
            evt.dataTransfer.effectAllowed = `move`;
            evt.dataTransfer.setData(`item`, item.id)
        },
    },
}
</script>

<template v-if="obj && obj.id">
    <div
        class="hover:border-red-600 hover:border-2"
        draggable="true"
        @dragstart="onDragstart($event, obj)"
    >
        <div class="w-full text-center">{{ obj.title }}</div>
    </div>
</template>
