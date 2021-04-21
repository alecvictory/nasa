<template>
    <div class="picture">
  <img src="picture.img" class="mr-3" alt="">
  <div class="picture-body">
    <h5 class="mt-0">{{picture.title}}</h5>
    <p>{{picture.description}}</p>
    <p>{{picture.version}}</p>
  </div>
  </div>
</template>


<script>
export default {
    name: 'PictureComponent',
    props: {
        picture: {
            type: Object,
            required: true
        }
    },
    setup(){
        return {}
    },
    components:{}
}
</script>


<style lang="scss" scoped>

</style>