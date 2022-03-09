import React from 'react'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Dear Diary</span>
                    <span class="navbar-text">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                    </span>
                </div>
                
            </nav>
        </div> 
    )
}

export default Header;
