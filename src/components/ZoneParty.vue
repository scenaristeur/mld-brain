<template>
    <div>
    <div id="party-template" hidden>
        <label>Name:
            <v-text-field class="party-name" />
        </label>
        <v-btn class="party-delete">×</v-btn>
    </div>
    <div id="parties"></div>
    <div>
        <v-btn id="add-party" @click="addParty">Add Zone Party</v-btn>
    </div>
</div>
</template>

<script>
    export default {
        name: "ZoneParty",
        methods: {
            addParty() {
                this.$brain.addParty();
            }
        }
    }
</script>

<style scoped>

</style>