<head>
  <title>VueJs Instance</title>
  <!--
    <script type = "text/javascript" src = "js/vue.js"></script>
  -->
</head>
<template>
  <div>
    <h3>Name</h3>
    <input type = "text" v-on:keyup = "shownamevalue" v-bind:style = "styleobj" placeholder = "Enter your name"/>
    <h3>Address</h3>
    <input type = "text" v-on:keyup = "showaddressvalue" v-bind:style = "styleobj" placeholder = "Enter your address"/>
    <br>
    <br>
    <br>
    <button v-on:click = "submit" v-bind:style = "styleobj">Insert User</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'insertUser',
  data () {
    return {
      user: {name: 'Tai', address: 'Thanh Hoa'},
      styleobj: {
        width: '30%',
        padding: '2px 0px',
        margin: '2px 0',
        boxSizing: 'border-box'
      }
    }
  },
  methods: {
    shownamevalue (event) {
      this.user.name = event.target.value
    },
    showaddressvalue (event) {
      this.user.address = event.target.value
    },
    submit () {
      const data = JSON.stringify(this.user)
      var config = {
        method: 'post',
        url: 'http://localhost:3000/query-sql/insert-user',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
