<head>
  <title>VueJs Instance</title>
</head>
<template>
  <div>
    <nav>
      <table class="center">
        <tr>
          <th>
            Name
          </th>
        </tr>
        <tr v-for="b in listBranch"
            :key="b.id">
          <td>
            {{b.name}}
          </td>
        </tr>
      </table>
    </nav>
    <div>
      <h3>Name</h3>
      <input type = "text" v-on:keyup = "shownamevalue" v-bind:style = "styleobj" placeholder = "Enter Bike's Name"/>
      <br>
      <br>
      <button v-on:click = "submit" v-bind:style = "styleobj">Insert Bike</button>
      <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'insertBranch',
  data () {
    return {
      branch: {name: 'Sony'},
      styleobj: {
        width: '30%',
        padding: '2px 0px',
        margin: 'auto',
        boxSizing: 'border-box'
      },
      listBranch: []
    }
  },
  methods: {
    shownamevalue (event) {
      this.branch.name = event.target.value
    },
    submit () {
      const data = JSON.stringify(this.branch)
      var config = {
        method: 'post',
        url: 'http://localhost:3000/query-sql/insert-branch',
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
  },
  mounted () {
    axios
      .get('http://localhost:3000/query-sql/branch')
      .then(response => (this.listBranch = response.data)
      )
  }
}
</script>
<style scoped>
  nav {
    float: left;
    width: 20%;
    height: 100px;
    background: rgba(204, 204, 204, 0.23);
    padding: 20px;
  }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
