import React, {Component} from 'react';

class Navbar extends Component{


    render(){
        return(
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/create-speaker">Create speaker</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/list-speaker">List speaker</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/create-conference">Create Conference</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="/list-conference">List conference</a>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
        );
    };
};


export default Navbar;