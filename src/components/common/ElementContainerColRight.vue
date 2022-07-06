<script>

export default {
    props: {
        obj: Object
    },
    methods: {
    },
}
</script>

<template v-if="obj && obj.name">
    <div class="w-full">
        <component
            :is="obj.componentColRight"
            class=""
        ></component>
    </div>
</template>
