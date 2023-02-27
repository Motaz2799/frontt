<template>
  
  <div>
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
  
  <select class="custom-select" v-model="select1">
      <option v-for="item in response1" :value="item" :key="item">{{ item }}</option>
  </select>
    <br>
    <br>
    <br>
    <select class="custom-select" v-model="select2">
      <option v-for="item in response2" :value="item" :key="item">{{ item }}</option>
    </select>
    <br>
    <br>
    <br>
    <select class="custom-select" v-model="operation">
      <option value="add">Add</option>
      <option value="sub">Subtract</option>
    </select>
    <br>
    <br>
    <br>
    <select class="custom-select" v-model="workflowId">
      <option value="1">Workflow 1</option>
      <option value="2">Workflow 2</option>
    </select>
    <button type="submit" @click.prevent="submit" class="btn btn-primary btn-inverse">
      <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span v-else>Submit</span>
    </button>
    <p>{{ responseData1 }}</p>
    <br>
    <p>{{ responseData2 }}</p>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['response1','response2'],
  data(){
    return{
      select1: null,
      select2: null,
      operation: null,
      listColumn:[],
      workflowId: null,
      loading: false,
      
    }
  },
  methods: {
    submit() {
      let input1 = null;
      let input2 = null;
      if (this.select1 == "X1"){
        input1 = "param1";
      }
      if (this.select1 == "X2"){
        input1 = "param2";
      }
      if (this.select2 == "X3"){
        input2 = "param1";
      }
      if (this.select2 == "X4"){
       input2 = "param2";
      }
      
      
      const data = {
        workflowId: parseInt(this.workflowId),
        operation: this.operation,
        listColumn:[input1,input2]
        //handle input 1 and 2 transofrmed to param1 and param2
        
      };
      this.loading = true;
      axios.post('http://localhost:8088/demo/add', data)
        .then(response => {
          console.log(response.data);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
  },
  computed: {
    responseData1() {
      return this.response1 ? JSON.stringify(this.response1) : 'No response data available'
    },
    responseData2() {
      return this.response2 ? JSON.stringify(this.response2) : 'No response data available'
    }
  }
}
</script>







