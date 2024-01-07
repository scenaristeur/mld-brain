<template>
    <div>
        <ddForm :data="exampleDataSet" :descriptions="exampleDescriptions">
        </ddForm>
    </div>
</template>

<script>
import ddForm from 'vue-dd-form';
export default {
    name: "NeuroneEdit",
    components: {
        ddForm,
    },
    data() {
        return {
            exampleDataSet: {},
            exampleDescriptions: {
                "name": { view: 'text', label: 'Full name' }
            }
        }
    }
}
</script>

<style scoped></style>