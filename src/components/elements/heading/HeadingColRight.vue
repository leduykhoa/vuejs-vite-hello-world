<script>
import { useStore } from 'vuex';
import Tabs from '../../common/Tabs.vue';
import FormBuilderElement from '../../common/FormBuilderElement.vue';

export default {
    props: {
        obj: Object
    },
    components: {
        Tabs,
        FormBuilderElement
    },
    computed: {},
    methods: {
        handleTabActivate(tabName) {
            this.tabActivate = tabName
            console.log(`handleTabActivate`, tabName);
        }
    },
    setup() {

    },
    data() {
        const store = useStore();
        return {
            tabs: store.state.App.tabColRight,
            tabActivate: `content`
        }
    }
}
</script>

<template>
    <div class="">
        <Tabs
            :tabs="tabs"
            :tabActivate="tabActivate"
            @tab-activate="handleTabActivate"
        />
        <template v-if="tabActivate == 'content'">
            <FormBuilderElement
                :obj="obj"
                :session="tabActivate"
            />
        </template>
        <template v-if="tabActivate == 'design'">
            <FormBuilderElement
                :obj="obj"
                :session="tabActivate"
            />
        </template>
    </div>
</template>