<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#" @click="logOut">Logout</a>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    logOut() {
    firebase.auth().signOut().then(()=> this.$router.replace('login'))
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ceffe9;
}
</style>
