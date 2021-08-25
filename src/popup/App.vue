<template>
  <div class="bd">
    <h1>Tny<span class="primary">IE</span></h1>
    <button class="btn waves-effect waves-light" @click="getURL">Shorten URL</button>
    <a
      style="margin-top: 1em;"
      target="_blank"
      :href="status"
    >
      {{ status }}
    </a>
    <blockquote style="border-color: #009688; border-width: 4px" v-show="status != ''">Shortened link copied to clipboard</blockquote>
    <a href="/options.html" target="_blank">See all your links</a>
  </div>
</template>

<script>
import * as api from '../api'

export default {
  name: 'App',
  data() {
    return {
      url: "",
      status: "",
    }
  },
  methods: {
    async getURL() {
      chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
      }, tabs => {
        this.url = tabs[0].url
        console.log(this.url)
        api.CreateLink({url: tabs[0].url}).then((resp) => {
          const url = "https://tny.ie/" + resp.slug
          navigator.clipboard.writeText(url)
          this.status = url
          let links = JSON.parse(localStorage.getItem("links"))
          console.log(links)
          if (links === null) {
            localStorage.setItem("links", JSON.stringify(new Array(resp)))
          } else {
            if (Array.isArray(links)) {
              console.log("yup")
              links.push(resp)
              localStorage.setItem("links", JSON.stringify(links))
            }
          }
        })
        }
      )
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

html {
  width: 100%;
  height: 400px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.primary {
  color: #009688;
}
</style>
