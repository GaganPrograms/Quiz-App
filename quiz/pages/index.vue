<template>
  <div class="startpage">
   <div class="content"> 
    <h1> General Quiz </h1>
      <h2> Lets see what you know about General stuff! </h2>
      <br/>
      <button class="button">
        <nLink to="/quiz"> 
          Start Quiz
        </nLink> </button>
        <button> 
          <nLink to="/about"> 
            about
          </nLink>
        </button>
   </div>
  </div>
</template>

<script>
export default {
  //  layout: 'default'
}
</script>

<style>
.nLink{
    background-color: red;
}
/* body{
  background: #2e2c47;
  color: rgb(56, 50, 82);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
.content{
  background: white;
  padding: 30px;
  width: 500px;
  margin: auto;
  border-radius: 20px
}
button{
  background: #4eba55;
  border: none;
  padding: 10px;
  border-radius: 10px;
  
} */
</style>




