<template>
  <div class="bd">
    <h1>Tny<span class="primary">IE</span></h1>
    <table>
      <tr>
        <th>Shortened slug</th>
        <th>Full link</th>
      </tr>
      <tr
        v-for="link in links"
        :key="link.slug"
      >
        <td>
          <a class="primary" :href="`https://tny.ie/${link.slug}`">{{ link.slug }}</a>
        </td>
        <td>
          <a class="primary" :href="link.url">{{ link.url }}</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: []
    }
  },
  mounted() {
    this.links = JSON.parse(localStorage.getItem("links"))
  },
}
</script>

<style>

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

</style>
