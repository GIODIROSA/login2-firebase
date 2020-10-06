<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="login">
      <input v-model="usuario" type="texto" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" />
      <input type="submit" value="Acceder" />
    </form>
   <pre>
       {{$data}}
   </pre>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => alert("Usuario conectado"),
          (error) => console.log(error)
        );
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form > * {
  display: block;
}
</style>
