import React from 'react';
import TodoStore from '../stores/TodoStore';
import TodoItem from '../component/TodosItem';
import * as  TodoActions from '../actions/TodoActions';


export default class Todos extends React.Component{
    
    constructor(){
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
            
    }
 componentWillMount(){
     TodoStore.on("change",()=>{this.setState({todo: TodoStore.getAll()})})
 }
    
    createTodo(){
        TodoActions.createTodo(Date.now())
    }
    render(){
        
        var Lista = this.state.todos.map(function(item){
            return <TodoItem key={item.id} text={item.text} />
        })
        
        console.log(this)
        return(<div>
               
               <h1> Todos </h1>
               <button onClick={this.createTodo.bind(this)}>Agregar</button>
               
                <div>{Lista}</div>
               
               </div>
            
            
        )
    }
}