<template>
    
    <div class ="container">
        <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
      <table class="table table-striped table-hover">
        <thead class="thead-dark" >
          <tr>
            <th>#</th>
            <th>Result</th>
            
           
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.id  }}</td>

            <td>{{ item.result }}</td>
            
            
            
            
          </tr>
        </tbody>
      </table>
      <br>
      <div id="name">
        <br>
        <br>
        <h3 id="h3-inline"> Workflow Title :  {{ wkflowName() }}</h3> 
      </div>
      <br>
      <br>
      <div id="desc">
        <h3 id="h3-inline"> Workflow Description :  {{ wkflowDesc() }}</h3> 
      </div>
    </div>

    



  </template>

  <style>
  h3-inline {
  display: inline-block;
}
</style>
  

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      fetchTableData() {
        axios.get('http://localhost:8088/demo/output')
          .then(response => {
            this.tableData = response.data;
            console.log(this.tableData);
          })
          .catch(error => {
            console.log(error);
          });
      },
      wkflowDesc() {
    return this.tableData[2].workflowDescription;
  },
      wkflowName() {
    return this.tableData[2].workflowName;
  }
    },
    mounted() {
      this.fetchTableData();
      
      
    //   setInterval(() => {
    //   this.fetchTableData();
    // }, 1000); 
    }
  }
  </script>
  