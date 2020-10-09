<template>
  <div class="sectionLogin">
    <!-- img login -->
    <div class="imagen">
      <img class="imgLogin" src="../assets/img/24.png" alt="ambiente grafico" />
    </div>
    <!-- section login -->
    <div class="login">
      <h3 class="titleLogin">Login</h3>
      <form @submit.prevent="login">
        <input
          class="usuario"
          v-model="usuario"
          type="texto"
          placeholder="Usuario"
        />
        <input
          class="contrasena"
          v-model="contrasena"
          type="password"
          placeholder="Contraseña"
        />
        <input type="submit" value="Acceder" />
      </form>
    </div>
    <!-- final section login -->
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
          (user) => this.$router.replace("home"),
          (error) => console.log(error)
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.sectionLogin {
  width: 950px;
  height: 650px;
  margin: auto;
  background: #6aa5a9;
  border-radius: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.login {
  // display: none;
  margin-right: 260px;
  .titleLogin {
    text-align: left;
    font-size: 30px;
    margin: 20px 0;
  }
}
form > * {
  display: block;
}
form {
  .usuario {
    padding: 10px 0px;
    border: 0;
    margin: 10px 0;
  }
  .contrasena{
    padding: 10px 0px;
    border: 0;
    margin: 10px 0;
  }
}
.imgLogin {
  margin: 0px;
  height: 650px;
}
</style>
