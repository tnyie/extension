<template>
  <div class="bd">
    <button
      style="position: absolute; top: 0; right: 0; margin: 4em"
      class="btn waves-effect waves-light"
      @click="loginMode = true"
    >
      Login
    </button>

    <h1>Tny<span class="primary">IE</span></h1>
    <div class="main" v-if="loginMode === false">
      <table>
        <tr>
          <th>Shortened slug</th>
          <th>Full link</th>
        </tr>
        <tr v-for="link in links" :key="link.slug">
          <td>
            <a class="primary" :href="`https://tny.ie/${link.slug}`">{{
              link.slug
            }}</a>
          </td>
          <td>
            <a class="primary" :href="link.url">{{ link.url }}</a>
          </td>
        </tr>
      </table>
    </div>

    <div class="main" v-if="loginMode === true">
      <div class="form">
        <div class="input-field">
          <input type="text" id="email" v-model="form.email" />
          <label for="email">Email</label>
        </div>
        
        <div class="input-field">
          <input type="password" id="password" v-model="form.password" />
          <label for="password">Password</label>
        </div>

        <div class="buttons">
          <button class="red darken-2 btn waves-effect" @click="loginMode = false">Cancel</button>
        <a class="btn waves-effect" style="background: #fff; color: black;" href="https://ui.tny.ie">Sign up</a>

        <button class="btn waves-effect" @click="this.login">Login</button>
        </div>
      </div>
    </div>
    <small>View more at <a href="https://tny.ie">Tny.ie</a></small>
  </div>
</template>

<script>
import * as api from '../api'

export default {
  name: "App",
  data() {
    return {
      loginMode: false,
      links: [],
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      console.log("uhhh")
      await api.Login(this.form)
    }
  },
  async mounted() {
    if ( localStorage.getItem("token") !== null ) {
      this.links = await api.GetUserLinks()
    } else {
      this.links = JSON.parse(localStorage.getItem("links"));
    }
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

html {
  background: #2a2a2a;
  color: white;
  font-family: Roboto;
}

body {
  height: 100%;
  width: 100%;
}

.bd {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 4em;
  margin: auto;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

table {
  width: 60%;
  margin: auto;
  margin-bottom: 4em;
}

table th {
  font-size: 2em;
}

table * {
  border-color: white;
}

.primary {
  color: #009688;
}

.primary, a {
  color: #009688;
}

.main {
  width: 100%;
  height: 100%;
}

.main * {
  color: white;
}

.main .form {
  width: 80%;
  margin: auto;
}

.input-field input[type=text]:focus {
border-bottom: 1px solid #000;
box-shadow: 0 1px 0 0 #000;
}

/* valid color */
.input-field input[type=text].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4em;
}
</style>
