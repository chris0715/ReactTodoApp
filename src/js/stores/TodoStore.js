import { EventEmitter } from "events";
import Dispatcher from '../Dispatcher';
class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Pay Jesus",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
        {
        id: 235684678,
        text: "mamador",
        complete: false
      }
    ];
  }

    
    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        })
        
        this.emit("change");
    }
  getAll() {
    return this.todos;
  }
    handleAction(action){
    switch(action.type){
            case 'create_todo':{ 
                this.createTodo(action.text)
                break;}
    }
}
}



const todoStore = new TodoStore;
Dispatcher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher = Dispatcher;
export default todoStore;