<head>
  <title>VueJs Instance</title>
  <!--
    <script type = "text/javascript" src = "js/vue.js"></script>
  -->
</head>
<template>
  <div>
    <h3>Name</h3>
    <input type = "text" v-on:keyup = "shownamevalue" v-bind:style = "styleobj" placeholder = "Enter Bike's Name"/>
    <h3>Branch</h3>
    <div v-bind:style = "styleobj">
      <multiselect
        v-model="brSelected"
        :options="branch"
        :searchable="false"
        :close-on-select="true"
        :allow-empty="false"
        placeholder="Select one"
        label="name"
        track-by="name">
      </multiselect>
    </div>
    <h3>Customer</h3>
      <div v-bind:style = "styleobj">
        <multiselect
          v-model="cusSelected"
          :options="customer"
          :searchable="false"
          :close-on-select="true"
          :allow-empty="false"
          placeholder="Select one"
          label="name"
          track-by="name">
        </multiselect>
      </div>
    <br>
    <br>
    <br>
    <button v-on:click = "submit" v-bind:style = "styleobj">Insert Bike</button>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import axios from 'axios'
import Multiselect from 'vue-multiselect'
export default {
  name: 'insertBike',
  data () {
    return {
      bike: {name: 'Tai', branch: 1, customer: 1},
      styleobj: {
        width: '30%',
        padding: '2px 0px',
        margin: 'auto',
        boxSizing: 'border-box'
      },
      cusSelected: null,
      customer: [
      ],
      brSelected: null,
      branch: []
    }
  },
  components: {
    Multiselect
  },
  methods: {
    shownamevalue (event) {
      this.bike.name = event.target.value
    },
    submit () {
      this.bike.branch = this.brSelected.id
      this.bike.customer = this.cusSelected.id
      const data = JSON.stringify(this.bike)
      var config = {
        method: 'post',
        url: 'http://localhost:3000/query-sql/insert-bike',
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
      .get('http://localhost:3000/query-sql/customer')
      .then(response => (this.customer = response.data)
      )
    axios
      .get('http://localhost:3000/query-sql/branch')
      .then(response => (this.branch = response.data)
      )
  }
}
</script>

<style scoped>

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
