import React, { Component } from 'react';
import '../styles.css';
import {QuizData} from './QuizData'


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
        const {question, options, answer, quizEnd, currentIndex, userAnswer} = this.state

        if(quizEnd){
            return(
                <div>
                    <h1>quiz over , final score is {this.state.score}</h1>
                    <p>the correct answer for the quiz are</p>
                    <ul>
                        {QuizData.map((item,index)=>(
                            <li className='options' key={index}>
                                {item.answer}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        return (
            <div>
                <h2>{question}</h2>
                <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
                {
                    options.map(option =>
                        <p key={option.id} className={`options ${userAnswer === option ? "selected": null}`} onClick={()=>this.checkAnswer(option)}>
                            {option}
                        </p>
                        )
                }

                {currentIndex < QuizData.length -1 && 
                <button disabled={this.state.disabled} onClick={this.nextQuestionHandler}>
                    Next Question
                </button>}

                {currentIndex == QuizData.length -1 &&
                <button onClick={this.finishHandler}>
                    Finish
                    </button>}

            </div>
        )
    }
}


export default Quiz