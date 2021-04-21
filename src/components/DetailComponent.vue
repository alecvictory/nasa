<template>
    <div class="detail-component" v-if="state.picture">
        <img :src="state.picture.img" alt="">
    <h3>{{state.picture.title}}</h3>
    <p>{{state.picture.description}}</p>
    </div>
</template>


<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
    name: 'DetailComponent',
    setup(){
        const state = reactive({
            picture: computed(() => AppState.activePicture)
        })
        return {
            state
        }
    },
    components:{}
}
</script>


<style lang="scss" scoped>

</style>