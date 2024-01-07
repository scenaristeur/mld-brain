<template>
    <div>
        <input v-model="goto_input" placeholder="Go to..." />
        <button @click="goto">Go</button>
    </div>
</template>

<script>
    export default {
        name: "BrainConnect",
        data() {
            return {
                goto_input: ""
            }
        },
        methods: {
            goto() {
                this.$brain.goto(this.goto_input)
            }
        }
    }
</script>

<style scoped>

</style>