<script>
import { getComponentFormBase } from '../../App';
export default {
    props: {
        obj: Object,
        session: String,
    },
    components: {
    },
    computed: {},
    methods: {
        getComponentFormBase
    },
    setup() {

    },
    data() {
    }
}
</script>

<template>
    <component
        v-for="(el, index) in obj._config"
        :key="el.name"
        class=""
        :is="getComponentFormBase(el.type)"
    ></component>
</template>