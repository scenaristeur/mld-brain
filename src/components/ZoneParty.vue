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
        <v-btn id="add-party">Add Zone Party</v-btn>
    </div>
</div>
</template>

<script>
    export default {
        name: "ZoneParty",
    }
</script>

<style scoped>

</style>