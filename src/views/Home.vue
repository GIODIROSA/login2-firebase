<template>
  <div class="home">
    <img class="iso" alt="Vue logo" src="../assets/img/iso-version-03.svg">
    <HelloWorld msg="AUFIELD LA EXPERIENCIA DEL TECHNO EN CHILE"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style lang="scss" scoped>
.iso{
width: 150px;
height: 150px;
}

</style>