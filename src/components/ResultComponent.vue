<template>
     <div class="result">
    <PictureComponent :picture = 'state.results'/>
  </div>
</template>


<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { picturesService } from '../services/PicturesService'
import  PictureComponent  from './PictureComponent'

export default {
    name: 'result',
    setup(){
        const state = reactive({
            results: computed(() => AppState.results)
        })
        return {

            state,
        setActive(picture){
            picturesService.setActive(picture)
            }
        }
    },
    components:{
        PictureComponent
    }
}
</script>


<style lang="scss" scoped>

</style>