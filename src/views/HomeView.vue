
<template>
  <main>
    --
    <!-- <ddForm :data="exampleDataSet" :descriptions="exampleDescriptions">
    </ddForm> -->
    mm
    <BrainConnect/>
    <TheWelcome />
  </main>
</template>





<script>
import TheWelcome from '../components/TheWelcome.vue'

import BrainConnect from '@/components/BrainConnect.vue'

// import 'vue-dd-form';
export default {
name: "HomeView",
components: {
  // ddForm,
  TheWelcome,
  BrainConnect  
}
}
</script>