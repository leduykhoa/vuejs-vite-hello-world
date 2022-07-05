<script>
export default {
    props: {
        App: Object
    },
    methods: {
        onDrop(evt) {
            const item = evt.dataTransfer.getData(`item`);
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
        content view
    </div>
</template>

<style scoped>
</style>