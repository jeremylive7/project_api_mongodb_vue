<template lang="">
    <div class="row">
        <div class="col-12">
            Card
        </div>
        
    </div>
</template>

<script>
import {onMounted} from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        onMounted(() => {
            console.log(store.state.productos)
            //store.dispatch('getProductos')
        }),
    }
    
}
</script>
<style lang="">
    
</style>