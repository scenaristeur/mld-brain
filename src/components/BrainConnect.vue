<template>
    <div>
        <input v-model="goto_input" placeholder="Go to..." v-on:keyup.enter="onEnter" />
        <button @click="goto" :disabled="submit_disabled">Go</button>
        <p v-if="submit_disabled">ℹ️ <i>Brainscope names can only contain lowercase letters and digits</i></p>
    </div>
</template>

<script>
    export default {
        name: "BrainConnect",
        data() {
            return {
                goto_input: "",
                submit_disabled: true
            }
        },
        methods: {
            goto() {
                this.$brain.goto(this.goto_input)
                this.goto_input = ""
            },
            onEnter() {
                if(!this.submit_disabled){
                    this.goto()
                } else{
                    alert("Please enter a valid name")
                }
            }
        },
        watch: {
            goto_input() {
                this.submit_disabled = this.goto_input === "" || !this.goto_input.match(/^[0-9a-z-]{1,63}$/)
            }
        }
    }
</script>

<style scoped>

</style>