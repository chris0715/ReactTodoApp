import React from 'react';


export default class TodoItem extends React.Component{
  
    render(){
        return(<div class="bg-grey">
                <span><h3>{this.props.text}</h3></span>
            </div>)
    }
};
