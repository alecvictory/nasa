<template>
      <div class="component container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="search">
          <label for="picture">Date</label>
          <input type="date" name="picture" id="Picture" placeholder="Date..." v-model="state.query">
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
      <div class="col">
        <Details />
      </div>
    </div>
  </div>
</template>


<script>
import { reactive } from 'vue'
import { picturesService } from '../services/PicturesService'
import Results from '../components/ResultComponent'
import Details from '../components/DetailComponent'
export default {
    name: 'HomePage',
    setup(){
        const state = reactive({
            query: ''
        })
        return {
            state,
            async search(){
                try{
                    await picturesService.getPictures(state.query)
                    state.query = ''
                } catch(error){
                    console.error(error)
                }
            }
        }
    },
    components:{
        Results,
        Details
    }
}
</script>


<style lang="scss" scoped>

</style>