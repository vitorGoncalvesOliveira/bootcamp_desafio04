import React from 'react'

import '../App.css';


function Header(){
  return(
  <header>
      <nav> 
        <h3>Facebook</h3>
        <div className="alingRight">
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>          
        </div>
      </nav>
    </header>
  )
}

export default Header;