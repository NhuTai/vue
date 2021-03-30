<head>
  <title>VueJs Instance</title>
<!--
  <script type = "text/javascript" src = "js/vue.js"></script>
-->
</head>
<template>
<div>
  <div id = "databinding">
  </div>
  <br>
  <table class="center">
    <tr>
      <th>
        Name
      </th>
      <th>
        Branch
      </th>
      <th>
        Customer
      </th>
    </tr>
    <tr v-for="b in info"
        :key="b.id">
      <td>
        {{b.bicycle}}
      </td>
      <td>
        {{b.branch}}
      </td>
      <td>
        {{b.customer}}
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TaiTest',
  data () {
    return {
      show: true,
      info: [],
      items: [],
      styleobj: {
        width: '30%',
        padding: '12px 20px',
        margin: '8px 0',
        boxSizing: 'border-box'
      }
    }
  },
  methods: {
  },
  mounted () {
    axios
      .get('http://localhost:3000/query-sql/infor')
      .then(response => (this.info = response.data)
      )
  }
}
</script>

<style scoped>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th {
    border: 2px solid #000000;
  }
  .center {
    margin: auto;
    width: 60%;
    padding: 10px;
  }
</style>
