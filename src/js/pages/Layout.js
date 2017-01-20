import React from 'react';
import {Link} from 'react-router';
import Nav from '../component/Layout/Nav'


export default class Layout extends React.Component{
  
    render(){
        var estilo = {marginTop: '25px'}
        return(<div>
                <div>
                    <Nav />
                </div>
                
                <div className="container">
                <Link to="settings" className="btn">Settings</Link>
                <Link to="featured" className="btn">Featured</Link>
                <Link to="settings" className="btn">Settings</Link>
                    
                </div>
                <div class="container" style={estilo}>
                    {this.props.children}
                </div>
            </div>)
    }
};

