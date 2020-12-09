import React, { Component } from 'react';
import '../styles.css';
import QuizData from './QuizData'


class Quiz extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userAnswer:null,
             currentIndex:0,
             options:[],
             quizEnd:false,
             score:0,
             disabled:true
        }
    }
    

    // loading the quiz data from the quizdata file
    loadQuiz = () =>{
        const{currentIndex} = this.state
        this.setState(()=>{
            return{
                question:QuizData[currentIndex].question,
                options:QuizData[currentIndex].options,
                answer:QuizData[currentIndex].answer
            }
        })
    }

    // Handling the loading of the next question
   nextQuestionHandler =() =>{
       const {userAnswer, answer,score} = this.state

       if(userAnswer === answer){
        this.setState({
            score:score + 1
        })
    }

       this.setState({
           currentIndex:this.state.currentIndex +1
       })
   }

   componentDidMount(){
       this.loadQuiz()
   }

   checkAnswer = answer =>{
       this.setState({
           userAnswer:answer,
           disabled:false
       })
   }

//    updating the component after loading
   componentDidUpdate(prevProps, prevState){
       const{currentIndex} = this.state
       if(this.state.currentIndex !== prevState.currentIndex){
           this.setState(()=>{
               return{
                   disabled:true,
                   question:QuizData[currentIndex].question,
                   options:QuizData[currentIndex].options,
                   answer:QuizData[currentIndex].answer
               }
           })
       }
   }

//    finishHandler
    finishHandler =() =>{
        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd:true
            })
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default Quiz