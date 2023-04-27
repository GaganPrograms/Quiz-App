<template>
    <div>
       <h1> Results </h1>
    <h1>{{score}}</h1> 
    </div>
    
</template>

<script>

export default {
    props:['score']
}
</script>

<style>
body{
  background: #2e2c47;
  color: rgb(255, 255, 255);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
</style>
