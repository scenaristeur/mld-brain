<template>
    <div>
        <v-form @submit.prevent>
            <v-container>
                Connect or Create
              <v-row>
                <v-col
                  cols="12"
                  md="9"
                >
                  <v-text-field
                  v-model="goto_input"
                  autofocus
                    label="Go to..."
                    required
                    hide-details
                    v-on:keyup.enter="onEnter" 
                   
                  ></v-text-field>
                </v-col>
        
                <v-col
                  cols="12"
                  md="2"
                >
                <v-btn @click="goto" :disabled="submit_disabled">Go</v-btn>
                </v-col>
              </v-row>
            </v-container>
            <p v-if="submit_disabled && goto_input !== ''">ℹ️ <i>Brainscope names can only contain lowercase letters and digits</i></p>
        </v-form>


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