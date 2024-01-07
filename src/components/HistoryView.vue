<template>
    <div>
        <v-card v-if="history.length > 0" class="mx-auto pa-2" min-width="400">
            <BrainConnect />
            <v-list class="scroller">
                <v-list-subheader>HISTORY</v-list-subheader>

                <v-list-item v-for="(item, i) in history" :key="i" :value="item" color="primary" rounded="shaped"
                    @click="onSelect(item)">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component-->
                    <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import BrainConnect from '@/components/BrainConnect.vue'
export default {
    name: "HistoryView",
    components: {
        BrainConnect
    },
    methods: {
        onSelect(item) {
            console.log(item)

            this.$brain.goto(item)
            this.goto_input = ""

        }
    },
    computed: {
        history() {
            return this.$store.state.core.history
        },
        // myPosition() {
        //     return this.$store.state.core.myPosition
        // },
    }
}
</script>

<style scoped>
.scroller {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 450px;
}
</style>