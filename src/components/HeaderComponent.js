import React, { Component } from 'react';
import Auth from '../services/Auth';

let auth = new Auth();

export default class HeaderComponent extends Component {

    constructor(){
        super();
    };

    logout(){
        auth.logout();
        window.location.href = "/login";
    }
    home(){
        auth.home();
        window.location.href = "/home";
    }

render() {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "#" className = "navbar-brand">
                            Online Airport Management
                        </a>
                        <button onClick={this.home } className="ml-auto nav-link">         
                        Home
                        </button>

                         <button onClick={this.logout } className="ml-auto nav-link">         
                        logout
                        </button>
                    </div>

               
                </nav>
            </header>
        </div>
    );
}
}
