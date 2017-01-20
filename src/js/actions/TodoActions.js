import Dispatcher from './../Dispatcher';

export  function createTodo(text){
    Dispatcher.dispatch({type: 'create_todo', text});
}