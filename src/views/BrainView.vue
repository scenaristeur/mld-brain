
<template>
  <main>

 Brain View

 {{ brainId }}

 --


 <ZoneParty />  
 <hr>
 <ProductsView />

  </main>
</template>

<script>


// import BrainConnect from '@/components/BrainConnect.vue'
import ZoneParty from '@/components/ZoneParty.vue'
import ProductsView from '@/components/ProductsView.vue'


export default {
name: "BrainView",
components: {
  ZoneParty,
  ProductsView
  // BrainConnect  
},
data() {
  return {
   // brainId: ""
  }
},
computed: {
  brainId() {
    let brainId = this.$route.hash.substring(1)
    this.$brain.setCurrent(brainId)
    return brainId;
  }

}
}
</script>

<style scoped>  
table {
  border-collapse: collapse;
}
table td, table th {
  border: 1px solid darkgrey;
}
input[type="number"] {
  width: 3em;
}
</style>