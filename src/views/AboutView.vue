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
  
  <select class="custom-select">
      <option v-for="item in response1" :value="item" :key="item">{{ item }}</option>
  </select>
    <br>
    <br>
    <br>
    <select class="custom-select">
      <option v-for="item in response2" :value="item" :key="item">{{ item }}</option>
    </select>
    <br>
    <br>
    <br>
    <p>{{ responseData1 }}</p>
    <br>
    <p>{{ responseData2 }}</p>
    
  </div>
</template>

<script>
export default {
  props: ['response1','response2'],
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







