import React, { useState, useEffect, Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from '../Button'

class Navbar extends Component {
    const [navbar, setNavbar] = useState(false);

    state = { clicked:false }

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }



    render() {
        return(
            <nav className="navbar">
                <h1 className="navbar-logo"><i className="fas fa-fist-raised"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>                                 
                            </li>                             
                        )
                    })}                                      
                </ul>
                <ul className='nav-icons'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <p className={item.svgName}></p>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar