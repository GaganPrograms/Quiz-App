
<template>
   <div class="content">
    
     <p class="loading" v-if="$fetchState.pending">Loading....</p>
     <p v-else-if="$fetchState.error">Error while fetching questions</p>
     <div v-else>
      <div v-if="this.id>=9">
        <h1> Your score is {{ this.score }} </h1>
          <!-- <button @click="showresults" >
            <nLink to="/results" :score=score >
              show results 
            </nLink>
             
            </button> -->
      </div>
      <div v-else>
        <div class="grid">
          <div v-for="(q, index) in questions" :key="index" class="grid-item rightAnswered" :class="{ answered: answered[index] }">
            <span v-if="answered[index] === 1" class="rightAnswered">{{ index + 1 }}</span>
            <span v-else-if="answered[index] === 2" class="wrongAnswered">{{ index + 1 }}</span>
            <span v-else class="grid-item">{{ index + 1 }}</span>   
        </div>

        <h1>Q{{ id+1 }}- {{ this.questions[id].question }} </h1>
        <!-- <h2 > Score : {{ score }} </h2> -->

        <div class="options-container"> 
          <p @click="checkanswer" v-bind:value=" this.questions[id].option1" > {{ this.questions[id].option1 }} </p>
          <p @click="checkanswer" v-bind:value=" this.questions[id].option2"> {{ this.questions[id].option2 }} </p>
          <p @click="checkanswer" v-bind:value=" this.questions[id].option3"> {{ this.questions[id].option3}} </p>
          <p @click="checkanswer" v-bind:value=" this.questions[id].option4"> {{ this.questions[id].option4}} </p>
          
        </div>

        <div class="btns" ><button @click="prevq"  :disabled="id === 0" > Previous Question </button>
          <button @click="nextq" > {{ nextButton[bindex]}} </button>
          
         </div>
      
      
      
        </div>
      </div>
      
   </div>
 
   </div>
   
 </template>
 <script >
 import axios from 'axios'
//  import results from './results.vue'
 
   export default {
     layout:'default',
      
     data() {
       return {
         questions: [],
         answerkey:[],
         score:0,
         id:0,
         answered:[],
         nextButton: ["Next Question", "Show Results"],
         bindex: 0
       }
     },
     async fetch() {
       this.questions = await axios.get(
         'http://localhost:5500/quiz/questions'
       ).then((res) => { 
        // console.log(res.data.data) 
        const temp=res.data.data
        for(let i=0; i<temp.length;i++){
          this.answerkey.push(temp[i].correctOption)
          this.answered.push(0) // initialize answer array
        }
        return res.data.data
      })
      // console.log(this.questions[0])
       
      
      //  this.answerkey = this.questions[0].correct_answer
      //  console.log(this.answerkey)
     },
     methods:{
      checkanswer(e){
        // console.log(e)
           const selected=e.target.innerText
           if(this.answerkey[this.id]===selected){
            alert('rightanswer')
            this.score++;
            this.answered[this.id] = 1
           }
           else{
            alert('wrong answer');
            this.answered[this.id] = 2
           }
          //  this.answered[this.id] = true // updating the corresponding element 
      },
      // setClass(g){
      //   const selected=g.target.innerText
      //      if(this.answerkey[this.id]===selected){
      //       return "green"
      //      }
      //      else{
      //       return "red"
      //      }
      // },
      
    
      nextq(){
        if(this.id<this.questions.length-1){
          this.id++
          
        }
        else if(this.id === this.questions.length-2){
             this.bindex = 1;
        }
      },
      prevq(){
        if(this.id>0){this.id--}
        console.log("i ran")
      },
      showresults(){
        console.log(this.score)
      }
     }
    }
   
 </script>

 <style >
 body{
  background: #ffffff;
  color: rgb(61, 57, 82);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
.content{
  background: rgb(255, 255, 255);
  padding: 50px;
  width: 500px;
  margin: 0px auto 0;
  margin-top: 10%;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  box-shadow: 0px 5px 10px rgba(83, 106, 222, 0.5);
}

.btns{
  margin-right: 25px;
  margin-top: 5px
}

button{
  background: #5ba8ff;
  border: none;
  padding: 10px;
  border-radius: 20px; 
  color: white;
  transition: background-color 0.3s ease; 
}
button:hover{
  background:#ffffff;
  box-shadow: 0px 5px 10px rgba(83, 106, 222, 0.5);
  color:rgb(61, 57, 82)
}
button:disabled{
  cursor: not-allowed;
  
}
.content p{
  background: rgb(243, 243, 243);
  padding: 10px;
  margin:0px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  
}
.content p:hover{
  background:rgb(255, 255, 255);
  box-shadow: 0px 5px 10px rgba(83, 106, 222, 0.5);
  cursor: default
  
}

.options-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding:10px;
    font-weight: 600
  }

  

  .grid-item{
    display: inline;
    padding: 7px;
   
    
  }

  .grid-item .rightAnswered{
    background-color: #a9ff96;
     padding: 10px 15px;
    margin: auto;
    border-radius: 15px;
  }

 .wrongAnswered{
    background: #ff9696;
    padding: 10px 15px;
    margin: auto;
    border-radius: 15px;
    
  }



  
</style>
